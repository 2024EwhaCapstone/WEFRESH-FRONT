import React, {useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import CloseButton from '../components/global/CloseButton';
import StarRating from '../components/global/StarRating';
import IngredientTag from '../components/recipe/IngredientTag';
import InfoCard from '../components/recipe/InfoCard';
import DetailNoticeBar from '../components/recipe/DetailNoticeBar';
import GreenButton from '../components/global/GreenButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootNavigator';

const {width, height} = Dimensions.get('window');



const RecipeRecommendScreen = ({route}) => {
  const {recipes} = route.params;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0);
  // const recipe = mockRecipes[currentIndex];
  const recipeList = recipes.data.recipes; // recipes.data.recipes로 접근
  const recipe = recipes.data.recipes[currentIndex];

  // 오늘날짜
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % recipeList.length);
  };

  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + recipeList.length) % recipeList.length);
  };

  const handleNavigateToDetail = useCallback(() => {
    navigation.navigate('RecipeDetailScreen', {recipeId: recipe.recipeId});
  }, [navigation, recipe ]);

  // // 실제 레시피 데이터에서 recipes 배열 추출
  // const recipeList = recipes.data.recipes;

  return (
    <View style={styles.container}>
      <CloseButton
        style={styles.closeButton}
        backgroundColor="white"
        iconColor="#08A900"
      />

      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handlePrev}>
          <Image
            source={require('../assets/icons/double_right_icon.png')}
            style={[styles.double_icon, {marginHorizontal: 30}]}
          />
        </TouchableOpacity>
        <Image source={{uri: recipe.image}} style={styles.food_image} />
        <TouchableOpacity onPress={handleNext}>
          <Image
            source={require('../assets/icons/double_left_icon.png')}
            style={[styles.double_icon, {marginHorizontal: 30}]}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>추천 레시피</Text>
        <Text style={styles.date}>{getTodayDate()}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.recipeTitle}>{recipe.name}</Text>
        {/* <StarRating rating={recipe.rating} /> */}
        <View style={styles.ingredientsContainer}>
          {recipe.ingredients.map((item, idx) => (
            <IngredientTag key={idx} name={item.name} daysLeft={item.dday} color={item.color}/>
          ))}
        </View>
        <View style={styles.infoContainer}>
          <InfoCard value={recipe.time} label="조리시간" />
          <InfoCard value={recipe.calorie} label="칼로리" />
          <InfoCard value={recipe.likes} label="LIKES" />
        </View>

        <View style={styles.buttonContainer}>
          <DetailNoticeBar
            title="눌러서 자세히 보기"
            onPress={handleNavigateToDetail}
          />
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
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
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
    top: -60,
    borderRadius: (width * 0.6) / 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 90,
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
    justifyContent: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    marginTop: 15,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
  },
});

export default RecipeRecommendScreen;
