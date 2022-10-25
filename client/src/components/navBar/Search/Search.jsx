import React from "react";
import SearchLogo from "./SearchLogo/SearchLogo";
import lupa from "../../../images/Search.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDog } from "../../../slices/dogsSlice";
import "./Search.css";

export default function Search() {
  const [searchDog, setSearchDog] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchDog(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(fetchDog(searchDog));
  };

  return (
    <div className="container">
      <SearchLogo />
      <div className="search">
        <input
          name="Search"
          type="text"
          placeholder="Search..."
          onChange={handleChange}
        />
        <button onClick={handleClick}>
          <img src={lupa} alt={lupa} />
        </button>
      </div>
    </div>
  );
}
