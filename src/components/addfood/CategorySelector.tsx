import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface CategorySelectorProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = ['과일', '고기', '냉동식품', '채소', '반찬'];

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.categoryList}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategoryButton,
            ]}
            onPress={() => onSelectCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.selectedCategoryText,
              ]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 10},
  categoryList: {flexDirection: 'row', flexWrap: 'wrap'},
  categoryButton: {
    borderWidth: 1,
    borderColor: '#F46161',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedCategoryButton: {backgroundColor: '#F46161'},
  categoryText: {fontSize: 14, color: '#F46161'},
  selectedCategoryText: {color: 'white', fontWeight: 'bold'},
});

export default CategorySelector;
