import React from "react";
import FilterButton from "./FilterButton/FilterButton";
import Search from "./Search/Search";
import CreateButton from "./CreateButton/CreateButton";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <FilterButton />
      <Search />
      <CreateButton />
    </div>
  );
}
