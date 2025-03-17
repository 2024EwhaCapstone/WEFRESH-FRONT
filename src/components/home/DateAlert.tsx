import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const DateAlert = () => {
  return (
    <View style={styles.DateAlert}>
      <View style={styles.circle}>
        <Image
          source={require('../../assets/icons/home/Flame.png')}
          style={{width: 18, height: 18}}
        />
      </View>
      <Text style={styles.text1}>유통기한 임박</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  DateAlert: {
    width: 120,
    height: 26,
    backgroundColor: '#FFD15B',
    marginTop: 8,
    // marginBottom: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4,
  },
  circle: {
    width: 22,
    height: 22,
    backgroundColor: '#FF7979',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default DateAlert;
