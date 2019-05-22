import './WeatherView.css';
import React from 'react';
import WeatherHeader from './components/WeatherHeader';
import WeatherMain from './components/WeatherMain';

const WeatherView = ({ weather }) => (
  <div className="WeatherView">
    <WeatherHeader weather={weather} />
    <WeatherMain weather={weather} />
  </div>
);

export default WeatherView;
