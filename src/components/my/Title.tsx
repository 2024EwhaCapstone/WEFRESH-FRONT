import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/RootNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'RecipeListScreen'
>;

const Title = ({text, targetScreen}) => {
  const navigation = useNavigation<NavigationProp>();
  const handlePress = () => {
    navigation.navigate(targetScreen as keyof RootStackParamList);
  };
  return (
    <View style={styles.Title}>
      <Text style={styles.text1}>{text}</Text>
      <TouchableOpacity style={styles.view1} onPress={handlePress}>
        <Text style={styles.text2}>전체보기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 12,
  },
  view1: {
    width: 74,
    height: 17,
    backgroundColor: '#00000000',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  text2: {
    color: '#FFFFFF',
    fontSize: 10,
  },
});

export default Title;
