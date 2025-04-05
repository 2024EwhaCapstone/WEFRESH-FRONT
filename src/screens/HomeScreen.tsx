import React, {useEffect, useState} from 'react';
// import TopBar from '../components/home/TopBar';
import CustomHeader from '../components/global/CustomHeader';
import Divider from '../components/home/Divider';
import Item from '../components/home/Item';
import DateAlert from '../components/home/DateAlert';
import {getMainFoods} from '../api/main';

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
  }, []); // 컴포넌트 마운트 시 데이터 가져오기

  const renderItem = ({item}) => <Item data={item} />;

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
          data={data} // 상태에서 데이터 사용
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
