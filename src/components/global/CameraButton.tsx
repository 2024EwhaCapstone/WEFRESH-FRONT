import React from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface CameraButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  iconColor?: string;
}

const CameraButton: React.FC<CameraButtonProps> = ({
  onPress,
  style,
  backgroundColor = '#F46161',
  iconColor = 'white',
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.closeButton, {backgroundColor}, style]}
      onPress={onPress ? onPress : () => navigation.goBack()}>
      <Image
        source={require('../../assets/icons/cameraicon.png')}
        style={[styles.image, {tintColor: iconColor}]}
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
    width: 20,
    height: 20,
  },
});

export default CameraButton;
