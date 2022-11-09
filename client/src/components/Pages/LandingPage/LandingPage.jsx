import React from "react";
import { Link } from "react-router-dom";
import PageLogo from "./PageLogo/PageLogo";
import linkedin from "../../../images/Linkedin.png";
import github from "../../../images/Github.png";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing_page">
      <Link to="/home">
        <PageLogo />
      </Link>
      <p>
        Learn about different breeds of dogs <br />
        and add new breeds
      </p>
      <a href="https://www.linkedin.com/in/nicolas-rojas-castro-65b156150/">
        <img src={linkedin} alt={linkedin} className="linkedin_logo" />
      </a>
      <a href="https://github.com/NicoxRC/PI_Dogs_By_NicoxRC">
        <img src={github} alt={github} className="github_logo" />
      </a>
    </div>
  );
}
