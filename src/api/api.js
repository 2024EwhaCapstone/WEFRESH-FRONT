// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDQ4MTI1NjksImV4cCI6MTc0NjAyMjE2OSwidXNlcklkIjoxfQ.QWnp2FFu1DsDDft7h9alCd-eTkPB0o3Trv8wl6koRkFaUQ0_nLP88SjHBoyZm3Pd`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: ACCESS_TOKEN,
  },
});

export default api;
export { ACCESS_TOKEN };
