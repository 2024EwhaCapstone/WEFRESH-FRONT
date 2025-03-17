import api from './api'; 


export const getRecipeDetail = async (recipeId, type = 'general') => {
  try {
    console.log(`📤 요청 보냄: /recipes/${recipeId}?type=${type}`);

    const response = await api.get(`/recipes/${recipeId}?type=${type}`, {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIyMDE1NTgsImV4cCI6MTc0MzQxMTE1OCwidXNlcklkIjoxfQ.8U6IJ_AYoIbrA48xq6_fmppOT4pikysc1WPDHN5MVIMeqIyYhnS8H1NDB0zx8pDW` }, 
    });
    console.log("📥 응답 받음:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};


export const saveRecipe = async (recipeId, type = 'general') => {
  try {
    const response = await api.post(`/recipes/${recipeId}?type=${type}`);
    return response.data;
  } catch (error) {
    console.error('Error saving recipe:', error);
    throw error;
  }
};