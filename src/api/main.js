import api from './api';

//메인에서 유통기한 임박한 4가지 식재료 조회
export const getMainFoods = async () => {
  try {
    const response = await api.get('foods/expiring');
    return response.data;
  } catch (error) {
    console.error('Error fetching 4 food details:', error);
    throw error;
  }
};

//냉장고 화면 조회 + 검색 및 카테고리 선택 포함
export const getAllFoods = async (category = '', name = '') => {
  try {
    // 카테고리가 '전체'인 경우
    if (category === '전체') {
      const response = await api.get(`foods?name=${name}`); // 카테고리 없이 name만 전달
      return response.data;
    } else {
      const response = await api.get(`foods?category=${category}&name=${name}`); // 카테고리와 name 모두 전달
      return response.data;
    }
  } catch (error) {
    console.error('Error fetching all foods details:', error);
    throw error;
  }
};

//음식 상세정보 조회
export const getFoodDetail = async foodId => {
  try {
    const response = await api.get(`foods/${foodId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe details:', error);
    throw error;
  }
};

//오늘의 추천 레시피 조회
export const getTodaysRecipe = async () => {
  try {
    const response = await api.get(`/recipes/today`);
    return response.data;
  } catch (error) {
    console.error('Error fetching today recipe:', error);
    throw error;
  }
};
