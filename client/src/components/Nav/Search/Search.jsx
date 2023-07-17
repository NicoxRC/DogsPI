import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchDog } from '../../../slices/dogsSlice';
import { setPage } from '../../../slices/paginationSlice';
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
    dispatch(setPage(1));
  };

  return (
    <div className="container_search">
      <div className="search">
        <input
          name="Search"
          type="text"
          placeholder="Search a Dog..."
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
