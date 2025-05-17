import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import CloseButton from '../components/global/CloseButton';
import GreenButton from '../components/global/GreenButton';
import CategorySelector from '../components/addfood/CategorySelector';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/RootNavigator';
import DetailNoticeBar from '../components/recipe/DetailNoticeBar';
import {
  getFreshness,
  createFood,
  updateFood,
  postFreshness,
  deleteFood,
} from '../api/foodApi';
import TrashButton from '../components/addfood/TrashButton';
import CameraButton from '../components/global/CameraButton';
import {getFoodDetail} from '../api/main';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import InlineLoading from '../components/global/InlineLoadingProps';

interface FoodDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FoodDetailScreen'>;
}

const FoodDetailScreen: React.FC<FoodDetailScreenProps> = ({route}) => {
  const {foodId, selectedImage} = route.params;
  const [foodName, setFoodName] = useState(route.params.name || '알수없음');
  const [activeTab, setActiveTab] = useState<'info' | 'freshness'>('info');
  const [category, setCategory] = useState(route.params.category || '미지정');
  const [foodCount, setFoodCount] = useState(route.params.count || 0);
  const [foodMemo, setFoodMemo] = useState(route.params.memo || '없음');
  const [expirationDate, setExpirationDate] = useState({
    year: '2025',
    month: '01',
    day: '01',
  });
  const [image, setImage] = useState(selectedImage || null);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchFoodDetail = async () => {
      if (foodId) {
        try {
          const detail = await getFoodDetail(foodId);
          if (detail.isSuccess) {
            const data = detail.data;
            setFoodName(data.name || '');
            setCategory(data.category || '미지정');
            setFoodCount(data.count || 0);
            setFoodMemo(data.memo || '');
            const [year, month, day] = formatDate(data.date).split('-');
            setExpirationDate({year, month, day});
            setImage(data.image ? {uri: data.image} : null);
          } else {
            Alert.alert('오류', '식품 정보를 불러오는 데 실패했습니다.');
          }
        } catch {
          Alert.alert('오류', '식품 정보를 불러오는 데 실패했습니다.');
        }
      }
    };

    fetchFoodDetail();
  }, [foodId]);

  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isFoodNameEditing, setIsFoodNameEditing] = useState(false);
  const [isFoodCountEditing, setIsFoodCountEditing] = useState(false);

  const [isDateEditing, setIsDateEditing] = useState(false);

  const [isFoodMemoEditing, setIsFoodMemoEditing] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  interface FreshnessData {
    data: {
      freshness: string;
      reasons: {summary: string; description: string}[];
    };
  }

  const [freshnessData, setFreshnessData] = useState<FreshnessData | null>(
    null,
  );

  const handleEditMode = () => {
    setIsEditing(true);
  };

  const handleCompleteEdit = () => {
    setIsEditing(false);

    Alert.alert('수정 완료', '변경 사항이 저장되었습니다.');
  };

  const isNewFood = foodId === null;

  const handleSave = async () => {
    if (!foodName?.trim()) {
      Alert.alert('오류', '식품 이름을 입력해주세요.');
      return;
    }
    setLoading(true);

    const foodData = {
      name: foodName,
      category: category,
      date: `${expirationDate.year}-${expirationDate.month}-${expirationDate.day}`,
      count: foodCount,
      memo: foodMemo,
      image,
    };

    try {
      if (isNewFood) {
        await createFood(foodData);
        Alert.alert('등록 완료', '새로운 식품이 등록되었습니다.');
      } else {
        await updateFood(foodId, foodData);
        Alert.alert('저장 완료', '식품 정보가 업데이트되었습니다.');
      }
      setIsEditing(false);
      navigation.goBack();
    } catch (error) {
      Alert.alert('오류', '저장하는 중 문제가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = async () => {
    Alert.alert('삭제 확인', '정말 이 식품을 삭제하시겠습니까?', [
      {text: '취소', style: 'cancel'},
      {
        text: '삭제',
        style: 'destructive',
        onPress: async () => {
          try {
            await deleteFood(foodId);
            Alert.alert('삭제 완료', '식품이 삭제되었습니다.');
            navigation.goBack();
          } catch (error) {
            Alert.alert('오류', '삭제 중 문제가 발생했습니다.');
          }
        },
      },
    ]);
  };
  useEffect(() => {
    const fetchFreshness = async () => {
      if (activeTab === 'freshness' && foodId) {
        try {
          const data = await getFreshness(foodId);
          setFreshnessData(data);
        } catch (err) {
          Alert.alert('신선도 분석 오류', '데이터를 불러올 수 없습니다.');
        }
      }
    };
    fetchFreshness();
  }, [activeTab, foodId]);

  const formatDate = (dateString: string) => {
    const dateParts = dateString.split('년');
    const year = dateParts[0].trim();
    const monthDay = dateParts[1].split('월');
    const month = monthDay[0].trim();
    const day = monthDay[1].replace('일', '').trim();
    return `${year}-${month}-${day}`;
  };
  const handleImagePick = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.assets && response.assets.length > 0) {
        setImage(response.assets[0]);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <View style={styles.container}>
        {loading && <InlineLoading message="업데이트 중..." />}

        <CloseButton
          style={styles.closeButton}
          backgroundColor="#F46161"
          iconColor="white"
        />
        {foodId && (
          <TrashButton
            style={{position: 'absolute', top: 50, right: 20, zIndex: 10}}
            backgroundColor="#FF4D4D"
            iconColor="white"
            onPress={handleDelete}
          />
        )}
        {image && (
          <Image
            source={{uri: image.uri || image}}
            style={[styles.foodImage, isEditing && {opacity: 0.4}]}
          />
        )}
        {isEditing && (
          <CameraButton
            style={{
              position: 'absolute',
              top: 200,
              zIndex: 10,
              borderWidth: 2,
              borderColor: '#F46161',
            }}
            backgroundColor="white"
            iconColor="#F46161"
            onPress={handleImagePick}
          />
        )}
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{foodName}</Text>

          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeTab === 'info' && styles.activeTab,
                !foodId && {flex: 1},
              ]}
              onPress={() => setActiveTab('info')}>
              <Text style={styles.tabText}>상세 정보</Text>
            </TouchableOpacity>
            {foodId && (
              <TouchableOpacity
                style={[
                  styles.tabButton,
                  activeTab === 'freshness' && styles.activeTab,
                ]}
                onPress={() => setActiveTab('freshness')}>
                <Text style={styles.tabText}>신선도 분석</Text>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.contentWrapper}>
            {activeTab === 'info' ? (
              <View>
                <ScrollView contentContainerStyle={[styles.scrollContent]}>
                  <View style={[styles.detailRow, {marginBottom: 10}]}>
                    <Text style={styles.detailTitle}>식품 이름</Text>
                    {isFoodNameEditing ? (
                      <TextInput
                        style={[
                          styles.detailText,
                          {
                            borderBottomWidth: 1,
                            borderBottomColor: '#999',
                            padding: 2,
                          },
                        ]}
                        value={foodName}
                        onChangeText={setFoodName}
                        onBlur={() => setIsFoodNameEditing(false)}
                        autoFocus
                      />
                    ) : (
                      <TouchableOpacity
                        onPress={() => setIsFoodNameEditing(true)}>
                        <Text style={styles.detailText}>{foodName}</Text>
                      </TouchableOpacity>
                    )}
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
                    <View style={{marginBottom: 10}}>
                      <CategorySelector
                        selectedCategory={category}
                        onSelectCategory={selected => {
                          setCategory(selected);
                          setIsCategoryEditing(false);
                        }}
                      />
                    </View>
                  )}

                  <View
                    style={[
                      styles.detailRow,
                      {marginTop: 10, marginBottom: 10},
                    ]}>
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
                  <View style={[styles.detailRow, {marginBottom: 20}]}>
                    <Text style={styles.detailTitle}>수량</Text>
                    {isFoodCountEditing ? (
                      <TextInput
                        style={[
                          styles.detailText,
                          {
                            borderBottomWidth: 1,
                            borderBottomColor: '#999',
                            padding: 2,
                          },
                        ]}
                        value={String(foodCount)}
                        onChangeText={text => setFoodCount(Number(text))}
                        onBlur={() => setIsFoodCountEditing(false)}
                        autoFocus
                      />
                    ) : (
                      <TouchableOpacity
                        onPress={() => setIsFoodCountEditing(true)}>
                        <Text style={styles.detailText}>{foodCount}</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                  <View style={[styles.detailRow, {marginBottom: 20}]}>
                    <Text style={styles.detailTitle}>메모</Text>
                  </View>
                  {isFoodMemoEditing ? (
                    <TextInput
                      style={[
                        styles.detailText,
                        {
                          borderWidth: 1,
                          borderColor: '#999',
                          borderRadius: 10,
                          padding: 10,
                          minHeight: 80,
                          textAlignVertical: 'top',
                        },
                      ]}
                      value={foodMemo}
                      onChangeText={setFoodMemo}
                      multiline={true}
                      numberOfLines={4}
                      scrollEnabled={false}
                      onBlur={() => setIsFoodMemoEditing(false)}
                      autoFocus
                    />
                  ) : (
                    <TouchableOpacity
                      onPress={() => setIsFoodMemoEditing(true)}>
                      <Text style={styles.detailText}>{foodMemo}</Text>
                    </TouchableOpacity>
                  )}
                </ScrollView>
              </View>
            ) : (
              <View>
                <View style={{marginTop: 0, marginBottom: 32}}>
                  <DetailNoticeBar
                    title="신선도 다시 측정하기"
                    onPress={async () => {
                      if (!foodId || !image) {
                        Alert.alert(
                          '안내',
                          '등록된 식품과 이미지가 있어야 측정 가능합니다.',
                        );
                        return;
                      }

                      try {
                        setFreshnessData(null);

                        const result = await postFreshness(foodId, {
                          uri: image.uri,
                          name: image.fileName || 'image.jpg',
                          type: image.type || 'image/jpeg',
                        });

                        setFreshnessData(result);
                      } catch (err) {
                        Alert.alert(
                          '측정 실패',
                          '신선도 분석 중 문제가 발생했습니다.',
                        );
                      }
                    }}
                  />
                </View>
                <ScrollView contentContainerStyle={[styles.scrollContent]}>
                  {!foodId ? (
                    <Text style={{textAlign: 'center', marginTop: 20}}>
                      식품을 먼저 저장한 후 신선도 분석을 확인할 수 있습니다.
                    </Text>
                  ) : freshnessData ? (
                    <View>
                      <View style={styles.analysisminiBox}>
                        <Text style={styles.analysisfreshness}>
                          신선도 상태: {freshnessData.data.freshness}
                        </Text>
                      </View>
                      {freshnessData.data.reasons.map((reason, index) => (
                        <View key={index} style={styles.analysisBox}>
                          <Text style={styles.analysisTitle}>
                            {reason.summary}
                          </Text>
                          <View style={styles.analysisContainer}>
                            <Image
                              source={require('../assets/icons/green_dot_icon.png')}
                              style={styles.dotIcon}
                            />
                            <Text style={styles.analysisText}>
                              {reason.description}
                            </Text>
                          </View>
                        </View>
                      ))}
                    </View>
                  ) : (
                    <Text style={{textAlign: 'center', marginTop: 20}}>
                      신선도 데이터를 불러오는 중입니다...
                    </Text>
                  )}
                </ScrollView>
              </View>
            )}
          </View>

          <View style={styles.buttonContainer}>
            <GreenButton
              title={isEditing ? '수정완료' : '수정하기'}
              onPress={isEditing ? handleCompleteEdit : handleEditMode}
            />
            <GreenButton title="저장하기" onPress={handleSave} />
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    position: 'relative',
  },
  closeButton: {position: 'absolute', top: 50, left: 20, zIndex: 10},
  trashButton: {position: 'absolute', top: 50, right: 20, zIndex: 10},
  foodImage: {width: '100%', height: '45%', resizeMode: 'cover'},
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
  contentWrapper: {
    width: '100%',
    height: '60%',
    marginTop: 20,
    marginBottom: 20,
  },
  imageUploadText: {color: 'white', fontWeight: 'bold'},
  foodName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 60,
    borderRadius: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  title: {fontSize: 24, fontWeight: 'bold', marginTop: 10},
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  detailTitle: {fontSize: 16, fontWeight: 'bold'},
  detailText: {fontSize: 16, color: '#666'},
  dateInputContainer: {flexDirection: 'row', alignItems: 'center'},
  dateInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    marginHorizontal: 5,
    padding: 2,
    textAlign: 'center',
    width: 50,
  },
  dateLabel: {fontSize: 16, color: '#666', marginHorizontal: 3},
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
  activeTab: {backgroundColor: '#F46161'},
  tabText: {fontSize: 15, color: 'white', fontWeight: 'bold'},
  freshnessContainer: {
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginTop: 5,
  },
  freshnessText: {fontSize: 18, fontWeight: 'bold', color: '#388E3C'},
  freshnessPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F46161',
    marginTop: 5,
  },

  scrollContent: {
    width: '100%',

    marginVertical: 10,
  },
  analysisContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dotIcon: {
    marginRight: 8,
    marginTop: 6,
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  analysisBox: {
    backgroundColor: '#FFFCFC',
    padding: 14,
    marginVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9CC',
  },
  analysisminiBox: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginVertical: 5,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#F46161',
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: '500',

    color: '#F46161',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  analysisfreshness: {
    fontSize: 15,
    fontWeight: '500',

    color: '#F46161',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: 5,
  },
  analysisText: {fontSize: 14, color: '#555'},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
    marginTop: 20,
    gap: 20,
  },
  loadingOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loadingBox: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 16,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});

export default FoodDetailScreen;
