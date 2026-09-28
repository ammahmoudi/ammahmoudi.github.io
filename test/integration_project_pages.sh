#!/usr/bin/env bash
set -euo pipefail

tmp_dir="$(mktemp -d)"
tmp_site="${tmp_dir}/site"

cleanup() {
  rm -rf "${tmp_dir}"
}
trap cleanup EXIT

bundle exec jekyll build \
  --config "_config.yml,test/fixtures/imagemagick-disabled.yml" \
  -d "${tmp_site}" >/dev/null

expected_banners="$(grep -Rl 'class="project-repository-link"' _projects --include='*.md' | wc -l)"
rendered_banners="$(grep -Rl 'class="project-repository-link"' "${tmp_site}/projects" --include='*.html' | wc -l)"

if [ "${expected_banners}" -eq 0 ] || [ "${rendered_banners}" -ne "${expected_banners}" ]; then
  echo "expected ${expected_banners} repository banners, rendered ${rendered_banners}" >&2
  exit 1
fi

if grep -R -q '&lt;div id="open-in-github"' "${tmp_site}/projects"; then
  echo "escaped legacy project banner found in rendered HTML" >&2
  exit 1
fi

bad_links="$({ grep -R -A1 'class="project-repository-link"' "${tmp_site}/projects" --include='*.html' || true; } \
  | grep 'href=' \
  | grep -v 'href="https://github.com/ammahmoudi/' || true)"
if [ -n "${bad_links}" ]; then
  echo "repository banner does not link to GitHub:" >&2
  echo "${bad_links}" >&2
  exit 1
fi

echo "project page integration checks passed (${rendered_banners} banners)"
