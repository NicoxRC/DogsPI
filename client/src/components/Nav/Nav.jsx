import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import FilterMenu from './FilterButton/FilterMenu';
import LogoDog from './LogoDog/LogoDog';
import './Nav.css';

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="logoNav">
        <Link to={'/'}>
          <LogoDog />
        </Link>
      </div>
      <div className="navBar_filters">
        <Search />
        <FilterMenu />
      </div>
    </div>
  );
}
