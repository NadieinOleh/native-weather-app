import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { bg, orange, white } from '../constants/constants';
import { weatherImages } from '../constants/constants';

const ItemWeek = ({ item }) => {
  const date = new Date(item.date)
  const options = { weekday: "long" };
  const day = date.toLocaleDateString('en-US', options).split(',')[0]
  const avgTemp = item?.days?.avgtemp_c ? (item?.days?.avgtemp_c).toFixed() : ''

  return (
    <View style={styles.container}>
      <Image
        source={weatherImages[item?.days?.condition?.text] === null ? '' : weatherImages[item?.days?.condition?.text]}
        style={styles.img}
        alt={item?.days?.condition?.text}
      />
      <Text style={styles.day}>{day}</Text>
      <Text style={styles.temp}>{avgTemp}&#176;</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 10,
    backgroundColor: bg,
    margin: 5,
    borderRadius: 30,
    width: 100
  },
  day: {
    fontSize: 13,
    color: orange,
  },
  temp: {
    fontSize: 18,
    color: white,
  },
  img: {
    width: 60,
    height: 60,
  },
});

export default ItemWeek;
