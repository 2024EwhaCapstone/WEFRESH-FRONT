import api from './api';

export const getSixRecipe = async () => {
  try {
    const response = await api.get('bookmarks/six');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};
