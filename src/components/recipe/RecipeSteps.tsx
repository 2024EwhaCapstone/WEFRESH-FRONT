import React, { useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, Dimensions } from 'react-native';

interface Step {
  id: number;
  title: string;
  description: string;
}

interface RecipeStepsProps {
  steps: Step[];
}

const { height } = Dimensions.get('window');

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView
      style={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
      scrollEventThrottle={8}
      contentContainerStyle={{ paddingBottom: steps.length * height * 0.03  }} 
    >
      {steps.map((item, index) => {
        const inputRange = [
          (index - 0.5) * height * 0.12, 
          index * height * 0.12,
          (index + 0.5) * height * 0.12,
        ];

        const scale = scrollY.interpolate({
          inputRange,
          outputRange: [0.95, 1.1, 0.95],
          extrapolate: 'clamp',
        });

        const opacity = scrollY.interpolate({
          inputRange,
          outputRange: [0.6, 1, 0.6],
          extrapolate: 'clamp',
        });

        const translateY = scrollY.interpolate({
          inputRange,
          outputRange: [8, 0, -8],
          extrapolate: 'clamp',
        });

        const textColor = scrollY.interpolate({
          inputRange,
          outputRange: ['#aaa', '#08A900', '#aaa'],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollY.interpolate({
          inputRange,
          outputRange: ['transparent', 'white', 'transparent'],
          extrapolate: 'clamp',
        });

        const shadowOpacity = scrollY.interpolate({
          inputRange,
          outputRange: [0, 0.2, 0],
          extrapolate: 'clamp',
        });

        return (
          <View key={item.id} style={styles.stepWrapper}> 
            <Animated.View
              style={[
                styles.step,
                {
                  transform: [{ scale }, { translateY }],
                  opacity,
                  backgroundColor,
                  shadowOpacity,
                },
              ]}
            > 
              <Animated.Text style={[styles.stepTitle, { color: textColor }]}>{item.title}</Animated.Text>
              <Animated.Text style={styles.stepDescription}>{item.description}</Animated.Text>
            </Animated.View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 2,
  },
  stepWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.12, 
  },
  step: {
    width: '90%',
    padding: 12,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  stepDescription: {
    fontSize: 14,
    color: '#333',
  },
});

export default RecipeSteps;
