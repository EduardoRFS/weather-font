import './App.css';
import React, { useState } from 'react';
import SearchContainer from './views/Search/SearchContainer';
import WeatherView from './views/Weather/WeatherView';

const App = () => {
  const [weather, setWeather] = useState(null);
  return (
    <div className="App">
      {weather ? (
        <WeatherView weather={weather} />
      ) : (
        <SearchContainer go={setWeather} />
      )}
    </div>
  );
};

export default App;
