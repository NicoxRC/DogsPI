import React from "react";
import {
  filterByTemperaments,
  filterBySource,
} from "../../slices/filtersSlice";
import { useDispatch, useSelector } from "react-redux";

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
    <div>
      <div>
        <h4>Temperaments:</h4>
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
      <div>
        <h4>Source:</h4>
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
    </div>
  );
}
