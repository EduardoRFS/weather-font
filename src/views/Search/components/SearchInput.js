import './SearchInput.css';
import React from 'react';

const SearchInput = ({ locked, value, ...props }) => (
  <div className={`SearchInput ${locked && 'SearchInput--locked'}`} {...props}>
    <label htmlFor="search-input" className="SearchInput_container">
      <input
        id="search-input"
        className="SearchInput__input"
        value={value}
        disabled={locked}
        {...props}
      />
      {!value && <span className="SearchInput__label">Buscar por cidade</span>}
    </label>
  </div>
);

export default SearchInput;
