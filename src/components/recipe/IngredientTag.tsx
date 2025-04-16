import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface IngredientTagProps {
  name: string;
  daysLeft: number;
  color: string; 
}

const IngredientTag: React.FC<IngredientTagProps> = ({ name, daysLeft, color }) => {
  const displayDays = Math.abs(daysLeft); 
  const backgroundColor = color || '#0ABF00B0'; 

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      {daysLeft != null && (
    <View style={[styles.badge, { backgroundColor }]}>
      <Text style={styles.badgeText}>{displayDays}일 남음</Text>
    </View>
  )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: 112,
    height: 31,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 8,
  },
  badge: {
    borderRadius: 30,
    paddingHorizontal: 5,
    paddingVertical: 1.7,
  },
  badgeText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
  },
});

export default IngredientTag;
