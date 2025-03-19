import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Recipe from '../components/my/Recipe';
import Title from '../components/my/Title';
import Post from '../components/my/Post';

const MyPageScreen = () => {
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
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={({item}) => <Recipe />}
            keyExtractor={item => item.toString()}
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
          {[1, 2, 3].map(item => (
            <Post key={item} />
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
