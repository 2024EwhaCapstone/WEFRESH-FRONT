import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface SelectDateProps {
  expirationDate: string;
  setExpirationDate: (date: string) => void;
  isEditing: boolean;
}

const SelectDate: React.FC<SelectDateProps> = ({
  expirationDate,
  setExpirationDate,
  isEditing,
}) => {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleConfirm = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      const formattedDate =
        selectedDate.toISOString().split('T')[0].replace(/-/g, '년 ') + '일';
      setExpirationDate(formattedDate);
    }
  };

  return (
    <View>
      <TouchableOpacity onPress={() => isEditing && setShowPicker(true)}>
        <Text style={[styles.dateText, isEditing && styles.editableText]}>
          {expirationDate}
        </Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={handleConfirm}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dateText: {
    fontSize: 16,
    color: '#666',
  },
  editableText: {
    color: '#F46161',
    fontWeight: 'bold',
  },
});

export default SelectDate;
