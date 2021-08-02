import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./MyReviews.css";
import MyReviews1 from "../../../Photos/myreviews1.png";
import MyReviews2 from "../../../Photos/myreviews2.png";
import MyReviews3 from "../../../Photos/myreviews3.png";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function MyReviews() {
  return (
    <>
      <div className="section">
        <div className="myReviews-container text-center">
          <h1 className="font-heading text-center">My Reviews</h1>
          <Swiper
            navigation={true}
            slidesPerView={3}
            /*spaceBetween={0}*/
            mousewheel={true}
            keyboard={true}
            className="myReviews-mySwipers"
          >
            <SwiperSlide className="d-flex flex-column myReviewsSlide">
              <img src={MyReviews1} alt="" />
              <div className="myReviews-headings ">
                <h3>Ben Johnsons</h3>
                <h2 className="tk-brandon-grotesque">MAN WITH MOUSTACHE</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column myReviewsSlide">
              <img src={MyReviews2} alt="" />
              <div className="myReviews-headings ">
                <h3>Ben Johnsons</h3>
                <h2 className="tk-brandon-grotesque">MAN WITH MOUSTACHE</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column myReviewsSlide">
              <img src={MyReviews3} alt="" />
              <div className="myReviews-headings ">
                <h3>Ben Johnsons</h3>
                <h2 className="tk-brandon-grotesque">MAN WITH MOUSTACHE</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column myReviewsSlide">
              <img src={MyReviews1} alt="" />
              <div className="myReviews-headings ">
                <h3>Ben Johnsons</h3>
                <h2 className="tk-brandon-grotesque">MAN WITH MOUSTACHE</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="d-flex flex-column myReviewsSlide">
              <img src={MyReviews2} alt="" />
              <div className="myReviews-headings ">
                <h3>Ben Johnsons</h3>
                <h2 className="tk-brandon-grotesque">MAN WITH MOUSTACHE</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default MyReviews;
