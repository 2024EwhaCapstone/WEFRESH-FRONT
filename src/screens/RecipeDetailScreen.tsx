import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
  Alert,
} from 'react-native';
import CloseButton from '../components/global/CloseButton';
import RecipeIngredients from '../components/recipe/RecipeIngredients';
import RecipeSteps from '../components/recipe/RecipeSteps';
import StarRating from '../components/global/StarRating';
import InfoCard from '../components/recipe/InfoCard';
import GreenButton from '../components/global/GreenButton';
import {getRecipeDetail, saveRecipe} from '../api/recipeApi';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootNavigator';

interface RecipeDetailScreenProps {
  route: RouteProp<RootStackParamList, 'RecipeDetailScreen'>;
}

const RecipeDetailScreen: React.FC<RecipeDetailScreenProps> = ({route}) => {
  const recipeId = route?.params?.recipeId || null;
  const navigation = useNavigation();
  console.log('Route params:', route);

  const [activeTab, setActiveTab] = useState<'ingredients' | 'steps'>(
    'ingredients',
  );
  const [recipe, setRecipe] = useState<{
    name: string;
    image: string;
    difficulty: number;
    time: number;
    calorie: number;
    ingredients: {name: string; amount: string}[];
    recipe: string;
    likes: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = await getRecipeDetail(recipeId, 'general');
        setRecipe(data.data);
      } catch (error) {
        console.error('Failed to fetch recipe', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [recipeId]);

  const handleSaveRecipe = async () => {
    if (!recipeId) {
      Alert.alert('오류', '레시피 ID가 없습니다.');
      return;
    }

    try {
      const response = await saveRecipe(recipeId, 'general');
      console.log('Recipe saved successfully!', response);
      Alert.alert('저장 완료', '레시피가 저장되었습니다.', [
        {
          text: '확인',
          // onPress: () => navigation.navigate('MainTabs', { screen: '냉장고' }),
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.error('Error saving recipe:', error);
      Alert.alert('저장 실패', '레시피 저장 중 오류가 발생했습니다.');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F46161" />
      </View>
    );
  }

  const steps =
    recipe?.recipe
      ?.split(/Step \d+\.\s*/)
      ?.filter(Boolean)
      ?.map((step: string, index: number) => ({
        id: index + 1,
        title: `Step ${index + 1}`,
        description: step.trim(),
      })) || [];

  return (
    <View style={styles.container}>
      <CloseButton
        style={styles.closeButton}
        backgroundColor="#F46161"
        iconColor="white"
      />
      <Image source={{uri: recipe?.image}} style={styles.recipeImage} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{recipe?.name}</Text>

        <StarRating rating={recipe?.difficulty ?? 0} />
        <View style={styles.infoContainer}>
          <InfoCard value={`${recipe?.time || 0}분`} label="조리시간" />
          <InfoCard value={`${recipe?.calorie || 0} kcal`} label="칼로리" />
          <InfoCard value={`${recipe?.likes || 0}`} label="Likes" />
        </View>

        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'ingredients' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('ingredients')}>
            <Text style={styles.tabText}>재료</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'steps' && styles.activeTab,
            ]}
            onPress={() => setActiveTab('steps')}>
            <Text style={styles.tabText}>레시피</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contentWrapper}>
          {activeTab === 'ingredients' ? (
            <RecipeIngredients ingredients={recipe?.ingredients || []} />
          ) : (
            <RecipeSteps steps={steps} />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <GreenButton title="다른 음식 추천 받기" onPress={() => {}} />
          <GreenButton title="저장하기" onPress={handleSaveRecipe} />
        </View>
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
  loadingContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},

  contentWrapper: {
    width: '100%',
    height: '40%',
    marginTop: 20,
    marginBottom: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 10,
  },
  recipeImage: {
    width: '100%',
    height: '45%',
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    marginTop: 15,
  },
  rating: {
    fontSize: 20,
    marginRight: 10,
  },
  info: {
    fontSize: 16,
    color: 'gray',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9CC',
    borderRadius: 20,
    marginTop: 20,
    width: '100%',
    height: 32,
    justifyContent: 'space-around',
    padding: 2,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 70,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#F46161',
  },
  tabText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
  },
  scrollContent: {
    width: '95%',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    gap: 20,
  },
});

export default RecipeDetailScreen;
