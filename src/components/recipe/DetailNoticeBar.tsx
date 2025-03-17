import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface DetailNoticeBarProps {
  title: string;
  onPress: () => void;
}
const DetailNoticeBar: React.FC<DetailNoticeBarProps> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.noticeContainer} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.noticeText}>자세한 내용을 보려면 클릭</Text>
      </TouchableOpacity>
    
       
  );
};

const styles = StyleSheet.create({
  noticeContainer: {
    position: 'absolute',
    bottom: 10, 
    width: 200, 
    alignSelf: 'center',
    backgroundColor: '#079300', 
    height: 30,
    borderRadius: 30, 
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
    width: 0,
    height: 4
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
},
  noticeText: {
    color: 'white',
    fontSize: 14,
    
  },
});

export default DetailNoticeBar;