import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>  
      <View style={styles.header}>
      <Image source={require('../../assets/images/wefresh-white.png')} style={styles.header_logo} />
     
         </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#28AA3B', 
  },
  header: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  header_logo: {
    
  
  },
});

export default CustomHeader;