import React from 'react';
import {Button, Alert} from 'react-native';
import {login, getProfile} from '@react-native-seoul/kakao-login';

const KakaoLoginButton = () => {
  const handleLogin = async () => {
    try {
      const token = await login();
      console.log('AccessToken:', token.accessToken);

      const profile = await getProfile();
      console.log('UserProfile:', profile);

      // 이후 profile 정보를 백엔드에 전송하거나 상태에 저장
      Alert.alert('로그인 성공', `${profile.nickname}님 환영합니다`);
    } catch (err) {
      console.error('카카오 로그인 실패:', err);
      Alert.alert('로그인 실패', '카카오 로그인 중 오류가 발생했습니다.');
    }
  };

  return <Button title="카카오 로그인" onPress={handleLogin} />;
};

export default KakaoLoginButton;
