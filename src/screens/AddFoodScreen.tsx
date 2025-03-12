// import React, { useRef } from 'react';
// import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
// import { RNCamera } from 'react-native-camera';
// import { useNavigation } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RootStackParamList } from '../navigation/RootNavigator';


// type NavigationProps = StackNavigationProp<RootStackParamList, 'AddFoodScreen'>;

// const AddFoodScreen = () => {
//   const cameraRef = useRef<RNCamera>(null);
//   const navigation = useNavigation<NavigationProps>(); 

//   const takePicture = async () => {
//     if (cameraRef.current) {
//       const options = { quality: 0.5, base64: true };
//       const data = await cameraRef.current.takePictureAsync(options);
      
      
//       navigation.navigate('PreviewScreen', { photoUri: data.uri });
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <RNCamera
//         ref={cameraRef}
//         style={styles.preview}
//         type={RNCamera.Constants.Type.back}
//         flashMode={RNCamera.Constants.FlashMode.auto}
//         captureAudio={false}
//       />
//       <View style={styles.captureContainer}>
//         <TouchableOpacity onPress={takePicture} style={styles.captureButton}>
//           <Text style={styles.captureText}>📷 SNAP</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: 'black' },
//   preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
//   captureContainer: { position: 'absolute', bottom: 30, width: '100%', alignItems: 'center' },
//   captureButton: { backgroundColor: '#fff', padding: 15, borderRadius: 50 },
//   captureText: { fontSize: 18, fontWeight: 'bold' },
// });

// export default AddFoodScreen;

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import PreviewScreen from './PreviewScreen';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const AddFoodScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카메라</Text>


      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('PreviewScreen')}
      >
        <Text style={styles.buttonText}>사진 찍기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    
    bottom: 30,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddFoodScreen;