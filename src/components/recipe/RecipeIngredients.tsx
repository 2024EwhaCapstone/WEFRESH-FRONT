import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Ingredient {
  name: string;
  amount: string;
}

interface RecipeIngredientsProps {
  ingredients: Ingredient[];
}

const RecipeIngredients: React.FC<RecipeIngredientsProps> = ({ ingredients }) => {
  return (
    <View style={styles.container}>
      {ingredients.map((item, index) => (
        <View key={index} style={styles.ingredientRow}>
          <View style={styles.ingredientNameContainer}>
            <Image source={require('../../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
            <Text style={styles.ingredientName}>{item.name}</Text>
          </View>
          <Text style={styles.ingredientAmount}>{item.amount}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ingredientRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    
  },
  ingredientNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dotIcon: {
    marginRight: 8,
    
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  ingredientAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default RecipeIngredients;
