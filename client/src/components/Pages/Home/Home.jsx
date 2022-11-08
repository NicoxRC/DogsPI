import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import Pagination from "../../Pagination/Pagination";
import Cards from "../../Cards/Cards";
import Spinner from "../../Spinner/Spinner";
import { fetchDogs } from "../../../slices/dogsSlice";
import { fetchTemperaments } from "../../../slices/temperamentsSlice";

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return (
    <div className="home">
      <NavBar />
      <Pagination />
      {isLoading ? <Spinner /> : <Cards />}
    </div>
  );
}
