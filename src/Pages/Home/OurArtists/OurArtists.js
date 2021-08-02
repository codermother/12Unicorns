import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./OurArtists.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { ArtistsContext } from "../../../Contexts/artistsContext";
import BenJohnson from "../../../Photos/BenJohnson1.png";
import MariaAbramova from "../../../Photos/MariaAbramova.png";
import Federico from "../../../Photos/Artists/Federico/Federico.jpg";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function OurArtists() {
  const [artists, setArtists] = useContext(ArtistsContext);

  return (
    <>
      <div className=" ourArtists-section">
        <div className=" text-center ourArtists-container">
          <h1>Our Artists</h1>
          <Swiper
            navigation={true}
            pagination={{
              clickable: true,
            }}
            keyboard={true}
            className="mySwiper-ourArtists"
          >
            {artists.map((artist, index) => {
              return (
                <SwiperSlide id={index} className="ourArtists-slide ">
                  <img src={artist.img} alt="" />
                  <div className="ourArtists-content mx-auto">
                    <h5 className="font-brandon-16">{artist.title}</h5>
                    <h3 className="font-heading">{artist.name}</h3>
                    <p className="font-brandon-16">{artist.txtHome}</p>
                    <div className="ourArtists-border"></div>
                    <div className="ourArtists-content-bottom">
                      <img src={MariaAbramova} alt="" />
                      <div className="ourArtists-content-bottom-heading">
                        <span className="quotes-left font-heading">“</span>
                        <p>
                          {artist.expertCommentHome}
                          <span className="quotes-right font-heading">”</span>
                        </p>
                        <h6 className="font-brandon-16">
                          MARIA ABRAMOVA, STREET ART EXPERT
                        </h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <Link to="ourArtists" className="ourArtists-btn">
            DISCOVER ALL 12 ARTISTS
            <i className="fas fa-long-arrow-alt-right ourArtists-arrow"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default OurArtists;
