import React from "react";
import Advantages from "./Advantages/Advantages";
import Explore from "./Explore/Explore";
import About from "./About/About";
import Navbar from "./Navbar/Navbar";
import OurArtists from "./OurArtists/OurArtists";
import Slider from "./Slider/Slider";
import Footer from "./Footer/Footer";
import OurExperts from "./OurExperts/OurExperts";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Slider />
      <About />
      <OurArtists />
      <OurExperts />
      <Advantages />
      <Explore />
      <Footer />
    </div>
  );
}

export default Home;
