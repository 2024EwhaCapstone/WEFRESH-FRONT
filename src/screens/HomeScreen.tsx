import React from 'react';
// import TopBar from '../components/home/TopBar';
import CustomHeader from '../components/global/CustomHeader';
import Divider from '../components/home/Divider';
import Item from '../components/home/Item';
import DateAlert from '../components/home/DateAlert';

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
  const data = Array.from({length: 6}, (_, index) => ({id: index.toString()})); // 예시

  const renderItem = ({item}) => <Item />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* <TopBar /> */}
        {/* <CustomHeader isHome={true} /> */}
        <View style={styles.backView}>
          <View style={styles.view1}>
            <View style={styles.view2}>
              <Text style={styles.text1}>오늘의 메뉴</Text>
              <Text style={styles.text2}>2025년 01월 04일</Text>
            </View>
            <View style={styles.view3}>
              <Text style={styles.text3}>새우 피자</Text>
            </View>
          </View>
          <ImageBackground
            source={require('../assets/icons/home/food-image.png')}
            style={styles.imageBackground}></ImageBackground>
        </View>
        <Divider />
        <View style={styles.dateAlertContainer}>
          <DateAlert />
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
    height: 340,
    backgroundColor: '#28AA3B',
    paddingTop: 34,
    paddingHorizontal: 24,
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
    width: 113,
    height: 28,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    justifyContent: 'center',
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
});

export default HomeScreen;
