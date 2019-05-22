import './SearchButton.css';
import React from 'react';
import Loader from 'react-loader-spinner';
import cl from 'classnames';

const SearchButton = ({ loading, ...props }) => {
  const buttonClass = cl('SearchButton', { 'SearchButton--loading': loading });
  const loaderClass = cl('SearchButton__loader', {
    'SearchButton__loader--show': loading,
  });
  return (
    <button type="submit" className={buttonClass} {...props}>
      <div className={loaderClass}>
        <Loader type="Oval" color="white" width="100%" height="100%" />
      </div>
      <span>Procurar</span>
    </button>
  );
};

export default SearchButton;
