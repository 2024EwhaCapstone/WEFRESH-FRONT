import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIzMTEzMjEsImV4cCI6MTc0MzUyMDkyMSwidXNlcklkIjoxfQ.1HLUQTxvoRy4BCyr7nBbuF2HU47x5RUGHFE-vQYqsBug1qyc5GkQTk5Q6Scj-w1Y` , 
  },
});

// ✅ 새로운 음식 등록 (POST)
export const createFood = async (foodData) => {
  try {
    const formData = new FormData();
    formData.append('image', foodData.image);
    formData.append('name', foodData.name);
    formData.append('category', foodData.category);
    formData.append('date', foodData.date);
    formData.append('count', foodData.count);
    formData.append('memo', foodData.memo);

    const response = await api.post('/foods', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating food:', error);
    throw error;
  }
};

// ✅ 기존 음식 수정 (PUT)
export const updateFood = async (foodId, foodData) => {
  try {
    const response = await api.put(`/foods/${foodId}`, foodData, {
      headers: { 'Content-Type': 'application/json' },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating food:', error);
    throw error;
  }
};

export default foodApi;