import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { ClockIcon } from 'react-native-heroicons/outline';
import { orange, white } from '../constants/constants';

const AddInfoBlock = ({ wind, humidity, time }) => {
  const hour = time ? time.split(' ') : '';

  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <Image
          source={require('../assets/icons/wind.png')}
          style={styles.img}
        />
        <Text style={styles.text}>{wind}km</Text>
      </View>

      <View style={styles.flex}>
        <Image
          source={require('../assets/icons/drop.png')}
          style={styles.img}
        />
        <Text style={styles.text}>{humidity}%</Text>
      </View>

      <View style={styles.flex}>
        <ClockIcon size={30} color={white} />
        <Text style={styles.text}>{hour[1]}</Text>
      </View>
    </View>
  );
};

export default AddInfoBlock;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 30
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  text: {
    fontSize: 18,
    color: orange,
  },
});
