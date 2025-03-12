import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LabelProps {
  text: string;
  color: string;
}

const ColorLabel: React.FC<LabelProps> = ({ text, color }) => {
  return (
    <View style={[styles.label, { backgroundColor: color }]}> 
      <Text style={styles.labelText}>{text}</Text>
    </View>
  );
};

export const ColorLabelRow: React.FC<{ labels: { text: string; color: string }[] }> = ({ labels }) => {
  return (
    <View style={styles.labelRow}>
      {labels.map((label, index) => (
        <ColorLabel key={index} text={label.text} color={label.color} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    height:19,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginTop: 5,
  },
  labelText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default ColorLabel;
