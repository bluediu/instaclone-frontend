import React from 'react';
import mainLoader from '../../assets/icon-loader.png';
import './Loader.scss';

function Loader() {
  return (
    <div className="main-loader">
      <img src={mainLoader} alt="loading..." />
    </div>
  );
}

export default Loader;
