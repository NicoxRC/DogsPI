import React from "react";
import logo from "./Logo.svg";
import "./Logo.css";

export default function Logo() {
  return <img src={logo} alt={logo} className="logo" />;
}
