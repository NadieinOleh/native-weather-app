import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import {
  XCircleIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from 'react-native-heroicons/outline';

import { green, orange } from '../constants/constants';

const Select = ({ setSelected }) => {
  const data = [
    { key: '1', value: 'London' },
    { key: '2', value: 'New York' },
    { key: '3', value: 'Rio De Janeiro' },
    { key: '4', value: 'Paris' },
    { key: '5', value: 'Istanbul' },
    { key: '6', value: 'Tokyo' },
    { key: '7', value: 'Cape Town' },
    { key: '8', value: 'Amsterdam' },
    { key: '9', value: 'Barcelona' },
    { key: '10', value: 'Sydney' },
    { key: '11', value: 'Ukraine' },
  ];

  return (
    <View>
      <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        inputStyles={styles.input}
        boxStyles={styles.box}
        dropdownStyles={styles.dropDown}
        dropdownItemStyles={styles.item}
        dropdownTextStyles={styles.text}
        placeholder="Select a city"
        maxHeight={150}
        notFoundText="City not found"
        closeicon={<XCircleIcon color={green} size={25} />}
        searchicon={<MagnifyingGlassIcon color={green} size={25} />}
        arrowicon={<ChevronDownIcon color={green} size={27} />}
        searchPlaceholder="Search..."
        disabledItemStyles={styles.text}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    color: green,
  },
  box: {
    borderWidth: 2,
    borderColor: orange,
       marginHorizontal: 20,
  },
  dropDown: {
    color: green,
    borderColor: orange,
    marginHorizontal: 20,
  },
  item: {
    marginVertical: 2,
    borderColor: orange,
  },
  text: {
    color: green,
    fontSize: 16,
  },
});

export default Select;
