import React, { useState } from 'react';
import Filters from './Filters/Filters';
import Sorts from './Sorts/Sorts';
import CreateButton from '../CreateButton/CreateButton';
import rayas from '../../../images/Rayas.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './FilterMenu.css';

export default function FilterMenu() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <nav>
      <div className="filterButton" onClick={handleClick}>
        <img src={rayas} alt={rayas} />
      </div>
      <div
        className={showDiv ? 'filters_back' : 'filters_back filters_back_show'}
      >
        <div className="filters_container">
          <Filters />
          <Sorts />
          <Link to={'/create'}>
            <CreateButton />
          </Link>
        </div>
      </div>
    </nav>
  );
}
