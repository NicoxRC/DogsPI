import React from 'react';
import './Spinner.css';

export default function Spinner() {
  return (
    <div className="spinner_container">
      <div className="lds-heart">
        <div></div>
      </div>
    </div>
  );
}
