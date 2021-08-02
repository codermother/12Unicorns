import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Image1 from "../../../Photos/photo1.png";
import Image2 from "../../../Photos/photo2.png";
import Approved from "../../../Photos/approved.png";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./Slider.css";

// import Swiper core and required modules
import SwiperCore, { Pagination, Mousewheel, Keyboard } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Mousewheel, Keyboard]);

function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        slidesPerView={3}
        slidesPerGroup={3}
        spaceBetween={35}
        mousewheel={true}
        keyboard={true}
        className="mySwiper-home1"
      >
        <SwiperSlide className="home-slider">
          <img src={Image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider-heading">
          <div className="">
            <p className="slider-heading-p1 font-heading">
              We create trust
              <br /> in the art
              <br /> of tomorrow
            </p>
            <p className="slider-heading-p2 font-brandon-20">
              BUY ESTABLISHED ART,
              <br />
              FROM UPRISING & ESTABLISHED ARTISTS
            </p>
            <img src={Approved} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-slider">
          <img src={Image1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="home-slider">
          <img src={Image2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="slider-heading">
          <div className="">
            <p className="slider-heading-p1 font-heading">
              We create trust
              <br /> in the art
              <br /> of tomorrow
            </p>
            <p className="slider-heading-p2 font-brandon-20">
              BUY ESTABLISHED ART,
              <br />
              FROM UPRISING & ESTABLISHED ARTISTS
            </p>
            <img src={Approved} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="home-slider">
          <img src={Image1} alt="" />
        </SwiperSlide>
      </Swiper>
      <Link to="/gallery" className="slider-btn">
        EXPLORE 12UNICORNS GALLERY{" "}
        <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
      </Link>
    </>
  );
}

export default Slider;
