import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { weatherImages } from '../constants/constants';

const MainImage = ({ text }) => {
  return <Image source={weatherImages[text]} style={styles.image} alt={text} accessibilityLabel={text}/>;
};

export default MainImage;

const styles = StyleSheet.create({
  image: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 180,
  },
});
