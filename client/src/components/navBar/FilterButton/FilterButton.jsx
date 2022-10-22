import React from "react";
import "./FilterButton.css";
import rayas from "./3rayas.png";

export default function FilterButton() {
  return (
    <button className="filterButton">
      <img src={rayas} alt={rayas} />
    </button>
  );
}
