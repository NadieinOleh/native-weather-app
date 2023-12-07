import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';

import Select from './components/Select';
import { fetchWeatherForecast } from './helper/helper';
import Title from './components/Title';
import MainImage from './components/MainImage';
import Temperature from './components/Temperature';
import AddInfoBlock from './components/AddInfoBlock';
import ListWeek from './components/ListWeek';
import { green, orange } from './constants/constants';
import { UserCircleIcon } from 'react-native-heroicons/outline';

export default function App() {
  const image = {
    uri: 'https://raw.githubusercontent.com/syednomishah/Weather-App-React-Native/main/assets/images/bg.png',
  };
  const [weather, setWeather] = useState({});
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('ukraine');
  const [refreshing, setRefreshing] = useState(false);

  const handleForecast = async (selectedCity) => {
    setRefreshing(true);

    try {
      setError('');
      const data = await fetchWeatherForecast(selectedCity);
      setWeather(data);
    } catch (err) {
      setError('Oops, we have a problem');
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    handleForecast(selected);
  }, [selected]);

  return (
    <ImageBackground
      blurRadius={70}
      source={image}
      style={styles.background}
      resizeMode="cover"
    >
      <Select handleForecast={handleForecast} setSelected={setSelected} />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            size={'large'}
            colors={[orange]}
            progressBackgroundColor={green}
          />
        }
      >
        {!refreshing && !error ? (
          <View>
            <Title title={weather?.name} country={weather?.country} />

            <View style={styles.flex}>
              <MainImage text={weather?.text} />
            </View>

            <View style={styles.flex}>
              <Temperature
                temperature={weather?.temperature}
                text={weather?.text}
              />
            </View>

            <AddInfoBlock
              time={weather?.localtime}
              humidity={weather?.humidity}
              wind={weather?.wind}
            />

            <ListWeek days={weather?.forecast} />

            <View style={styles.blockMade}>
              <Text style={styles.made}>Powered by Oleh Nadiein</Text>
              <UserCircleIcon size={25} color={orange} />
            </View>
          </View>
        ) : (
          <Text style={styles.error}>{error}</Text>
        )}
      </ScrollView>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingTop: 50,
  },
  error: {
    marginTop: 300,
    textAlign: 'center',
    fontSize: 20,
    color: 'red'
  },
  made: {
    fontSize: 13,
    color: orange,
  },
  blockMade: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginBottom: 5,
  },
  flex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
});
