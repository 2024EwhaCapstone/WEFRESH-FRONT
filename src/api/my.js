import api from './api';

//저장된 레시피 6개 조회
export const getSixRecipe = async () => {
  try {
    const response = await api.get('bookmarks/six');
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

//저장된 레시피 상세 조회
export const getSavedRecipeDetail = async bookmarkId => {
  try {
    const response = await api.get(`bookmarks/${bookmarkId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};
