import api from './api';

export const getRecipeList = async () => {
  try {
    const response = await api.get('bookmarks/six');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};
