import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.name} />
      <h1>{props.name}</h1>
      <p>Temperament: {props.temperament}</p>
      <p>Height: {props.height} Meters</p>
      <p>Weight: {props.weight} Kg</p>
      <p>Lifespan: {props.lifeSpan} Years</p>
    </div>
  );
}