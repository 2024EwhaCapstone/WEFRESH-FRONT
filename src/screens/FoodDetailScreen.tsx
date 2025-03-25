import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert,ScrollView} from 'react-native';
import CloseButton from '../components/global/CloseButton';
import GreenButton from '../components/global/GreenButton';
import CategorySelector from '../components/addfood/CategorySelector';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';
import DetailNoticeBar from '../components/recipe/DetailNoticeBar';
import { createFood, updateFood } from '../api/foodApi';
import { useNavigation } from '@react-navigation/native';

interface FoodDetailScreenProps {
  route: RouteProp<RootStackParamList, 'FoodDetailScreen'>;
}

const FoodDetailScreen: React.FC<FoodDetailScreenProps> = ({ route }) => {
  const { foodName: initialFood , category: initialCategory, expirationDate: initialExpirationDate, foodCount : initialCount ,foodMemo : initialMemo } = route.params || {};
  const [foodName, setFoodName] = useState(initialFood || '연어');
  const [activeTab, setActiveTab] = useState<'info' | 'freshness'>('info');
  const [category, setCategory] = useState(initialCategory || '미지정');
  const [foodCount, setFoodCount] = useState(initialCount || 0 );
  const [foodMemo , setfoodMemo] = useState(initialMemo || 'dd');
  const [isCategoryEditing, setIsCategoryEditing] = useState(false);
  const [isFoodNameEditing, setIsFoodNameEditing] = useState(false);
  const [isFoodCountEditing, setIsFoodCountEditing] = useState(false);
  
  const [expirationDate, setExpirationDate] = useState(initialExpirationDate || { year: '2025', month: '01', day: '01' });
  const [isDateEditing, setIsDateEditing] = useState(false);
  
  const [isFoodMemoEditing, setIsFoodMemoEditing] = useState(false);
  
  const [isEditing, setIsEditing] = useState(false); 
  const { foodId, selectedImage } = route.params || {};
  const [image, setImage] = useState(selectedImage || null);

  
  
  const handleEditMode = () => {
    setIsEditing(true);
    setIsCategoryEditing(true);
    setIsFoodNameEditing(true);
    setIsFoodCountEditing(true);
    setIsFoodMemoEditing(true);
    setIsDateEditing(true);
  };

  
  const handleCompleteEdit = () => {
    setIsEditing(false);
    setIsCategoryEditing(false);
    setIsFoodNameEditing(false);
    setIsFoodCountEditing(false);
    setIsFoodMemoEditing(false);
    setIsDateEditing(false);
    Alert.alert("수정 완료", "변경 사항이 저장되었습니다.");
  };
  const navigation = useNavigation();
  const isNewFood = foodId === null;  

  const handleSave = async () => {
    if (!foodName?.trim()) {
      Alert.alert('오류', '식품 이름을 입력해주세요.');
      return;
    }
    const foodData = {
      name: foodName,
      category: category,
      date: `${expirationDate.year}-${expirationDate.month}-${expirationDate.day}`,
      count: foodCount,
      memo: foodMemo,
      image: selectedImage,
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
    }
  };
  return (
    <View style={styles.container}>
      <CloseButton style={styles.closeButton} backgroundColor="#08A900" iconColor="white" />
      {/* <Image source={require('../assets/images/img_recipe2.png')} style={styles.foodImage} /> */}
      

      {image && (
        <Image
          source={{ uri: image.uri }}
          style={styles.foodImage}
        />
      )}
      <View style={styles.contentContainer}>
        
        <Text style={styles.title}>{foodName || '식품 이름 없음'}</Text>

        
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'info' && styles.activeTab]}
            onPress={() => setActiveTab('info')}
          >
            <Text style={styles.tabText}>상세 정보</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'freshness' && styles.activeTab]}
            onPress={() => setActiveTab('freshness')}
          >
            <Text style={styles.tabText}>신선도 분석</Text>
          </TouchableOpacity>
        </View>

        
        <View style={styles.contentWrapper}>
          {activeTab === 'info' ? (
        <View>
          <View style= {{marginTop:0, marginBottom: 32}}>
             <DetailNoticeBar
          title={isEditing ? "수정 완료하기" : "클릭해서 수정하기"}
          onPress={isEditing ? handleCompleteEdit : handleEditMode}
        /> 
        </View>
      
      <ScrollView contentContainerStyle={[styles.scrollContent]}>
  
        <View style={[styles.detailRow, { marginBottom: 10 }]}>
          <Text style={styles.detailTitle}>식품 이름</Text>
          {isFoodNameEditing ? (
            <TextInput
              style={[styles.detailText, { borderBottomWidth: 1, borderBottomColor: '#999', padding: 2 }]}
              value={foodName}
              onChangeText={setFoodName}
              onBlur={() => setIsFoodNameEditing(false)}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setIsFoodNameEditing(true)}>
              <Text style={styles.detailText}>{foodName}</Text>
            </TouchableOpacity>
          )}
        </View>

        
        <TouchableOpacity onPress={() => setIsCategoryEditing(true)} activeOpacity={0.8}>
          <View style={styles.detailRow}>
            <Text style={styles.detailTitle}>카테고리</Text>
            <Text style={styles.detailText}>{category}</Text>
          </View>
        </TouchableOpacity>

        {isCategoryEditing && (
          <View style={{ marginBottom: 10 }}>
            <CategorySelector
              selectedCategory={category}
              onSelectCategory={(selected) => {
                setCategory(selected);
                setIsCategoryEditing(false);
              }}
            />
          </View>
        )}

      
        <View style={[styles.detailRow, { marginTop:10,marginBottom: 10 }]}>
          <Text style={styles.detailTitle}>유통기한</Text>
          {isDateEditing ? (
            <View style={styles.dateInputContainer}>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.year}
                onChangeText={(value) => setExpirationDate((prev) => ({ ...prev, year: value }))}
                keyboardType="numeric"
                maxLength={4}
                onBlur={() => setIsDateEditing(false)}
              />
              <Text style={styles.dateLabel}>년</Text>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.month}
                onChangeText={(value) => setExpirationDate((prev) => ({ ...prev, month: value }))}
                keyboardType="numeric"
                maxLength={2}
                onBlur={() => setIsDateEditing(false)}
              />
              <Text style={styles.dateLabel}>월</Text>
              <TextInput
                style={styles.dateInput}
                value={expirationDate.day}
                onChangeText={(value) => setExpirationDate((prev) => ({ ...prev, day: value }))}
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
        <View style={[styles.detailRow, {  marginBottom: 20 }]}>
          <Text style={styles.detailTitle}>수량</Text>
          {isFoodCountEditing ? (
            <TextInput
              style={[styles.detailText, { borderBottomWidth: 1, borderBottomColor: '#999', padding: 2 }]}
              value={String(foodCount)}
              onChangeText={(text) => setFoodCount(Number(text))}
              onBlur={() => setIsFoodCountEditing(false)}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setIsFoodCountEditing(true)}>
              <Text style={styles.detailText}>{foodCount}</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={[styles.detailRow, { marginBottom: 20 }]}>
          <Text style={styles.detailTitle}>메모</Text>
          </View>
          {isFoodMemoEditing ? (
            <TextInput
              style={[styles.detailText, { borderWidth: 1, borderColor: '#999', borderRadius: 10, padding: 10, minHeight: 80, textAlignVertical: 'top'}]}
              value={foodMemo}
              onChangeText={setfoodMemo}
              multiline={true} 
              numberOfLines={4}
              scrollEnabled={false} 
              onBlur={() => setIsFoodNameEditing(false)}
              autoFocus
            />
          ) : (
            <TouchableOpacity onPress={() => setIsFoodMemoEditing(true)}>
              <Text style={styles.detailText}>{foodMemo}</Text>
            </TouchableOpacity>
          )}
        
        </ScrollView>
      </View> 
            
          ) : (
            <View >
              <View style= {{marginTop:0, marginBottom: 32}}>
              <DetailNoticeBar title="신선도 다시 측정하기" onPress={() => Alert.alert("측정", "신선도를 다시 측정합니다.")}  />
            </View>
            <ScrollView contentContainerStyle={[styles.scrollContent]}>
  
               <View style={styles.analysisBox}>
                <Text style={styles.analysisTitle}> 하얀 점 (곰팡이일 가능성)</Text>
                <View style={styles.analysisContainer}>
                            <Image source={require('../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
                            <Text style={styles.analysisText}>김치 표면에 하얀 점이 많다면, 이는 곰팡이(효모균)일 수도 있음.</Text>
                          </View>
              
              </View>
              <View style={styles.analysisBox}>
                <Text style={styles.analysisTitle}> 하얀 점 (곰팡이일 가능성)</Text>
                <View style={styles.analysisContainer}>
                    <Image source={require('../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
                    <Text style={styles.analysisText}>김치 표면에 하얀 점이 많다면, 이는 곰팡이(효모균)일 수도 있음.어쩌고 저쩌고</Text>
                </View>
                <View style={styles.analysisContainer}>
                    <Image source={require('../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
                    <Text style={styles.analysisText}>김치 표면에 하얀 점이 많다면, 이는 곰팡이(효모균)일 수도 있음.어쩌고 저쩌고 </Text>
                </View>
              
              </View>
              <View style={styles.analysisBox}>
                <Text style={styles.analysisTitle}> 하얀 점 (곰팡이일 가능성)</Text>
                <View style={styles.analysisContainer}>
                    <Image source={require('../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
                    <Text style={styles.analysisText}>김치 표면에 하얀 점이 많다면, 이는 곰팡이(효모균)일 수도 있음.어쩌고 저쩌고</Text>
                </View>
                <View style={styles.analysisContainer}>
                    <Image source={require('../assets/icons/green_dot_icon.png')} style={styles.dotIcon} />
                    <Text style={styles.analysisText}>김치 표면에 하얀 점이 많다면, 이는 곰팡이(효모균)일 수도 있음.어쩌고 저쩌고 </Text>
                </View>
              
              </View>
              
            </ScrollView>
            </View >
          )}
        </View>

        {/* 버튼 영역 */}
        <View style={styles.buttonContainer}>
          <GreenButton title="삭제하기" onPress={() => {}} />
          <GreenButton title="저장하기" onPress={handleSave} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', alignItems: 'center' },
  closeButton: { position: 'absolute', top: 50, left: 20, zIndex: 10 },
  foodImage: { width: '100%', height: '45%', resizeMode: 'cover' },
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
  
  foodName: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000",
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
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 10 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#E0E0E0' },
  detailTitle: { fontSize: 16, fontWeight: 'bold' },
  detailText: { fontSize: 16, color: '#666' },
  dateInputContainer: { flexDirection: 'row', alignItems: 'center' },
  dateInput: { fontSize: 16, borderBottomWidth: 1, borderBottomColor: '#999', marginHorizontal: 5, padding: 2, textAlign: 'center', width: 50 },
  dateLabel: { fontSize: 16, color: '#666', marginHorizontal: 3 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#D9D9D9CC', borderRadius: 20, marginTop: 20, width: '100%', height: 32, justifyContent: 'space-around', padding: 2 },
  activeTab: { backgroundColor: '#08A900' },
  tabText: { fontSize: 15, color: 'white', fontWeight: 'bold' },
  freshnessContainer: { alignItems: 'center', paddingHorizontal: 10, 
    paddingVertical: 0, 
     marginTop: 5 },
  freshnessText: { fontSize: 18, fontWeight: 'bold', color: '#388E3C' },
  freshnessPercentage: { fontSize: 24, fontWeight: 'bold', color: '#4CAF50', marginTop: 5 },
  
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
    marginTop:6,
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
  analysisBox: { backgroundColor: '#FFFCFC', padding: 14, marginVertical:6, borderRadius: 15 ,borderWidth: 1, // 테두리 두께 추가
    borderColor: '#D9D9D9CC'},
  analysisTitle: { fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#28aa3b",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: '100%',
    padding:5, },
  analysisText: { fontSize: 14, color: '#555' },
  buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '90%',
    marginBottom: 20,
    marginTop: 20,
    gap:20,
  },
});

export default FoodDetailScreen;