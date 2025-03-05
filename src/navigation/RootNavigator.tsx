import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './BottomTabNavigator';
import RecipeRecommendScreen from '../screens/RecipeRecommendScreen';

export type RootStackParamList = {
  MainTabs: undefined;
  RecipeRecommend: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      
      <Stack.Screen 
        name="RecipeRecommend" 
        component={RecipeRecommendScreen} 
        options={{ presentation: 'card', headerShown: false }} // 바텀탭 숨기기
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;