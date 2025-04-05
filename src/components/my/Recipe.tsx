import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {deleteRecipe} from '../../api/my';

const Recipe = ({data}) => {
  const navigation = useNavigation();
  const [isSaved, setIsSaved] = useState(true);

  const handlePress = () => {
    navigation.navigate('SavedRecipeDetailScreen', {
      bookmarkId: data.bookmarkId,
    });
  };

  const toggleSave = async () => {
    if (isSaved) {
      try {
        await deleteRecipe(data.bookmarkId);
        Alert.alert('삭제 완료', '레시피가 삭제되었습니다.');
      } catch (error) {
        console.error('레시피 삭제 실패:', error);
        Alert.alert('오류', '레시피 삭제 중 오류가 발생했습니다.');
      }
    }
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSave} style={styles.saveButton}>
        <Image
          source={
            isSaved
              ? require('../../assets/icons/refrigerator/unsaved.png')
              : require('../../assets/icons/refrigerator/saved.png')
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.Recipe} onPress={handlePress}>
        <Image
          source={{uri: data.image}}
          style={{flex: 1, borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        />
        <View style={styles.menu}>
          <Text style={styles.text1}>{data.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  saveButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  icon: {
    width: 24,
    height: 20,
  },
  Recipe: {
    width: 114,
    height: 114,
    shadowColor: '#00000040',
    shadowOpacity: 0.3,
    shadowOffset: {width: 10, height: -10},
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#FFFFFF',
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
