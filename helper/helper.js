import axios from 'axios';
import { key } from '../constants/constants';

const forecastEndpoint = (
  cityName
) => `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${cityName}-&days=7&aqi=no&alerts=no
`;

const normalizeData = (res) => {
  const forecastDays = res.forecast.forecastday.map((day) => {
    return { days: day.day, date: day.date, id: day.date_epoch };
  });

  return {
    name: res.location.name,
    country: res.location.country,
    localtime: res.location.localtime,
    text: res.current.condition.text,
    temperature: res.current.temp_c,
    icon: res.current.condition.icon,
    humidity: res.current.humidity,
    wind: res.current.wind_kph,
    forecast: forecastDays,
  };
};

const apiCall = async (endpoint) => {
  const option = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const res = await axios.request(option);

    return normalizeData(res.data);
  } catch (err) {
    throw err
  }
};

export const fetchWeatherForecast = (params) =>
  apiCall(forecastEndpoint(params));
