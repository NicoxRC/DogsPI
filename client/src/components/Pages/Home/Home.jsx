import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from '../../../slices/dogsSlice';
import { fetchTemperaments } from '../../../slices/temperamentsSlice';
import NavBar from '../../Nav/Nav';
import Pagination from '../../Pagination/Pagination';
import Cards from '../../cards/Cards';
import Spinner from '../../Spinner/Spinner';
import './Home.css';

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="home">
      <NavBar />
      <Pagination />
      <Cards />
    </div>
  );
}
