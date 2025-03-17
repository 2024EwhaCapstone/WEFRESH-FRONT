import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="궁금한 식재료를 검색해보세요"
        placeholderTextColor="#9C9292"
      />
      <Image
        source={require('../../assets/icons/refrigerator/search.png')}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 361,
    height: 48,
    borderWidth: 1,
    borderColor: '#C1C1C1',
    borderRadius: 32,
    paddingVertical: 12,
    paddingLeft: 20,
    paddingRight: 16,
  },
  icon: {
    width: 24,
    height: 24,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#484848',
  },
});

export default SearchBar;
