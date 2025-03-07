import React,{ useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import CategorySelector from '../components/addfood/CategorySelector';
type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const PreviewScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [category, setCategory] = useState('과일');

  return (
    <View style={styles.container}>
      
      <Image source={require('../assets/images/header.png')} style={styles.header_logo} />
      

      <View style={styles.imageWrapper}>
        <Image source={require('../assets/images/dot_line.png')} style={styles.line} />
        <Image source={require('../assets/images/img_recipe2.png')} style={styles.image} />
        <Text style={styles.freshnessText}>신선도 99%</Text>
      </View>

   
     <View style={styles.infoContainer}>
     
      <CategorySelector selectedCategory={category} onSelectCategory={setCategory} />
    
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
  },
  header_logo: {
    position: 'absolute',
    width: '100%',
    height: 85,
    top: 60,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  imageWrapper: {
    width: '90%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 150,
    marginBottom: 40,
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  image: {
    width: '85%',
    height: '85%',
    resizeMode: 'contain',
  },
  freshnessText: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '90%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
  },
  nameInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  foodName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
  
    borderRadius: 50,
    padding: 5,
  },
  editIcon: {
    width: 33,
    height: 33,
    
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    bottom: 30,
    position: 'absolute',
  },
  deleteButton: {
    flex: 1,
    backgroundColor: '#BDBDBD',
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default PreviewScreen;