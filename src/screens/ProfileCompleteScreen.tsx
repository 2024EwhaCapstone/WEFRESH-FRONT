import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const ProfileCompleteScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {nickname} = route.params || {nickname: '사용자'};

  const handleStart = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Watermelon.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.welcomeText}>{nickname}님 반가워요!</Text>
      <Text style={styles.subText}>
        COOKiT과 맛있는 나만의 요리를 만들어봐요
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleStart}>
        <Text style={styles.buttonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileCompleteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 20,
    color: '#FF4C4C',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subText: {
    fontSize: 14,
    color: '#FF4C4C',
    fontWeight: '300',
    marginBottom: 60,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FF6B6B',
    width: width - 48,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    position: 'absolute',
    height: 52,
    bottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
