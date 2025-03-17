import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const DetailNoticeBar = () => {
  return (
    <View style={styles.noticeContainer}>
      <Text style={styles.noticeText}>자세한 내용을 보려면 클릭</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noticeContainer: {
    position: 'absolute',
    bottom: -60, 
    width: 200, 
    alignSelf: 'center',
    backgroundColor: '#079300', 
    height: 30,
    borderRadius: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
    width: 0,
    height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
},
  noticeText: {
    color: 'white',
    fontSize: 12,
    
  },
});

export default DetailNoticeBar;