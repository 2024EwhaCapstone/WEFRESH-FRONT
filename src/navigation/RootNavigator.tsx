import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeRecommendScreen from '../screens/RecipeRecommendScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
export type RootStackParamList = {
  MainTabs: undefined;
  RecipeRecommend: undefined;
  RecipeDetailScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      
      <Stack.Screen 
        name="RecipeRecommend" 
        component={RecipeRecommendScreen} 
        options={{ presentation: 'card', headerShown: false }} 
      />
      <Stack.Screen 
        name="RecipeDetailScreen"  
        component={RecipeDetailScreen} 
        options={{ presentation: 'card', headerShown: false }} 
      />
      
    </Stack.Navigator>
  );
};

export default RootNavigator;