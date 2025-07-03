// src/components/Splash.js
import React from 'react';
import '../styles/Splash.css'; 
import splashLogo from '../assets/lentee_logo.png'; 

function Splash() {
  return (
    <div className="splash-container">
      <img src={splashLogo} alt="로딩 중" className="splash-logo" />
    </div>
  );
}

export default Splash;
