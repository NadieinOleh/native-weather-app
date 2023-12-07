import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline';
import { orange, white } from '../constants/constants';
import ItemWeek from './ItemWeek';

const ListWeek = ({ days }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flex}>
        <CalendarDaysIcon size={28} color={white} />
        <Text style={styles.title}>Daily forecast</Text>
      </View>

      <FlatList 
      horizontal={true}
      data={days}
      keyExtractor={item => item.id}
      renderItem={({item}) => <ItemWeek item={item}/>}
      />
    </View>
  );
};

export default ListWeek;

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20
  },
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 16,
    color: orange,
  },
});
