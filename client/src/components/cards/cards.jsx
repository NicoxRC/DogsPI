import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Cards.css";

export default function Cards() {
  const actualDogs = useSelector((state) => state.pagination.actualDogs);

  return (
    <div className="card_container">
      {actualDogs?.map((el) => (
        <Link to={`/details/${el.id}`} key={el.id} className="link_dog">
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
