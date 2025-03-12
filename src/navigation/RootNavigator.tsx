import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeRecommendScreen from '../screens/RecipeRecommendScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import PreviewScreen from '../screens/PreviewScreen';
export type RootStackParamList = {
  MainTabs: undefined;
  RecipeRecommend: undefined;
  RecipeDetailScreen: undefined;
  AddFoodScreen: undefined;
  // PreviewScreen: { photoUri: string };
  PreviewScreen: undefined;
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
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} />
      
    </Stack.Navigator>
  );
};

export default RootNavigator;