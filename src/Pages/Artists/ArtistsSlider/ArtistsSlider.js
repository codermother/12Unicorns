import React, { useRef, useState, useContext } from "react";

import ApprovedArtists from "../../../Photos/ApprovedArtists.png";

import { ArtistsContext } from "../../../Contexts/artistsContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import "./ArtistsSlider.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper/core";
import { Virtual } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Thumbs, Virtual]);

function ArtistsPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [artists, setArtists] = useContext(ArtistsContext);

  return (
    <>
      <div className="section">
        <div className="artists-container">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={0}
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            virtual
            className="mySwiper2 artists-swiper"
          >
            {artists.map((artist, index) => {
              return (
                <SwiperSlide id={index} className="artists-slider">
                  <img src={artist.img} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="artists-swiper-bottom">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={16}
              slidesPerView={12}
              freeMode={true}
              watchSlidesVisibility={true}
              watchSlidesProgress={true}
              className="artists-slider-bottom"
            >
              {artists.map((artist, index) => {
                return (
                  <SwiperSlide className="artist-slider-mini">
                    <img src={artist.img} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="artists-content">
            <h3>UNICORN NO°1</h3>
            <h1 className="new-spirit-32">Federico Castelluccio</h1>
            <p className="bg-transparent">
              Give respect to every single discipline that you are working on,
              if you do that, and if you don’t do it for any ulterior motive,
              people will notice that, and they will respect you for that. The
              passion comes through.{" "}
            </p>
            <a href="#showArtworks" className="artists-arrow font-brandon-16">
              {" "}
              SHOW ARTWORKS<span>↓</span>
            </a>
          </div>
          <img className="artists-approved" src={ApprovedArtists} alt="" />
        </div>
      </div>
    </>
  );
}
export default ArtistsPage;
