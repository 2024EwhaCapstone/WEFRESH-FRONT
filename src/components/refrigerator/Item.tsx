import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Item = ({data, isSelected, onPress, isSelecting}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (isSelecting) {
      onPress(data.foodId); // 선택 모드일 경우 onPress 호출
    } else {
      navigation.navigate('FoodDetailScreen', {foodId: data.foodId}); // 선택 모드가 아닐 경우 상세 화면으로 이동
    }
  };

  // dday 포맷팅 함수
  const formatDday = dday => {
    return dday >= 0 ? `${dday}일 지남` : `${-dday}일 남음`; // 음수일 경우 'D-4' 형식으로 표시
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.item, isSelected && styles.selectedItem]}>
      <Image
        source={{uri: data.image}}
        style={{
          width: 120,
          height: 130,
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
      <View>
        <View style={styles.view1}>
          <Text style={styles.text1}>{data.name}</Text>
          <View style={[styles.view2, {backgroundColor: data.color}]}>
            <Text style={styles.text2}>{formatDday(data.dday)}</Text>
          </View>
        </View>
        <Text style={styles.text3}>{data.date}까지</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    width: 150,
    height: 198,
    justifyContent: 'space-between',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 4,
    elevation: 3,
  },
  selectedItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 10,
  },
  view1: {
    flexDirection: 'row',
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 8,
  },
  view2: {
    paddingHorizontal: 6,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  text1: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    color: '#FFF1F1',
    fontSize: 9,
    fontWeight: 700,
  },
  text3: {
    color: '#9C9292',
    fontSize: 11,
  },
});

export default Item;
