import api from './api';

export const getMainFoods = async () => {
  try {
    const response = await api.get('foods/expiring');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};
