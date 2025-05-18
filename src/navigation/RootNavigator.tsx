import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeRecommendScreen from '../screens/RecipeRecommendScreen';
import RecipeDetailScreen from '../screens/RecipeDetailScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import FoodDetailScreen from '../screens/FoodDetailScreen';
import LoadingScreen from '../screens/LoadingScreen';
import RecipeListScreen from '../screens/RecipeListScreen';
import RefrigeratorScreen from '../screens/RefrigeratorScreen';
import MyPageScreen from '../screens/MyPageScreen';
import SavedRecipeDetailScreen from '../screens/SavedRecipeDetailScreen';
import {Asset} from 'react-native-image-picker';

export type RootStackParamList = {
  MainTabs: undefined;
  RecipeRecommend: {recipes: any};
  RecipeDetailScreen: {recipeId: number};
  RefrigeratorScreen: undefined;
  AddFoodScreen: undefined;
  LoadingScreen: undefined;
  FoodDetailScreen: {
    foodId: number | null;
    foodName?: string;
    category?: string;
    name?: string;
    expirationDate?: {year: string; month: string; day: string} | null;
    foodCount?: number;
    foodMemo?: string;
    selectedImage?: Asset;
  };
  RecipeListScreen: undefined;
  MyPageScreen: undefined;
  SavedRecipeDetailScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      <Stack.Screen
        name="RecipeRecommend"
        component={RecipeRecommendScreen}
        options={{presentation: 'card', headerShown: false}}
      />
      <Stack.Screen
        name="RecipeDetailScreen"
        component={RecipeDetailScreen}
        options={{presentation: 'card', headerShown: false}}
      />
      <Stack.Screen
        name="SavedRecipeDetailScreen"
        component={SavedRecipeDetailScreen}
        options={{presentation: 'card', headerShown: false}}
      />
      <Stack.Screen
        name="RecipeListScreen"
        component={RecipeListScreen}
        options={{presentation: 'card', headerShown: false}}
      />
      <Stack.Screen
        name="RefrigeratorScreen"
        component={RefrigeratorScreen}
        options={{presentation: 'card', headerShown: false}} // 필요에 따라 headerShown 조절
      />

      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="FoodDetailScreen" component={FoodDetailScreen} />
      <Stack.Screen name="MyPageScreen" component={MyPageScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
