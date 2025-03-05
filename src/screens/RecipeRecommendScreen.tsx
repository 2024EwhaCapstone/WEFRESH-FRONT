import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import CloseButton from '../components/CloseButton'; // X 버튼 컴포넌트

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
          source={require('../assets/images/img_recipe1.png')} 
          style={styles.image} 
        />
      </View>

      
      <View style={styles.header}>
        <Text style={styles.title}>추천 레시피</Text>
        <Text style={styles.date}>2024.02.12</Text>
      </View>

      
      <View style={styles.content}>
        <Text style={styles.recipeTitle}>연어 덮밥</Text>
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
    backgroundColor: '#4CAF50', 
    width: '100%',
    height: height * 0.5, 
    borderBottomLeftRadius: 196, 
    borderBottomRightRadius: 196,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  date: {
    fontSize: 14,
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
  },
  image: {
    width: '90%',
    height: '90%',
    borderRadius: (width * 0.6) / 2, 
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0, 
  },
  recipeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RecipeRecommendScreen;