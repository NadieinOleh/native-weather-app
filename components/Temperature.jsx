import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { white } from '../constants/constants';

const Temperature = ({ temperature, text }) => {
  const temp = temperature ? temperature.toFixed() : ''

  return (
    <>
      <Text style={styles.temperature}>{temp}&#176;</Text>
      <Text style={styles.text}>{text}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  temperature: {
    fontSize: 50,
    color: white,
  },
  text: {
    fontSize: 16,
    color: white,
    opacity: 0.5,
    letterSpacing: 1.3
  },
});

export default Temperature;
