import re
from tqdm import tqdm
from GithubParser import GithubParser



class RepoToPost:
    username=None
    @staticmethod
    def write_posts(username, repositories, post_dir_path="../_projects") :
        RepoToPost.username=username
        print("Writing posts...")
        for repository in tqdm(repositories):
            if repository.name != RepoToPost.username+".github.io":
                RepoToPost.write_post(repository, post_dir_path)
        print("Finished writing posts!")

    @staticmethod
    def write_post(repository, post_dir_path):
        contents=None
        try:
            contents = repository.repo.get_contents("README.md").decoded_content.decode('utf-8')

        except:
            print("nothing")
        if contents!= None:
            contents = RepoToPost.remove_title(contents)
            contents = RepoToPost.fix_image_links(contents)
            contents = RepoToPost.fix_urls(contents)
            img_url, alt_text = RepoToPost.get_header_img(contents)
            contents = RepoToPost.add_github_to_image_url(contents,repository.name)
            contents = RepoToPost.image_to_figure(contents)

            

            file_path = RepoToPost.get_post_path(repository, post_dir_path)
            title = repository.name.replace('-', ' ')
            creation_date = repository.creation_date.strftime('%Y-%m-%d %H:%M:%S %z')
            last_update_date = repository.last_update_date.strftime('%Y-%m-%d %H:%M:%S %z')

            with open(file_path, 'w', encoding="utf-8") as f:
                f.write('---\n')
                f.write('layout: page\n')
                f.write('category: repositories\n')

                f.write(f'title: {title}\n')
                f.write(f'description: {repository.repo.description}\n')
                f.write(f'date: {creation_date}\n')
                f.write(f'last_modified_at: {last_update_date}\n')
                f.write(f'url: {repository.url}\n')
                f.write('importance: 1\n')

                f.write(f'img: ')
                if img_url:
                    f.write(f'{RepoToPost.add_github_to_url(img_url,repository.name)}\n')
                else:
                    f.write(f'https://socialify.git.ci/{repository.fullname}/image?&forks=1&issues=1&language=1&name=1&owner=1&stargazers=1&theme=Light\n')

                # if alt_text:
                #     f.write(f'  alt: {alt_text}\n')
                # else:
                #     f.write(f'  alt: {repository.name}\n')

                if repository.topics:
                    f.write(f'tags: [{", ".join(repository.topics)}]\n')
                f.write(f'categories: ["Repository", {repository.language}]\n')
                f.write('---\n')
                # f.write(f'\n## [Open In Github]({repository.url})')
                # f.write(f'[![Open In Github](https://icons-for-free.com/download-icon-part+1+github-1320568339880199515_0.svg)]({repository.url})\n\n')

                f.write(f'<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="{repository.url}" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>\n')
                f.write('---\n')
                f.write(contents)

    @staticmethod
    def get_post_path(repository, post_dir_path) -> str:
        creation_date = repository.creation_date.strftime("%Y-%m-%d")
        return f"{post_dir_path}/{repository.name}.md"
        # return f"{post_dir_path}/{creation_date}-{repository.name}.md"

    @staticmethod
    def remove_title(contents) -> str:
        if contents.startswith('# '):
            return contents.split('\n', 1)[1]
        return contents

    @staticmethod
    def fix_image_links(contents) -> str:
        for content in contents.split('\n'):
            if RepoToPost.is_image(content):
                fixed_content = content.replace('blob', 'raw')
                
                contents = contents.replace(content, fixed_content)
        return contents

    @staticmethod
    def fix_urls(contents) -> str:
        for content in contents.split('\n'):
            if RepoToPost.is_unwrapped_url(content):
                urls = re.findall(r'(http[s]?://[^\s\*]+)', content)

                fixed_content = content
                for url in urls:
                    fixed_content = fixed_content.replace(url, f'[{url}]({url})')
                contents = contents.replace(content, fixed_content)
        return contents

    @staticmethod
    def get_header_img(contents) -> tuple:
        for content in contents.split('\n'):
            if RepoToPost.is_image(content):
                return RepoToPost.get_image_data(content)
        return None, None

    @staticmethod
    def get_image_data(content) -> tuple:
        url = content.split('(')[1].split(')')[0]
        alt = content.split('[')[1].split(']')[0]
        if '!' in alt:
            alt = alt.split('!')[1]
        return url, alt

    @staticmethod
    def is_image(content) -> bool:
        return '![' in content and ']' in content and '(' in content and ')' in content
    @staticmethod
    def add_github_to_image_url(contents,repo_name):
         for content in contents.split('\n'):
            if RepoToPost.is_image(content):
                p_index=content.find("](")
                new_content= content[:p_index+2]+"https://raw.githubusercontent.com/"+RepoToPost.username+"/"+repo_name+"/main"+content[p_index+2:]
                contents=contents.replace(content,new_content)
         return contents
    @staticmethod
    def add_github_to_url(url,repo_name):
            return "https://raw.githubusercontent.com/"+RepoToPost.username+"/"+repo_name+"/main"+url
   
    @staticmethod
    def image_to_figure(contents):
         for content in contents.split('\n'):
            if RepoToPost.is_image(content):
                url,alt=RepoToPost.get_image_data(content)
                new_content='{% include figure.html path="'+url+'" alt="'+alt+'" class="img-fluid rounded z-depth-1" zoomable=true %}'
                contents=contents.replace(content,new_content)
         return contents

    @staticmethod
    def is_unwrapped_url(content) -> bool:
        return 'http' in content and \
            '[' not in content and ']' not in content \
            and '(' not in content and ')' not in content \
            and 'clone' not in content


if __name__ == '__main__':

    access_token = None
    username = 'ibaiGorordo'

    parser = GithubParser(access_token)
    repositories = parser(username)

    RepoToPost.write_posts(username,repositories)
