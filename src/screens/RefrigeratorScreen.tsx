import React, {useState, useEffect, useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import SearchBar from '../components/refrigerator/SearchBar';
import Item from '../components/refrigerator/Item';
import CategoryNavBar from '../components/refrigerator/CategoryNavBar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {getAllFoods, getRecommendedRecipes} from '../api/main';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const RefrigeratorScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isSelecting, setIsSelecting] = useState(false);

  const fetchData = async () => {
    const foods = await getAllFoods(selectedCategory, searchTerm);
    setData(foods.data.foods);
  };
  useFocusEffect(
    useCallback(() => {
      fetchData();
    }, [selectedCategory, searchTerm]),
  );
  useEffect(() => {
    fetchData();
  }, [selectedCategory, searchTerm]);

  const handleItemPress = (foodId: number) => {
    setSelectedItems(prevSelected => {
      if (prevSelected.includes(foodId)) {
        return prevSelected.filter(id => id !== foodId);
      } else {
        return [...prevSelected, foodId];
      }
    });
  };

  const handleRecommendationPress = () => {
    setIsSelecting(true);
  };

  const handleSelectionComplete = async () => {
    if (selectedItems.length > 0) {
      navigation.navigate('LoadingScreen');
      try {
        const recipes = await getRecommendedRecipes(selectedItems);
        navigation.navigate('RecipeRecommendScreen', {recipes});
      } catch (error) {
        console.error('레시피 요청 중 오류 발생:', error);
        // 오류 처리 로직 추가 가능
      }
    } else setIsSelecting(false);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchTerm} />
      <View style={styles.view1}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[styles.scrollview1]}>
          <CategoryNavBar
            categories={['전체', '과일', '고기', '냉동식품', '채소', '반찬']}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </ScrollView>

        <FlatList
          data={data}
          renderItem={({item}) => (
            <Item
              data={item}
              isSelected={selectedItems.includes(item.foodId)}
              onPress={handleItemPress}
              isSelecting={isSelecting}
            />
          )}
          keyExtractor={item => item.foodId.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.contentContainer}
        />
        <TouchableOpacity
          style={[
            styles.button,
            isSelecting ? styles.buttonSelected : styles.buttonDefault,
          ]}
          onPress={
            isSelecting ? handleSelectionComplete : handleRecommendationPress
          }>
          <Text
            style={
              isSelecting ? styles.buttonTextSelected : styles.buttonTextDefault
            }>
            {isSelecting ? '선택 완료' : '레시피 추천'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    gap: 20,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  view1: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    gap: 16,
    paddingHorizontal: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonDefault: {
    backgroundColor: '#4CAF50',
  },
  buttonSelected: {
    backgroundColor: 'white',
  },
  buttonTextDefault: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSelected: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  recipesContainer: {
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 16,
  },
  recipesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  recipeItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  contentContainer: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  scrollview1: {
    flexGrow: 0,
    flexShrink: 1,
    paddingVertical: 0,
    marginVertical: 0,
  },
});

export default RefrigeratorScreen;
