import api from './api';

export const getRecipeDetail = async (recipeId, type = 'general') => {
  try {
    const response = await api.get(`/recipes/${recipeId}?type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

export const saveRecipe = async (recipeId, type = 'general') => {
  try {
    const response = await api.post(`/recipes/${recipeId}?type=${type}`, {});
    return response.data;
  } catch (error) {
    console.error('Error saving recipe:', error);
    throw error;
  }
};
