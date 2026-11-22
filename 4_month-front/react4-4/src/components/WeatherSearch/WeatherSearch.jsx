import weatherData from '../../data/weather.json';
import { Input } from 'antd';
import cls from './WeatherSearch.module.css';
import { useState } from 'react';
const { Search } = Input;
export default function WeatherSearch({ setWeather }) {
  const [error, setError] = useState('');
  const [value, setValue] = useState('');
  const onSearch = (value) => {
    try {
      const foundWeather = weatherData[value];

      if (!foundWeather) {
        throw new Error(`Город не найден: ${value}`);
      }
      setValue('');
      setError('');
      setWeather(foundWeather);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Search
        className={cls.input__search}
        placeholder="Введите название города"
        value={value}
        onSearch={onSearch}
        onChange={(e) => setValue(e.target.value)}
        enterButton
      />
      {error && <p className={cls.error}>{error}</p>}
    </div>
  );
}
