import React, { useState } from "react";
import rayas from "../../../images/Rayas.png";
import Filters from "./Filters/Filters";
import Sorts from "./Sorts/Sorts";
import "./FilterButton.css";

export default function FilterButton() {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button className="filterButton" onClick={handleClick}>
        <img src={rayas} alt={rayas} />
      </button>
      {showDiv ? (
        <div className="filters_container">
          <Filters />
          <Sorts />
        </div>
      ) : null}
    </div>
  );
}
