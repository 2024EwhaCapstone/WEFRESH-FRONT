import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Post = ({title, content}) => {
  return (
    <TouchableOpacity style={styles.Post}>
      <Text style={styles.text1}>{title}</Text>
      <Text style={styles.text2}>{content}</Text>
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
