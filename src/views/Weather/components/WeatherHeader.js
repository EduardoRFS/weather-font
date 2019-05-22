import './WeatherHeader.css';
import React from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const formatDate = timestamp => moment(timestamp * 1e3).format('dddd, LL');
const WeatherHeader = ({ weather }) => (
  <header className="WeatherHeader">
    <h2 className="WeatherHeader--title">
      {`${weather.name}, ${weather.sys.country}`}
    </h2>
    <h5 className="WeatherHeader--day">{formatDate(weather.dt)}</h5>
    <pre>{JSON.stringify(weather, null, 2)}</pre>
  </header>
);

export default WeatherHeader;
