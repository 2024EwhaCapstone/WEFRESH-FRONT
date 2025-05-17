// api.js
import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';
const ACCESS_TOKEN = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDc0OTQ3NjEsImV4cCI6MTc0ODcwNDM2MSwidXNlcklkIjoxfQ.PZxe8DGZPFUcDsrmcyZRomFxwsQiAAe_VhZCv7V7ioeMhacN5dfmzuCO_FJKOy-E`;

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: ACCESS_TOKEN,
  },
});

export default api;
export {ACCESS_TOKEN};
