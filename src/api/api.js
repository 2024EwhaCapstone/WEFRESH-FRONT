// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NTAzMzc4ODMsImV4cCI6MTc1MjkyOTg4MywidXNlcklkIjoxfQ.-nYfkFiSkA5UgRi924YF4msAuW-roSQctbMUlezqF7pFhYfOxz34enYg90ZHSYoO`;

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
