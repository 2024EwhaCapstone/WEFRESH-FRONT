import React from 'react';
import { TouchableOpacity, Image, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface CloseButtonProps {
  onPress?: () => void;  // 버튼 클릭 이벤트
  style?: StyleProp<ViewStyle>; // 외부 스타일 적용 가능
  backgroundColor?: string; // 배경 색상 지정 가능
  iconColor?: string; // 아이콘 색상 지정 가능
}

const CloseButton: React.FC<CloseButtonProps> = ({ 
  onPress, 
  style, 
  backgroundColor = '#4CAF50',  // 기본값: 초록색
  iconColor = 'white'  // 기본값: 흰색
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity 
      style={[styles.closeButton, { backgroundColor }, style]} // 배경색 적용
      onPress={onPress ? onPress : () => navigation.goBack()}
    >
      <Image
        source={require('../assets/icons/closeicon.png')}
        style={[styles.image, { tintColor: iconColor }]} // 아이콘 색 적용
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