import './WeatherFooter.css';
import React from 'react';
import moment from 'moment';

const formatHour = timestamp => moment(timestamp * 1e3).format('H:mm');
const WeatherFooter = ({ weather }) => (
  <footer className="WeatherFooter">
    <div className="WeatherFooter--item">
      <span className="WeatherFooter--label">Umidade</span>
      <span className="WeatherFooter--value">
        {`${weather.main.humidity}%`}
      </span>
    </div>
    <div className="WeatherFooter--item">
      <span className="WeatherFooter--label">Nascer do Sol</span>
      <span className="WeatherFooter--value">
        {formatHour(weather.sys.sunrise)}
      </span>
    </div>
    <div className="WeatherFooter--item">
      <span className="WeatherFooter--label">Pôr do Sol</span>
      <span className="WeatherFooter--value">
        {formatHour(weather.sys.sunset)}
      </span>
    </div>
  </footer>
);

export default WeatherFooter;
