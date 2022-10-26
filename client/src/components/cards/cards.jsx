import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Cards() {
  const actualDogs = useSelector((state) => state.pagination.actualDogs);

  return (
    <div>
      <ul>
        {actualDogs?.map((el) => (
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
