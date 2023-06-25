import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDog } from '../../../slices/dogsSlice';
import lupa from '../../../images/Search.png';
import './Search.css';

export default function Search() {
  const [searchDog, setSearchDog] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchDog(e.target.value);
  };

  const handleClick = () => {
    dispatch(fetchDog(searchDog));
  };

  return (
    <div className="container_search">
      <div className="search">
        <input
          name="Search"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
      </div>
      <div>
        <button onClick={handleClick}>
          <img src={lupa} alt={lupa} />
        </button>
      </div>
    </div>
  );
}
