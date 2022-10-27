import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NavBar from "../../NavBar/NavBar";
import Pagination from "../../Pagination/Pagination";
import Cards from "../../Cards/Cards";
import { fetchDogs } from "../../../slices/dogsSlice";
import { fetchTemperaments } from "../../../slices/temperamentsSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return (
    <div className="home">
      <NavBar />
      <Pagination />
      <Cards />
    </div>
  );
}
