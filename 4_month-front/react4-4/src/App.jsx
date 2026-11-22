import WeatherCard from './components/WeatherCard/WeatherCard';
import WeatherSearch from './components/WeatherSearch/WeatherSearch';

import { useState } from 'react';
export default function App() {
  const [weather, setWeather] = useState(null);
  return (
    <div>
      <WeatherSearch setWeather={setWeather} />
      <WeatherCard weather={weather} />
    </div>
  );
}
