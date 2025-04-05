import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import CloseButton from '../components/global/CloseButton';
import Recipe from '../components/my/Recipe';
import Title from '../components/my/Title';
import Post from '../components/my/Post';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootNavigator';
import {getAllRecipes} from '../api/my';

interface RecipeListScreenProps {
  route: RouteProp<RootStackParamList, 'RecipeListScreen'>;
}

const RecipeListScreen: React.FC<RecipeListScreenProps> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = await getAllRecipes();
        setData(recipes.data.bookmarks);
      } catch (error) {
        console.error('Error fetching main recipes:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <CloseButton
        style={styles.closeButton}
        backgroundColor="#08A900"
        iconColor="white"
      />
      <View style={styles.refrigerator}>
        <View style={styles.handle} />
        <View style={styles.recipeContainer}>
          <FlatList
            data={data}
            renderItem={({item}) => <Recipe data={item} />}
            keyExtractor={item => item.bookmarkId.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'justify-start',
              gap: 4,
              paddingVertical: 5,
            }}
            scrollEnabled={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 30,
    right: 20,
    zIndex: 10,
  },
  refrigerator: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#28AA3B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: '#28AA3B',
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingBottom: 16,
  },
  handle: {
    width: 64,
    height: 8,
    backgroundColor: '#FFD15B',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profile: {
    width: 66,
    height: 66,
    borderRadius: 100,
    backgroundColor: 'gray',
  },
  followBlock: {
    flexDirection: 'row',
    gap: 36,
  },
  follow: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  text1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 500,
  },
  recipeContainer: {
    marginTop: 60,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 12,
  },
  PostContainer: {
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    width: '100%',
    gap: 12,
  },
});

export default RecipeListScreen;
