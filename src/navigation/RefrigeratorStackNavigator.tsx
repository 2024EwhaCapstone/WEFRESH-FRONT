import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RefrigeratorScreen from '../screens/RefrigeratorScreen';

const Stack = createStackNavigator();

const RefrigeratorStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
    
      <Stack.Screen name="Refrigerator" component={RefrigeratorScreen} />
    </Stack.Navigator>
  );
};

export default RefrigeratorStackNavigator;