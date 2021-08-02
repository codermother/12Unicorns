import React from "react";
import "./ExpertsFilm.css";
import Down from "../../../Photos/Arrows/Down.png";

function ExpertsFilm() {
  return (
    <div className="section mx-auto expertsFilm-section">
      <div className="experts-film-container">
        <h5 className="font-heading mx-auto text-center">
          We are the circle of experts with more <br /> than 125 years
          experience.
        </h5>
      </div>
      <a href="#ourExperts" className="expertsFilm-arrow">
        <img src={Down} alt="" />
      </a>
    </div>
  );
}

export default ExpertsFilm;
