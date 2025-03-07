import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface GreenButtonProps {
  title: string;
  onPress: () => void;
}

const GreenButton: React.FC<GreenButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.7}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#08A900',
    height:28,
    width:152,
    borderRadius: 50,
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
  buttonText: {
    fontSize: 12,
    color: 'white',
  },
});

export default GreenButton;