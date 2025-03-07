import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecipeSteps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>레시피 단계</Text>
      <View style={styles.step}>
        <Text style={styles.stepTitle}>Step 1</Text>
        <Text>밥 200g, 김 5g, 양파 30g을 준비합니다.</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepTitle}>Step 2</Text>
        <Text>연어 150g을 한입 크기로 썰고, 소스 10ml를 뿌려 5분간 재워줍니다.</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepTitle}>Step 3</Text>
        <Text>그릇에 밥을 담고 연어를 올립니다.</Text>
      </View>
      <View style={styles.step}>
        <Text style={styles.stepTitle}>Step 4</Text>
        <Text>쪽파 5g과 함께 남은 소스를 뿌려줍니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  step: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default RecipeSteps;