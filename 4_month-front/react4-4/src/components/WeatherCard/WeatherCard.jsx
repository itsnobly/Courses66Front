import cls from './WeatherCard.module.css';
export default function WeatherCard({ weather }) {
  return (
    <div className={cls.weather__info}>
      <p className={cls.temp}>{weather?.temp}</p>
      <p className={cls.description}>{weather?.description}</p>
      <span className={cls.icon}>{weather?.icon}</span>
    </div>
  );
}
