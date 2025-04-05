import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Item = ({data}) => {
  const handlePress = () => {
    // 아이템이 눌렸을 때의 동작을 여기에 추가
    console.log('아이템 클릭됨');
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.item}>
      <View style={styles.date}>
        <Text style={styles.text1}>D-{data.dday}</Text>
      </View>
      <View style={styles.content}>
        <Image source={{uri: data.image}} style={{width: 102, height: 102}} />
        <Text style={styles.text2}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 150,
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
    backgroundColor: '#F46161',
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
