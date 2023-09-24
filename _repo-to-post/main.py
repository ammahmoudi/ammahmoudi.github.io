from RepoToPost import RepoToPost
from GithubParser import GithubParser

access_token = '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'
github_user = 'ammahmoudi'

parser = GithubParser(access_token)
repositories = parser(github_user)

RepoToPost.write_posts(github_user,repositories)
