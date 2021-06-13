class GithubService {
  constructor() {
    this.baseURL = 'https://api.github.com';
  }

  getOrgRepos = async (org, perPage = 50, page = 1) => {
    const response = await fetch(`${this.baseURL}/orgs/${org}/repos?sort=updated&per_page=${perPage}&page=${page}`);
    const body = await response.json();
    return body;
  };

  getOrgInfo = async (org) => {
    const response = await fetch(`${this.baseURL}/orgs/${org}`);
    const body = await response.json();
    return body;
  }

  getRepo = async (org, repo) => {
    const response = await fetch(`${this.baseURL}/repos/${org}/${repo}`);
    const body = await response.json();
    return body;
  };

  getRepoContributors = async (org, repo) => {
    const response = await fetch(`${this.baseURL}/repos/${org}/${repo}/contributors`);
    const body = await response.json();
    return body;
  };
}

const githubService = new GithubService();

export default githubService;
