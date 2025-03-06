import React from 'react';
import { TouchableOpacity, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CloseButtonProps {
  onPress?: () => void;  
  style?: StyleProp<ViewStyle>; 
  backgroundColor?: string; 
  iconColor?: string; 
}

const CloseButton: React.FC<CloseButtonProps> = ({ 
  onPress, 
  style, 
  backgroundColor = '#4CAF50',  
  iconColor = 'white' 
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={[styles.closeButton, { backgroundColor }, style]} 
      onPress={onPress ? onPress : () => navigation.goBack()}
    >
      <Image
        source={require('../assets/icons/closeicon.png')}
        style={[styles.image, { tintColor: iconColor }]} 
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 14,
    height: 14,
  },
});

export default CloseButton;