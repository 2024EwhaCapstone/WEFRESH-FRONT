import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import FoodDetailScreen from './FoodDetailScreen';
import {launchImageLibrary, Asset} from 'react-native-image-picker';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const AddFoodScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [selectedImage, setSelectedImage] = useState<Asset | null>(null);

  const pickImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (!response.didCancel && response.assets) {
        const asset = response.assets[0];
        setSelectedImage(asset);
        navigation.navigate('FoodDetailScreen', {
          foodId: null,
          selectedImage: asset,
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>카메라</Text>

      {/* <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('FoodDetailScreen', {foodId : null})}
      >
        <Text style={styles.buttonText}>사진 찍기</Text>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>이미지 선택하기</Text>
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
    shadowOffset: {width: 0, height: 2},
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
