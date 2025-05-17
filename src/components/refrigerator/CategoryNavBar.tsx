import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const CategoryNavBar: React.FC<{
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}> = ({categories, selectedCategory, onSelectCategory}) => {
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
          key={category}
          style={
            selectedCategory === category ? styles.selected : styles.unselected
          }
          onPress={() => onSelectCategory(category)}>
          <Text
            style={
              selectedCategory === category
                ? styles.selectedText
                : styles.unselectedText
            }>
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 42,
  },
  selected: {
    width: 74,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F46161',
    borderWidth: 1,
    borderRadius: 20,
  },
  unselected: {
    width: 74,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#F46161',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unselectedText: {
    color: '#C1C1C1',
    fontSize: 15,
    fontWeight: '500',
  },
});

export default CategoryNavBar;
