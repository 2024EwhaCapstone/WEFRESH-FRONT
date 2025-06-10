// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDg4MDEzMTYsImV4cCI6MTc1MDAxMDkxNiwidXNlcklkIjoxfQ.16o_ksU7NMwuWPCPTnL3VwnQBwqD1NEf8BvXz6nCBThbszDd56xlWwhUVONWMNKD`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: ACCESS_TOKEN,
  },
});

export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = token;
};

export default api;
export {ACCESS_TOKEN};
