import './SearchView.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import SearchButton from './components/SearchButton';

const SearchView = ({ loading, value, setValue, onSubmit }) => (
  <div className="SearchView">
    <form onSubmit={onSubmit}>
      <div className="SearchView__item">
        <SearchInput
          value={value}
          onChange={ev => setValue(ev.target.value)}
          locked={loading}
        />
      </div>
      <div className="SearchView__item">
        <SearchButton loading={loading} />
      </div>
    </form>
  </div>
);

export default SearchView;
