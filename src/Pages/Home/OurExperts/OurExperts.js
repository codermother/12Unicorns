import React from "react";
import "./OurExperts.css";
import MariaAbramova from "../../../Photos/MariaAbramova.png";
import Explore1 from "../../../Photos/Explore1.png";
import Explore9 from "../../../Photos/Explore9.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

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
import { Link } from "react-router-dom";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function OurExperts() {
  return (
    <>
      <div className="section ourExperts-section">
        <div className="ourExperts-container text-center">
          <h1 className="font-heading ">Our Experts</h1>
          <p>
            We are a circle of experts with more than 125 years of experience
          </p>
          <Swiper
            navigation={true}
            slidesPerView={5}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            className="mySwiper-experts"
          >
            <SwiperSlide className=" ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={Explore1} alt="" />
              <h5>MODERN ART EXPERT</h5>
              <p>Elisabeth May</p>
            </SwiperSlide>
            <SwiperSlide className=" ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>MIX MEDIA ART EXPERT</h5>
              <p>Frauke Sommer</p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>FINE ART EXPERT</h5>
              <p>Frauke Sommer</p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={Explore9} alt="" />
              <h5>STREET ART EXPERT</h5>
              <p>Bob Summer </p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>FINE ART EXPERT</h5>
              <p>Rapli Cool</p>
            </SwiperSlide>
            <SwiperSlide className=" ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={Explore1} alt="" />
              <h5>MODERN ART EXPERT</h5>
              <p>Elisabeth May</p>
            </SwiperSlide>
            <SwiperSlide className=" ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>MIX MEDIA ART EXPERT</h5>
              <p>Frauke Sommer</p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>FINE ART EXPERT</h5>
              <p>Frauke Sommer</p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={Explore9} alt="" />
              <h5>STREET ART EXPERT</h5>
              <p>Bob Summer </p>
            </SwiperSlide>
            <SwiperSlide className="ourExperts-item d-flex flex-column">
              <img className="mx-auto" src={MariaAbramova} alt="" />
              <h5>FINE ART EXPERT</h5>
              <p>Rapli Cool</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <Link to="/experts" className="experts-btn">
          MORE ABOUT OUR EXPERTS HERE
          <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
        </Link>
      </div>
    </>
  );
}

export default OurExperts;
