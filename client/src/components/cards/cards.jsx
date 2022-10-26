import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cards() {
  const actualDogs = useSelector((state) => state.pagination.actualDogs);

  return (
    <div>
      <button onClick={() => console.log(actualDogs)}>cd</button>
      {actualDogs?.map((el) => (
        <Link to={`/details/${el.id}`} key={el.id}>
          <Card
            id={el.id}
            name={el.name}
            image={el.image}
            temperament={el.temperament}
            weight={el.weight}
          />
        </Link>
      ))}
    </div>
  );
}
