import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://wefresh.store';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// access tocken
// api.interceptors.request.use(
//   async (config) => {
//     try {
//       const token = await AsyncStorage.getItem('accessToken');
//       if (token) {
//         config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIyMDE1NTgsImV4cCI6MTc0MzQxMTE1OCwidXNlcklkIjoxfQ.8U6IJ_AYoIbrA48xq6_fmppOT4pikysc1WPDHN5MVIMeqIyYhnS8H1NDB0zx8pDW`;
//       }
//     } catch (error) {
//       console.error('Error retrieving token:', error);
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Get 요청
export const getData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Post 요청
export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// 요청(Request) 로깅
api.interceptors.request.use(
  (config) => {
    console.log("Request:", config);
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);

// 응답(Response) 로깅
api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    return response;
  },
  (error) => {
    console.error("Response Error:", error.response);
    return Promise.reject(error);
  }
);

export default api;