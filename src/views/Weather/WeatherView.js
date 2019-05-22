import './WeatherView.css';
import React from 'react';
import WeatherHeader from './components/WeatherHeader';
import WeatherMain from './components/WeatherMain';
import WeatherFooter from './components/WeatherFooter';

const WeatherView = ({ weather }) => (
  <div className="WeatherView">
    <WeatherHeader weather={weather} />
    <WeatherMain weather={weather} />
    <div className="WeatherView--line" />
    <WeatherFooter weather={weather} />
  </div>
);

export default WeatherView;
