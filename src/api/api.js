// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDM3NzA1ODYsImV4cCI6MTc0NDk4MDE4NiwidXNlcklkIjoxfQ.pnvGUa9G6hLHnvw9lSQFWy13XsmS50WWN74KjtJ8HmKACmWOw1k_sQpu5LTvA6xH`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: ACCESS_TOKEN,
  },
});

export default api;
export { ACCESS_TOKEN };
