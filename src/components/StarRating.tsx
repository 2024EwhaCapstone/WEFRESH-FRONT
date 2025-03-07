import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const StarRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <View style={styles.starContainer}>
      {[...Array(totalStars)].map((_, index) => (
        <Image
          key={index}
          source={
            index < rating
              ? require('../assets/icons/star_icon_green.png') 
              : require('../assets/icons/star_icon.png') 
          }
          style={styles.star}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  starContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  star: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
});

export default StarRating;