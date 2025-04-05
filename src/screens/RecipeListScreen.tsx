import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootNavigator';

interface FoodDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FoodDetailScreen'>;
}

const RecipeListScreen = () => {
  return (
    <View style={styles.container}>
      <Text>레시피 리스트 화면</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecipeListScreen;
