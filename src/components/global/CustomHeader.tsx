import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const CustomHeader = ({isHome = false}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/wefresh-white.png')}
          style={styles.header_logo}
        />
        {isHome && (
          <TouchableOpacity onPress={() => console.log('설정 버튼 클릭')}>
            <Image
              source={require('../../assets/icons/home/settings.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        )}
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
  header_logo: {},
});

export default CustomHeader;
