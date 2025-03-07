import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import CloseButton from '../components/CloseButton';
import RecipeIngredients from '../components/recipe/RecipeIngredients';
import RecipeSteps from '../components/recipe/RecipeSteps';
import StarRating from '../components/StarRating';
import InfoCard from '../components/recipe/InfoCard';
import GreenButton from '../components/GreenButton';
import { ColorLabelRow } from '../components/ColorLabel';
const RecipeDetailScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>('ingredients');

  return (
    <View style={styles.container}>
      
      <CloseButton 
        style={styles.closeButton} 
        backgroundColor="#08A900"  
        iconColor="white"  
      />

      
      <Image source={require('../assets/images/img_recipe1.png')} style={styles.recipeImage} />

     
      <View style={styles.contentContainer}>
        <Text style={styles.title}>연어 덮밥</Text>

        
        <StarRating rating={4} />
        <ColorLabelRow
            labels={[
              { text: '연어', color: '#E57373' },
              { text: '당근', color: '#FBC02D' },
              { text: '당근', color: '#FBC02D' },
            ]}
          />
        <View style={styles.infoContainer}>
          <InfoCard value="30분" label="조리시간" />
          <InfoCard value="780 kcal" label="칼로리" />
          <InfoCard value="Easy" label="난이도" />
        </View>
       
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'ingredients' && styles.activeTab]}
            onPress={() => setActiveTab('ingredients')}
          >
            <Text style={styles.tabText}>재료</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'steps' && styles.activeTab]}
            onPress={() => setActiveTab('steps')}
          >
            <Text style={styles.tabText}>레시피</Text>
          </TouchableOpacity>
        </View>

       
        <ScrollView style={styles.scrollContent}>
          {activeTab === 'ingredients' ? <RecipeIngredients /> : <RecipeSteps />}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <GreenButton title="다른 음식 추천 받기" onPress={() => {}} />
          <GreenButton title="저장하기" onPress={() => {}} />
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  recipeImage: {
    width: '100%',
    height: '40%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -80, 
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%', 
    alignSelf: 'center',
    marginTop: 15,
  },
  rating: {
    fontSize: 20,
    marginRight: 10,
  },
  info: {
    fontSize: 16,
    color: 'gray',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9CC',
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    height: 32,
    justifyContent: 'space-around',
    padding: 2,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 70,
    borderRadius: 20,
    
  },
  activeTab: {
    backgroundColor: '#08A900',
  },
  tabText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContent: {
    width: '95%',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%',
    marginBottom: 20,
  },
});

export default RecipeDetailScreen;