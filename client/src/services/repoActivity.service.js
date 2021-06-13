import axios from 'axios';

export default class RepoActivityService {
  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:3001/api/repos',
      withCredentials: true,
    });
  }

  getAllRepos = () => this.instance.get('/');

  createRepoActivity = (data) => this.instance.post('/', data);
}
