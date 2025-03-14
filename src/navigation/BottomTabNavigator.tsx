import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RefrigeratorScreen from '../screens/RefrigeratorScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import MyPageScreen from '../screens/MyPageScreen';
import FoodRegisterScreen from '../screens/FoodRegisterScreen';
import CustomHeader from '../components/global/CustomHeader';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const AddFoodStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AddFoodScreen" component={AddFoodScreen} />
      <Stack.Screen 
        name="FoodRegisterScreen" 
        component={FoodRegisterScreen} 
        options={{
          headerTitle: () => <CustomHeader />, 
          
        }} 
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;

          if (route.name === '홈') {
            iconSource = require('../assets/icons/homeicon.png');
          } else if (route.name === '냉장고') {
            iconSource = require('../assets/icons/refriicon.png');  
          } else if (route.name === '추가') {
            iconSource = require('../assets/icons/cameraicon.png');
          } else if (route.name === '마이페이지') {
            iconSource = require('../assets/icons/mypageicon.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#4CAF50' : 'gray', 
              }}
            />
          );
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="홈" component={HomeScreen} 
      options={{
        header: () => <CustomHeader />, 
      }}  
      />
      <Tab.Screen name="냉장고" component={RefrigeratorScreen} 
      options={{
        header: () => <CustomHeader />, 
      }}  
      />
    
      <Tab.Screen 
        name="추가" 
        component={AddFoodStack} 
        options={{
          header: () => <CustomHeader />, 
        }} 
        />
      <Tab.Screen name="마이페이지" component={MyPageScreen}
      options={{
        header: () => <CustomHeader />, 
      }}  
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;