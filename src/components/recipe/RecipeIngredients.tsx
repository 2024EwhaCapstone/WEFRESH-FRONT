import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeIngredients = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>재료 목록</Text>
      <View style={styles.ingredientList}>
        <Text>- 간장 20ml</Text>
        <Text>- 아보카도 300g</Text>
        <Text>- 연어 300g</Text>
        <Text>- 당근 300g</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ingredientList: {
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default RecipeIngredients;