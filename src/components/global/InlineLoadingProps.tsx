// components/global/InlineLoading.tsx
import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet, Dimensions} from 'react-native';

interface InlineLoadingProps {
  message?: string;
  color?: string;
}

const InlineLoading: React.FC<InlineLoadingProps> = ({
  message = '저장 중입니다...',
  color = '#08A900',
}) => {
  return (
    <View style={styles.overlay}>
      <View style={styles.box}>
        <ActivityIndicator size="large" color={color} />
        <Text style={[styles.text, {color}]}>{message}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.25)', 
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  box: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 8,
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default InlineLoading;
