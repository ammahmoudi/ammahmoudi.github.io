from RepoToPost import RepoToPost
from GithubParser import GithubParser

access_token = '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'
github_user = 'ammahmoudi'

parser = GithubParser(access_token)
repositories = parser(github_user)

RepoToPost.write_posts(github_user, repositories)
