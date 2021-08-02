import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import ArtistsInformation from "./ArtistsInformation/ArtistsInformation";
import ArtistsSlider from "./ArtistsSlider/ArtistsSlider";
import Footer from "../Home/Footer/Footer";
import MyArtworks from "./MyArtworks/MyArtworks";
import ArtistsExpertComment from "./ArtistsExpertComment/ArtistsExpertComment";

function Artists() {
  return (
    <div className="section">
      <Navbar />
      <ArtistsSlider />
      <ArtistsInformation />
      <MyArtworks />
      <ArtistsExpertComment />
      <Footer />
    </div>
  );
}

export default Artists;
