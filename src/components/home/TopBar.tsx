import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const TopBar = () => {
  return (
    <View style={styles.TopBar}>
      <Text style={styles.Logo}>{'WeFresh'}</Text>
      <TouchableOpacity onPress={() => console.log('설정 버튼 클릭!')}>
        <Image
          source={require('../../assets/icons/home/settings.png')}
          style={{width: 20, height: 20}}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  TopBar: {
    flex: 1,
    height: 61,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  Logo: {
    color: '#28AA3B',
    fontSize: 32,
    fontWeight: 'bold',
  },
});

export default TopBar;
