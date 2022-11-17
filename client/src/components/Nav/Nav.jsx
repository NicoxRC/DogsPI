import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search/Search";
import CreateButton from "./CreateButton/CreateButton";
import FilterButton from "./FilterButton/FilterButton";
import "./Nav.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <FilterButton />
      <Search />
      <Link to={"/create"}>
        <CreateButton />
      </Link>
    </div>
  );
}
