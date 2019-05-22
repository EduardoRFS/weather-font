import './WeatherView.css';
import React from 'react';
import WeatherHeader from './components/WeatherHeader';

const WeatherView = ({ weather }) => (
  <div className="WeatherView">
    <WeatherHeader weather={weather} />
  </div>
);

export default WeatherView;
