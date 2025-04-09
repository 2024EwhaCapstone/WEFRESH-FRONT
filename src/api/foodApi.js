import api, { ACCESS_TOKEN } from './api';

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
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating food:', error);
    throw error;
  }
};

export const getFreshness = async (foodId) => {
  try {
    const response = await api.get(`/foods/${foodId}/freshness`);
    return response.data;
  } catch (error) {
    console.error('Error fetching freshness:', error);
    throw error;
  }
};

export const postFreshness = async (foodId, image) => {
  const formData = new FormData();
  formData.append('image', {
    uri: image.uri,
    name: image.name || 'image.jpg',
    type: image.type || 'image/jpeg',
  });

  const response = await api.post(`/foods/${foodId}/freshness`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response.data;
};

// export const updateFood = async (foodId, foodData) => {
//   try {
//     const response = await api.put(`/foods/${foodId}`, foodData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error('Error updating food:', error);
//     throw error;
//   }
// };
export const updateFood = async (foodId, foodData) => {
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

    const response = await api.put(`/foods/${foodId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating food:', error?.response || error);
    throw error;
  }
};
export const deleteFood = async (foodId) => {
  try {
    const response = await api.delete(`/foods/${foodId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting food:', error);
    throw error;
  }
};