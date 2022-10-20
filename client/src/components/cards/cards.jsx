import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDogs } from "../../slices/dogsSlice";
import Card from "../card/card";

export default function Cards() {
  const dogs = useSelector((state) => state.dogs.allDogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {dogs?.map((el) => (
          <li key={el.id}>
            <Card
              id={el.id}
              name={el.name}
              image={el.image}
              temperament={el.temperament}
              height={el.height}
              weight={el.weight}
              life_span={el.lifeSpan}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
