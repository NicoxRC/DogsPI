import React from 'react';
import logo from '../../../images/SearchLogo.svg';
import './LogoDog.css';

export default function LogoDog() {
  return (
    <div className="LogoDog">
      <img src={logo} alt={logo} />
    </div>
  );
}
