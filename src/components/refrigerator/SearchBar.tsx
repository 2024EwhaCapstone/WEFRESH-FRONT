import React, {useState} from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';

const SearchBar = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm); // 부모 컴포넌트에 검색어 전달
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="궁금한 식재료를 검색해보세요"
        placeholderTextColor="#9C9292"
        onChangeText={setSearchTerm}
        onSubmitEditing={handleSearch} // Enter 키로 검색
      />
      <Image
        source={require('../../assets/icons/refrigerator/search.png')}
        style={styles.icon}
        onTouchEnd={handleSearch} // 아이콘 클릭 시 검색
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
