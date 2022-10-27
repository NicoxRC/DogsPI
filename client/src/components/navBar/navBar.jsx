import React from "react";
import Search from "./Search/Search";
import CreateButton from "./CreateButton/CreateButton";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navBar">
      <Filters />
      <Search />
      <Link to={"/create"}>
        <CreateButton />
      </Link>
    </div>
  );
}
