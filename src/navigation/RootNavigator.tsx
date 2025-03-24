import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeRecommendScreen from '../screens/RecipeRecommendScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import LoadingScreen from '../screens/LoadingScreen';
export type RootStackParamList = {
  MainTabs: undefined;
  RecipeRecommend: undefined;
  RecipeDetailScreen: { recipeId: number };
  AddFoodScreen: undefined;
  LoadingScreen: undefined;
  FoodDetailScreen:  { 
    foodId: number | null; 
    foodName?: string;     
    category?: string;
    expirationDate?: { year: string; month: string; day: string };
    foodCount?: number;
    foodMemo?: string;
};
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
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen}/>
      
      
    </Stack.Navigator>
  );
};

export default RootNavigator;