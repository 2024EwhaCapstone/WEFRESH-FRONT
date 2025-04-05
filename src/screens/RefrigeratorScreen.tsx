import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import SearchBar from '../components/refrigerator/SearchBar';
import Item from '../components/refrigerator/Item';
import CategoryNavBar from '../components/refrigerator/CategoryNavBar';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {getAllFoods} from '../api/main';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const RefrigeratorScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const foods = await getAllFoods(selectedCategory, searchTerm);
    setData(foods.data.foods);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, searchTerm]); // 카테고리나 검색어가 변경될 때마다 데이터 가져오기

  return (
    <View style={styles.container}>
      <SearchBar onSearch={setSearchTerm} />
      <View style={styles.view1}>
        <CategoryNavBar
          categories={['전체', '과일', '고기', '채소', '반찬']}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <FlatList
          data={data}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.foodId.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('RecipeRecommend')}>
          <Text style={styles.buttonText}>레시피 추천</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 20,
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  view1: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
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
});

export default RefrigeratorScreen;
