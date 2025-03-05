import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import RefrigeratorScreen from '../screens/RefrigeratorScreen';
import AddFoodScreen from '../screens/AddFoodScreen';
import MyPageScreen from '../screens/MyPageScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="홈" component={HomeScreen} />
        <Tab.Screen name="냉장고" component={RefrigeratorScreen} />
        <Tab.Screen name="추가" component={AddFoodScreen} />
        <Tab.Screen name="마이페이지" component={MyPageScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;