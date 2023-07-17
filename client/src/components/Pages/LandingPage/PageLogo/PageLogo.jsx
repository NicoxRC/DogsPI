import React from 'react';
import logo from '../../../../images/SearchLogo.svg';
import './PageLogo.css';

export default function LogoPage() {
  return <img src={logo} alt={logo} className="page_logo" />;
}
