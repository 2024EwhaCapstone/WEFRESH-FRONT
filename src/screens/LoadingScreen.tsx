import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import FoodDetailScreen from './FoodDetailScreen';
type NavigationProp = StackNavigationProp<RootStackParamList, 'LoadingScreen'>;

const LoadingScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  
  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>WeFresh</Text>
      <ActivityIndicator size="large" color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
  },
});

export default LoadingScreen;