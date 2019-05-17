import './SearchButton.css';
import React from 'react';

const SearchButton = ({ ...props }) => (
  <button type="submit" className="SearchButton" {...props}>
    Procurar
  </button>
);

export default SearchButton;
