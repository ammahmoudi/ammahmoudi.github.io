---
layout: page
permalink: /publications/
title: Publications
description: Publications by categories in reversed chronological order.
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

Peer-reviewed publications and their accompanying open-source implementations.

{% include bib_search.liquid %}

<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
