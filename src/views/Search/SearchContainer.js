import './SearchView.css';
import React, { useState } from 'react';
import { useAsyncTaskFetch } from 'react-hooks-async/dist/use-async-task-fetch';
import SearchView from './SearchView';

// TODO: this shouldn't be hard coded
const API_KEY = '2d93625ddffb6208b789d95c49574877';

const SearchContainer = () => {
  const [value, setValue] = useState('');

  const { pending, result, start, started } = useAsyncTaskFetch(
    // TODO: also, this shouldn't be hard coded
    `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&q=${value}`
  );
  const submitCallback = ev => {
    ev.preventDefault();
    if (started) {
      return;
    }
    start();
  };
  return (
    <SearchView
      loading={started && pending}
      value={value}
      setValue={setValue}
      onSubmit={submitCallback}
    />
  );
};

export default SearchContainer;
