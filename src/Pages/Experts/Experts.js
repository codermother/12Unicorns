import React from "react";
import Footer from "../Home/Footer/Footer";
import Navbar from "../Home/Navbar/Navbar";
import ExpertsFilm from "./ExpertsFilm/ExpertsFilm";
import ExpertsInformation from "./ExpertsInformation/ExpertsInformation";
import MyReviews from "./MyReviews/MyReviews";
import Topics from "./Topics/Topics";

function Experts() {
  return (
    <div className="experts">
      <Navbar />
      <ExpertsFilm />
      <ExpertsInformation />
      <Topics />
      <MyReviews />
      <Footer />
    </div>
  );
}

export default Experts;
