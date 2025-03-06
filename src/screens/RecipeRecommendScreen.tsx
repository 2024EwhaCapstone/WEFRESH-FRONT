import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CloseButton from '../components/CloseButton'; // X 버튼 컴포넌트
import StarRating from '../components/StarRating';
import IngredientTag from '../components/recipe/IngredientTag';
import InfoCard from '../components/recipe/InfoCard';
const { width, height } = Dimensions.get('window');

const RecipeRecommendScreen = () => {
  return (
    <View style={styles.container}>
      
      
      <CloseButton 
        style={styles.closeButton} 
        backgroundColor="white"  
        iconColor="#08A900"  
      />

      
      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/icons/double_right_icon.png')} 
          style={[styles.double_icon, { marginHorizontal: 40 }]} // 간격 추가
        />
        <Image 
          source={require('../assets/images/img_recipe1.png')} 
          style={styles.food_image} 
        />
        <Image 
          source={require('../assets/icons/double_left_icon.png')} 
          style={[styles.double_icon, { marginHorizontal: 40 }]} // 간격 추가
        />
      </View>

      
      <View style={styles.header}>
        <Text style={styles.title}>추천 레시피</Text>
        <Text style={styles.date}>2024.02.12</Text>
      </View>

      
      <View style={styles.content}>
        <Text style={styles.recipeTitle}>연어 덮밥</Text>
        <StarRating rating={4} />
        <View style={styles.ingredientsContainer}>
          <IngredientTag name="연어" daysLeft={1} />
          <IngredientTag name="대파" daysLeft={4} />
          <IngredientTag name="양파" daysLeft={24} />
          <IngredientTag name="당근" daysLeft={4} />
        </View>
        <View style={styles.infoContainer}>
  <InfoCard value="30분" label="조리시간" />
  <InfoCard value="780 kcal" label="칼로리" />
  <InfoCard value="100" label="LIKES" />
</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10, 
  },
  header: {
    backgroundColor: '#08A900', 
    width: '100%',
    height: height * 0.5, 
    borderBottomLeftRadius: 196, 
    borderBottomRightRadius: 196,
    paddingTop: 120,
    paddingLeft: 50,
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 20,
    color: 'white',
  },
  imageContainer: {
    position: 'absolute',
    top: height * 0.35, 
    alignSelf: 'center',
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: (width * 0.6) / 2, 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    zIndex: 20, 
    flexDirection: 'row',
  },
  double_icon: {
    width: 24,
    height: 24,
  },
  food_image: {
    width: '90%',
    height: '90%',
    top:-60,
    borderRadius: (width * 0.6) / 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 50, 
  },
  recipeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  ingredientsContainer: {
    width: '80%', 
   flexWrap: 'wrap', 
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center' 
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', 
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default RecipeRecommendScreen;