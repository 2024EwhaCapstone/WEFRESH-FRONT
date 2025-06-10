import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {login, isKakaoTalkInstalled} from '@react-native-seoul/kakao-login';
import api, {setAuthToken} from '../api/api';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '490762292607-dgj8q2k6mdm3ju8om3tlm40iir03m9n2.apps.googleusercontent.com',
  //   });
  // }, []);

  const handleKakaoLogin = async () => {
    try {
      const token = await login();
      const accessToken = token.accessToken;
      const isAvailable = await isKakaoTalkInstalled();
      console.log('isKakaoTalkInstalled:', isAvailable);
      if (!isAvailable) {
        Alert.alert(
          '카카오톡 앱이 필요합니다',
          '카카오톡이 설치되어 있어야 로그인할 수 있어요.',
        );
        return;
      }

      console.log('로그인성공:', accessToken);
      setAuthToken(accessToken);

      const response = await api.post(
        '/auth/signin',
        {provider: 'KAKAO'},
        // {
        //   headers: {
        //     'Content-Type': 'application/json',
        //     Authorization: accessToken,
        //   },
        // }
      );

      const user = response.data;
      console.log('백엔드 로그인 응답:', user);

      if (user.name === null) {
        navigation.navigate('OnboardingScreen');
      } else {
        navigation.navigate('MainTabs');
      }
    } catch (err) {
      console.error('카카오 로그인 실패 또는 API 오류:', err);
      Alert.alert('로그인 실패', '문제가 발생했습니다.');
    }
  };

  const handleGoogleLogin = async () => {
    navigation.navigate('OnboardingScreen');
  };

  // const handleGoogleLogin = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     const {idToken} = await GoogleSignin.getTokens();

  //     console.log('Google ID Token:', idToken);
  //     setAuthToken(idToken);

  //     const response = await api.post(
  //       '/auth/signin',
  //       {provider: 'GOOGLE'},
  //       // {
  //       //   headers: {
  //       //     'Content-Type': 'application/json',
  //       //     Authorization: idToken,
  //       //   },
  //       // }
  //     );

  //     const user = response.data;
  //     console.log('백엔드 로그인 응답:', user);

  //     if (user.name === null) {
  //       navigation.navigate('OnboardingScreen');
  //     } else {
  //       navigation.navigate('MainTabs');
  //     }
  //   } catch (err) {
  //     console.error('Google 로그인 실패 또는 API 오류:', err);
  //     Alert.alert('로그인 실패', '문제가 발생했습니다.');
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.circles}>
        <View
          style={[
            styles.circle,
            {backgroundColor: '#FF4C4C', top: 0, zIndex: 3},
          ]}
        />
        <View
          style={[
            styles.circle,
            {backgroundColor: '#FF7A7A', top: 50, zIndex: 2},
          ]}
        />
        <View
          style={[
            styles.circle,
            {backgroundColor: '#E4E4E4', top: 100, zIndex: 1},
          ]}
        />
      </View>

      <Text style={styles.title}>COOKiT</Text>
      <Text style={styles.subtitle}>내 손안의 쿠킹마마</Text>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.googleButton}
          onPress={handleGoogleLogin}>
          <Image
            source={require('../assets/images/google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleKakaoLogin}>
          <Image
            source={require('../assets/images/kakao_login_medium_wide.png')}
            style={styles.kakaoImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>소셜로그인으로 시작해요</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  circles: {
    position: 'relative',
    height: 180,
    marginBottom: 40,
    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.9,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FF4C4C',
    marginTop: 40,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginVertical: 12,
  },
  buttonGroup: {
    bottom: -100,
    width: '100%',
    gap: 12,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginHorizontal: 22,
    height: 48,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
  },
  kakaoImage: {
    width: '100%',
    borderRadius: 8,
  },
  footerText: {
    bottom: -120,
    fontSize: 12,
    color: '#888',
  },
});
