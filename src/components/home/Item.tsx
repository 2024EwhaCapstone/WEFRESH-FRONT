import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Item = ({data}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('FoodDetailScreen', {foodId: data.foodId});
  };

  // dday 포맷팅 함수
  const formatDday = dday => {
    return dday >= 0 ? `D+${dday}` : `D${dday}`; // 음수일 경우 'D-4' 형식으로 표시
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <View style={[styles.date, {backgroundColor: data.color}]}>
        <Text style={styles.text1}>{formatDday(data.dday)}</Text>
      </View>
      <View style={styles.content}>
        <Image
          source={{uri: data.image}}
          style={{width: 102, height: 102, marginVertical: 6}}
        />
        <Text style={styles.text2}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 162,
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
    elevation: 3,
  },
  date: {
    width: 54,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  text2: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default Item;
