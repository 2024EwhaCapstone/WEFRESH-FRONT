import api from './api'; 


export const getRecipeDetail = async (recipeId, type = 'general') => {
  try {
    console.log(`요청 보냄: /recipes/${recipeId}?type=${type}`);

    const response = await api.get(`/recipes/${recipeId}?type=${type}`, {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDM3NzA1ODYsImV4cCI6MTc0NDk4MDE4NiwidXNlcklkIjoxfQ.pnvGUa9G6hLHnvw9lSQFWy13XsmS50WWN74KjtJ8HmKACmWOw1k_sQpu5LTvA6xH` }, 
    });
    console.log("응답 받음:", response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

export const saveRecipe = async (recipeId, type = 'general') => {
  try {
    const response = await api.post(
      `/recipes/${recipeId}?type=${type}`,
      {}, 
      {
        headers: { 
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDM3NzA1ODYsImV4cCI6MTc0NDk4MDE4NiwidXNlcklkIjoxfQ.pnvGUa9G6hLHnvw9lSQFWy13XsmS50WWN74KjtJ8HmKACmWOw1k_sQpu5LTvA6xH` , 
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error saving recipe:', error);
    throw error;
  }
};