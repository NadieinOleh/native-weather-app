import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { orange } from '../constants/constants';

const Title = ({ title, country }) => {
  return (
    <Text style={styles.title}>
      {title}, {country}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: orange,
    marginVertical: 30,
  },
});
