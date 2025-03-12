import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InfoCardProps {
  value: string;
  label: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ value, label }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(8, 169, 0, 0.08)",

    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100, 
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 5
  },
  label: {
    fontSize: 10,
    color: '#7D7D7D',
   
  },
});

export default InfoCard;