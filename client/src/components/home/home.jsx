import React from "react";
import NavBar from "../NavBar/NavBar";
import Pagination from "../Pagination/Pagination";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import { fetchDogs } from "../../slices/dogsSlice";
import { fetchTemperaments } from "../../slices/temperamentsSlice";
import { useDispatch} from "react-redux";
import Filters from "../Filters/Filters";
import Sorts from "../Sorts/Sorts";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(fetchTemperaments());
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <Filters />
      <Sorts />
      <Pagination />
      <Cards />
    </div>
  );
}
