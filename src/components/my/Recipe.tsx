import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Recipe = ({data}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('SavedRecipeDetailScreen', {
      bookmarkId: data.bookmarkId,
    });
  };
  return (
    <TouchableOpacity style={styles.Recipe} onPress={handlePress}>
      <Image
        source={{uri: data.image}}
        style={{flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10}}
      />
      <View style={styles.menu}>
        <Text style={styles.text1}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Recipe: {
    width: 114,
    height: 114,
    shadowColor: '#00000040',
    shadowOpacity: 0.3,
    shadowOffset: {width: 10, height: -10},
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#eeee44',
    borderRadius: 20,
  },
  menu: {
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: 'black',
  },
  text1: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default Recipe;
