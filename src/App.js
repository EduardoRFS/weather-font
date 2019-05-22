import './App.css';
import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';
import SearchContainer from './views/Search/SearchContainer';
import WeatherView from './views/Weather/WeatherView';

const App = () => {
  const [weather, setWeather] = useState(null);
  return (
    <div className="App">
      {weather ? (
        <>
          <button
            type="button"
            className="App--back"
            onClick={() => setWeather(null)}
          >
            <MdArrowBack />
          </button>
          <WeatherView weather={weather} />
        </>
      ) : (
        <SearchContainer go={setWeather} />
      )}
    </div>
  );
};

export default App;
