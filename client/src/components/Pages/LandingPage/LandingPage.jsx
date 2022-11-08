import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing_page">
      <button>
        <Link to="/home">DogoPedia</Link>
      </button>
    </div>
  );
}