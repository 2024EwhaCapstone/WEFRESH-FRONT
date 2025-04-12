import React, {useEffect, useState} from 'react';
// import TopBar from '../components/home/TopBar';
import CustomHeader from '../components/global/CustomHeader';
import Divider from '../components/home/Divider';
import Item from '../components/home/Item';
import DateAlert from '../components/home/DateAlert';
import {getMainFoods, getTodaysRecipe} from '../api/main';

import {
  SafeAreaView,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';

const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [recipeData, setRecipeData] = useState([]);
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const today = new Date();
    const formattedDate = `${today.getFullYear()}년 ${String(
      today.getMonth() + 1,
    ).padStart(2, '0')}월 ${String(today.getDate()).padStart(2, '0')}일`;
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const foods = await getMainFoods();
        setData(foods.data.foods);
      } catch (error) {
        console.error('Error fetching main foods:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchRecipeData = async () => {
      try {
        const recipes = await getTodaysRecipe();
        setRecipeData(recipes.data.recipes);
        console.log(recipes.data.recipes);
      } catch (error) {
        console.error('Error fetching todays recipe:', error);
      }
    };
    fetchRecipeData();
  }, []);

  const renderItem = ({item}) => <Item data={item} />;

  const handleDotPress = index => {
    setCurrentRecipeIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backView}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.text1}>오늘의 메뉴</Text>
              <Text style={styles.text2}>{currentDate}</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text3}>
                {recipeData.length > 0
                  ? recipeData[currentRecipeIndex].name
                  : '레시피 없음'}
              </Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                recipeData.length > 0
                  ? recipeData[currentRecipeIndex].image
                  : '',
            }}
            style={styles.imageBackground}></ImageBackground>
          {/* <View style={styles.ingredientsContainer}>
            {recipeData[currentRecipeIndex].ingredients.map(
              (ingredient, index) => (
                <Text key={index} style={styles.ingredientText}>
                  #{ingredient}
                </Text>
              ),
            )}
          </View> */}
        </View>
        <View style={styles.paginationContainer}>
          {recipeData.map((_, index) => (
            <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
              <View
                style={[
                  styles.dot,
                  currentRecipeIndex === index && styles.activeDot,
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Divider />
        <View style={styles.dateAlertContainer}>
          <DateAlert />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.foodId.toString()}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            marginTop: 12,
            marginBottom: 20,
          }}
          contentContainerStyle={{paddingHorizontal: 28}}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backView: {
    flex: 1,
    backgroundColor: '#28AA3B',
    paddingTop: 8,
    paddingHorizontal: 24,
    paddingBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',

    zIndex: -1,
  },

  dateAlertContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '100%',
    marginBottom: 8,
  },
  view2: {
    gap: 6,
  },
  view3: {
    paddingHorizontal: 8,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingredient: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text1: {color: '#FFFFFF', fontSize: 18, fontWeight: 'bold', marginLeft: 4},
  text2: {color: '#FFFFFF', fontSize: 15, fontWeight: 'bold'},
  text3: {color: '#000000', fontSize: 16, fontWeight: 'bold'},
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 348,
    height: 204,
  },
  ingredientsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',

    zIndex: 10,
  },
  ingredientText: {
    color: '#000000',
    fontSize: 16,
    marginRight: 5,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#28AA3B',
  },
});

export default HomeScreen;
