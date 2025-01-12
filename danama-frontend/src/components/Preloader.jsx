import React from 'react';
import '../styles/Preloader.css'; // Add your preloader styles here

const Preloader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="preloader-container">
      <div className="dot red"></div>
      <div className="dot blue"></div>
      <div className="dot green"></div>
    </div>
  );
};

export default Preloader;