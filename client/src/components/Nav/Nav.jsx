import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search/Search';
import CreateButton from './CreateButton/CreateButton';
import FilterButton from './FilterButton/FilterButton';
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
        <FilterButton />
        <Search />
        <Link to={'/create'}>
          <CreateButton />
        </Link>
      </div>
    </div>
  );
}
