import axios from 'axios';

const API_BASE_URL = 'https://wefresh.store';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIzMTEzMjEsImV4cCI6MTc0MzUyMDkyMSwidXNlcklkIjoxfQ.1HLUQTxvoRy4BCyr7nBbuF2HU47x5RUGHFE-vQYqsBug1qyc5GkQTk5Q6Scj-w1Y` , 
  },
});


export const createFood = async (foodData) => {
  try {
    const formData = new FormData();

    formData.append('image', {
      uri: foodData.image.uri,
      name: foodData.image.fileName || 'image.jpg',
      type: foodData.image.type || 'image/jpeg',
    });
  
    formData.append('name', foodData.name);
    formData.append('category', foodData.category);
    formData.append('date', foodData.date);
    formData.append('count', String(foodData.count));
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

