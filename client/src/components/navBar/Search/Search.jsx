import React from "react";
import Logo from "./Logo/Logo";
import lupa from "./Search.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDog } from "../../../slices/dogsSlice";
import "./Search.css";

export default function Search() {
  const dispatch = useDispatch();

  const [dog, setDog] = useState("");

  const handleChange = (e) => {
    setDog(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(fetchDog(dog));
  };

  return (
    <div className="container">
      <Logo />
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
