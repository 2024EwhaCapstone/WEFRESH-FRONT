import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Post = () => {
  return (
    <TouchableOpacity style={styles.Post}>
      <Text style={styles.text1}>부산 파스타 만드는 방법 </Text>
      <Text style={styles.text2}>
        코카콜라 맛있다 맛있으면 또 먹으면 배탈나 척척박사님께 물어봅시다. 딩 동
        댕 동 화살표 무지개 ~{' '}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Post: {
    flex: 1,
    height: 68,
    gap: 4,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 15,
    shadowColor: '#00000040',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: -4},
    shadowRadius: 4,
    elevation: 4,
  },
  text1: {
    color: '#28AA3B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text2: {
    color: '#000000',
    fontSize: 12,
  },
});

export default Post;
