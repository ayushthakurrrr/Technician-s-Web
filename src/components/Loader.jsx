import React from 'react';
import '../css/loader.css'; // use new CSS below

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="spinner">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
