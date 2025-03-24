import api from './api'; 


export const getRecipeDetail = async (recipeId, type = 'general') => {
  try {
    console.log(`요청 보냄: /recipes/${recipeId}?type=${type}`);

    const response = await api.get(`/recipes/${recipeId}?type=${type}`, {
      headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIzMTEzMjEsImV4cCI6MTc0MzUyMDkyMSwidXNlcklkIjoxfQ.1HLUQTxvoRy4BCyr7nBbuF2HU47x5RUGHFE-vQYqsBug1qyc5GkQTk5Q6Scj-w1Y` }, 
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
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3NDIzMTEzMjEsImV4cCI6MTc0MzUyMDkyMSwidXNlcklkIjoxfQ.1HLUQTxvoRy4BCyr7nBbuF2HU47x5RUGHFE-vQYqsBug1qyc5GkQTk5Q6Scj-w1Y` , 
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