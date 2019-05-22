import './WeatherMain.css';
import React from 'react';

const formatTemp = temp => `${parseInt(temp)} °C`;
const WeatherMain = ({ weather }) => (
  <main className="WeatherMain">
    <div className="WeatherMain--line" />
    <div className="WeatherMain--side">
      <div className="WeatherMain--sideLabel">Mínima</div>
      <div className="WeatherMain--sideTemperature">
        {formatTemp(weather.main.temp_min)}
      </div>
    </div>
    <div className="WeatherMain--now">
      <div className="WeatherMain--icon">
        <img
          alt={weather.weather[0].description}
          src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
        />
      </div>
      <div className="WeatherMain--temperature">
        {formatTemp(weather.main.temp)}
      </div>
      <div className="WeatherMain--description">
        {weather.weather[0].description}
      </div>
    </div>
    <div className="WeatherMain--side">
      <div className="WeatherMain--sideLabel">Máxima</div>
      <div className="WeatherMain--sideTemperature">
        {formatTemp(weather.main.temp_max)}
      </div>
    </div>
  </main>
);

export default WeatherMain;
