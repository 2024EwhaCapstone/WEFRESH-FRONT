import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';
import CategorySelector from '../components/addfood/CategorySelector';
import DetailNoticeBar from '../components/recipe/DetailNoticeBar';

type NavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;

const FoodRegisterScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [foodName, setFoodName] = useState('연어');
  const [category, setCategory] = useState('과일');
  const [expirationDate, setExpirationDate] = useState({
    year: '2025',
    month: '01',
    day: '12',
  });

  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isDateEditing, setIsDateEditing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../assets/images/dot_line.png')}
          style={styles.line}
        />
        <Image
          source={require('../assets/images/img_recipe2.png')}
          style={styles.image}
        />
        <Text style={styles.freshnessText}>신선도 99%</Text>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.nameInput}>
          <TextInput
            style={styles.foodName}
            value={foodName}
            onChangeText={setFoodName}
          />
        </View>

        <TouchableOpacity
          onPress={() => setIsCategoryEditing(true)}
          activeOpacity={0.8}>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>카테고리</Text>
            <Text style={styles.detailText}>{category}</Text>
          </View>
        </TouchableOpacity>

        {isCategoryEditing && (
          <CategorySelector
            selectedCategory={category}
            onSelectCategory={selected => {
              setCategory(selected);
              setIsCategoryEditing(false);
            }}
          />
        )}

        <View style={styles.detailRow}>
          <Text style={styles.detailTitle}>유통기한</Text>
          {isDateEditing ? (
            <View style={styles.dateInputContainer}>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.year}
                onChangeText={value =>
                  setExpirationDate(prev => ({...prev, year: value}))
                }
                keyboardType="numeric"
                maxLength={4}
                onBlur={() => setIsDateEditing(false)}
              />
              <Text style={styles.dateLabel}>년</Text>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.month}
                onChangeText={value =>
                  setExpirationDate(prev => ({...prev, month: value}))
                }
                keyboardType="numeric"
                maxLength={2}
                onBlur={() => setIsDateEditing(false)}
              />
              <Text style={styles.dateLabel}>월</Text>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.day}
                onChangeText={value =>
                  setExpirationDate(prev => ({...prev, day: value}))
                }
                keyboardType="numeric"
                maxLength={2}
                onBlur={() => setIsDateEditing(false)}
              />
              <Text style={styles.dateLabel}>일</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={() => setIsDateEditing(true)}>
              <Text style={styles.dateText}>
                {`${expirationDate.year}년 ${expirationDate.month}월 ${expirationDate.day}일`}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>삭제하기</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveButton}>
          <Text style={styles.buttonText}>등록하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  imageWrapper: {
    width: '90%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
    marginBottom: 10,
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
    bottom: 5,
    right: 10,
    fontSize: 14,
    color: '#F46161',
    fontWeight: 'bold',
  },
  infoContainer: {
    width: '90%',
    padding: 15,
    marginBottom: 20,
  },
  nameInput: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderRadius: 30,
    backgroundColor: '#fff',
    height: 50,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  foodName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
    paddingVertical: 10,
    marginTop: 5,
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
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  dateInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dateInput: {
    fontSize: 16,

    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    padding: 2,
    textAlign: 'center',
    width: 50,
  },
  dateLabel: {
    fontSize: 16,
    color: '#666',
    marginHorizontal: 3,
  },
  buttonContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    bottom: 20,
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
    backgroundColor: '#F46161',
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

export default FoodRegisterScreen;
