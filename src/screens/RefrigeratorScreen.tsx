import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RefrigeratorScreen = () => {
  return (
    <View style={styles.container}>
      <Text>🏠 Refri Screen</Text>
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

export default RefrigeratorScreen;