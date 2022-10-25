import React from "react";
import rayas from "./3rayas.png";
import "./FilterButton.css";

export default function FilterButton() {
  return (
    <button className="filterButton">
      <img src={rayas} alt={rayas} />
    </button>
  );
}
