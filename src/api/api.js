// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NTAzMDMzMTksImV4cCI6MTc1MTUxMjkxOSwidXNlcklkIjoxfQ.7t_5iHSpTuDLF6wX2G5zFoUF4VmjyT-HPIlMm3YvG6tvsMFNQYsVfFQZJBGeD6gT`;

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
