import './SearchView.css';
import React from 'react';
import SearchInput from './components/SearchInput';
import SearchButton from './components/SearchButton';

const SearchView = props => (
  <div className="SearchView">
    <form {...props}>
      <div className="SearchView__item">
        <SearchInput />
      </div>
      <div className="SearchView__item">
        <SearchButton />
      </div>
    </form>
  </div>
);

export default SearchView;
