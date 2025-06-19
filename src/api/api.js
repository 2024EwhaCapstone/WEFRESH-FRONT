// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NTAzMzMzNDYsImV4cCI6MTc1MjkyNTM0NiwidXNlcklkIjoxfQ.TTLMHMkhMUni6o4OZefuwsCr5RdS4GoTP7a8rB1fzBTIYYbc-GfCt6K7uoqbrUUW`;

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
