import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Divider = () => {
  return <View style={styles.Divider}></View>;
};

const styles = StyleSheet.create({
  Divider: {
    flex: 1,
    height: 3,
    backgroundColor: '#eeeeee',
  },
});

export default Divider;
