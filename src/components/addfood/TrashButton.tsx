import React from 'react';
import { TouchableOpacity, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface TrashButtonProps {
  onPress?: () => void;  
  style?: StyleProp<ViewStyle>; 
  backgroundColor?: string; 
  iconColor?: string; 
}

const TrashButton: React.FC<TrashButtonProps> = ({ 
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
        source={require('../../assets/icons/trash_icon.png')}
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

export default TrashButton;