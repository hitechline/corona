import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://covid19-brazil-api.now.sh/api/report/v1',
});

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export const newsApi = axios.create({
  baseURL:
    'https://newsapi.org/v2/top-headlines?q=covid&country=br&apiKey=1cc2caf9ce7a4c6a960cb5cbe4fe1f23',
});
