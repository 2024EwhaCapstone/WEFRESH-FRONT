import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const OnboardingScreen = () => {
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('윤진');
  const navigation = useNavigation();

  const isValid = nickname.trim().length >= 1 && name.trim().length >= 1;

  const handleSubmit = () => {
    if (!isValid) {
      Alert.alert('입력 오류', '닉네임과 이름을 모두 입력해 주세요.');
      return;
    }
    navigation.navigate('ProfileCompleteScreen', {nickname: nickname});
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}>
      <View style={styles.circles}>
        <View
          style={[
            styles.circle,
            {backgroundColor: '#FF4C4C', top: 100, zIndex: 3},
          ]}
        />
        <View
          style={[
            styles.circle,
            {backgroundColor: '#FF7A7A', top: 150, zIndex: 2},
          ]}
        />
        <View
          style={[
            styles.circle,
            {backgroundColor: '#E4E4E4', top: 200, zIndex: 1, opacity: 0.8},
          ]}
        />
      </View>
      <View style={styles.card}>
        <Text style={styles.logoText}>COOKiT</Text>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>닉네임</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="닉네임을 입력해 주세요"
              placeholderTextColor="#aaa"
              value={nickname}
              onChangeText={setNickname}
              maxLength={5}
            />
            <Text style={styles.counter}>{nickname.length}/5</Text>
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>이름</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="이름을 입력해 주세요"
              placeholderTextColor="#aaa"
              value={name}
              onChangeText={setName}
              maxLength={5}
            />
            <Text style={styles.counter}>{name.length}/5</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
          <Text style={styles.cancelButtonText}>취소</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitButton, !isValid && {opacity: 0.4}]}
          onPress={handleSubmit}
          disabled={!isValid}>
          <Text style={styles.submitButtonText}>확인</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  circles: {
    position: 'relative',
    height: 180,

    alignItems: 'center',
  },
  circle: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    opacity: 0.9,
  },
  card: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT * 0.66,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -4},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
    zIndex: 100,
  },
  logoText: {
    fontSize: 28,
    color: '#FF4C4C',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 32,
  },
  inputGroup: {
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  counter: {
    fontSize: 12,
    color: '#999',
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: '#ccc',
    paddingVertical: 14,
    height: 52,
    justifyContent: 'center',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 80,
  },
  cancelButtonText: {
    color: '#fff',

    fontSize: 16,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#FF6B6B',
    height: 52,
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
