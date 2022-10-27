import React from "react";
import {
  filterByTemperaments,
  filterBySource,
} from "../../slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Filters.css";
import Sorts from "../Sorts/Sorts";

export default function Filters() {
  const dispatch = useDispatch();
  const temperaments = useSelector(
    (state) => state.temperaments.allTemperaments
  );
  const allDogs = useSelector((state) => state.dogs.allDogs);

  const handleTemperamentChange = (e) => {
    dispatch(
      filterByTemperaments({ [e.target.name]: e.target.value, allDogs })
    );
  };

  const handleSourceChange = (e) => {
    dispatch(filterBySource({ [e.target.name]: e.target.value, allDogs }));
  };

  return (
    <div className="filter">
      <div className="filter_temperaments">
        <h3>Temperaments:</h3>
        <select
          name="filterByTemperament"
          defaultValue="all"
          onChange={handleTemperamentChange}
        >
          <option value="all">Choose temperaments...</option>
          {temperaments?.map((temperament) => (
            <option value={temperament} key={temperament}>
              {temperament}
            </option>
          ))}
        </select>
      </div>
      <div className="filter_source">
        <h3>Source:</h3>
        <select
          name="filterBySource"
          onChange={handleSourceChange}
          defaultValue="default"
        >
          <option value="default">Choose source...</option>
          <option value="all">Show All</option>
          <option value="api">Only Api</option>
          <option value="db">Only DB</option>
        </select>
      </div>
      <Sorts />
    </div>
  );
}
