import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="image_dog_card">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="name_dog_card">
        <h1>{props.name}</h1>
      </div>
      <p className="weight_dog_card">
        <strong>Weight: </strong>
        {props.weight} Kg
      </p>
      <p className="temperament_dog_card">
        <strong>Temperament:</strong>
        {props.temperament ? props.temperament : "Not specified"}
      </p>
    </div>
  );
}
