import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface RecipeStepsProps {
  steps: Step[];
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {steps.map((item) => (
        <View key={item.id} style={styles.analysisBox}>
          <Text style={styles.analysisTitle}>{item.title}</Text>
          <View style={styles.analysisContainer}>
            
            <Text style={styles.analysisText}>{item.description}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    width: '100%',
    paddingVertical: 0,
  },
  analysisBox: {
    backgroundColor: '#FFFCFC',
    padding: 12,
    marginVertical: 8,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#D9D9D9CC',
  },
  analysisTitle: {
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Inter-Medium",
    color: "#28aa3b",
    textAlign: "left",
    paddingBottom: 5,
  },
  analysisContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  dotIcon: {
    marginRight: 8,
    marginTop: 6,
  },
  analysisText: {
    fontSize: 14,
    color: '#555',
  },
});

export default RecipeSteps;