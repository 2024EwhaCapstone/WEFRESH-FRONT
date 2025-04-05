import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Recipe from '../components/my/Recipe';
import Title from '../components/my/Title';
import Post from '../components/my/Post';
import {getSixRecipe} from '../api/my';

const MyPageScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const recipes = await getSixRecipe();
      setData(recipes.data.bookmarks);
    } catch (error) {
      console.error('Error fetching main foods:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteRecipe = bookmarkId => {
    fetchData();
  };

  const renderItem = ({item}) => (
    <Recipe data={item} onDelete={handleDeleteRecipe} />
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.info}>
        <View style={styles.profile} />
        <View style={styles.followBlock}>
          <View style={styles.follow}>
            <Text style={styles.text1}>700</Text>
            <Text style={styles.text2}>팔로워</Text>
          </View>
          <View style={styles.follow}>
            <Text style={styles.text1}>777</Text>
            <Text style={styles.text2}>팔로잉</Text>
          </View>
        </View>
      </View>

      <View style={styles.refrigerator}>
        <View style={styles.handle} />
        <Title text="저장한 레시피 모음" targetScreen="RecipeListScreen" />
        <View style={styles.recipeContainer}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.bookmarkId.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}
            scrollEnabled={false}
          />
        </View>
        <Title text="내가 작성한 게시글 모음" targetScreen="RecipeListScreen" />
        <View style={styles.PostContainer}>
          {[
            {
              title: '부산 파스타 만드는 방법',
              content:
                '코카콜라 맛있다 맛있으면 또 먹으면 배탈나 척척박사님께 물어봅시다.',
            },
            {
              title: '유통기한 한달 지난 식빵',
              content: '유통기한 한달 지난 식빵 아빠한테 줬는데 괜찮겠죠? ',
            },
            {
              title: '떨어진거 3초안에 주우면',
              content:
                '떨어진거 3초안에 주우면 먹어도 되는거 아닌가요?? 먹었는데 친구가 경멸의 눈빛으로 쳐다..',
            },
          ].map((post, index) => (
            <Post key={index} title={post.title} content={post.content} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 98,
    marginTop: 38,
    marginBottom: 48,
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

export default MyPageScreen;
