import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'RecipeListScreen'
>;

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
