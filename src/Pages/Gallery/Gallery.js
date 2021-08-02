import React, { useState } from "react";
import GalleryExperts from "./GalleryExperts/GalleryExperts";
import GalleryTabs from "./GalleryExperts/GalleryTabs/GalleryTabs";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

function Gallery() {
  return (
    <div className="section">
      <Navbar />
      <GalleryExperts />
      <GalleryTabs />
      <Footer />
    </div>
  );
}

export default Gallery;
