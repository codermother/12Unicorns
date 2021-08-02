import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideExpertReview from "./ExpertReview/SlideExpertReview";
import SlideBuyArtwork from "./SlideBuyArtwork/SlideBuyArtwork";
import SlideArtworkStory from "./SlideArtworkStory/SlideArtworkStory";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./ArtworkModal.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

function ArtworkModal() {
  return (
    <div
      className="modal fade artwork-modal"
      id="artworkModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="artworkModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg artwork-modal-container">
        <div className="modal-content artwork-modal-content">
          <div className="modal-body p-0 artwork-modal-body">
            <button
              type="button"
              className="btn-close artwork-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <div className="artworkModal-top text-center">
              <h6 className="font-brandon-16">LIMITED NFT COLLECTION</h6>
              <h2 className="new-spirit-32 ">ArtPiece - Astronaut on bike</h2>
              <p className="font-brandon-17 ">
                Collection of 10 NFT´s all this mistaken idea of denouncing
                pleasure and praising pain was born and I will give you a
                complete account of the system, and expound the actual teachings
                of the great explorer of the truth, the master-builder of human
                happiness. No one rejects, dislikes, or avoids pleasure itself,
                because it is pleasure, but because those who do not know how to
                pursue pleasure rationally encounter.
              </p>
              <div className="artworkTop-border mx-auto"></div>
            </div>

            <Swiper
              mousewheel={true}
              keyboard={true}
              navigation={{
                nextEl: ".artworkStory-arrow",
                prevEl: ".expertReview-arrow",
              }}
              spaceBetween={0}
              observer={true}
              observeParents={true}
              className="mySwiper artworkModal-swiper"
            >
              <SwiperSlide className="artworkModal-container">
                <SlideExpertReview />
              </SwiperSlide>
              <SwiperSlide>
                <SlideBuyArtwork />
              </SwiperSlide>
              <SwiperSlide>
                <SlideArtworkStory />
              </SwiperSlide>
            </Swiper>
            <div className="modal-footer buyArtwork-footer">
              <button className="font-brandon-16 expertReview-arrow">
                <i className="fas fa-long-arrow-alt-left artwork-right-arrow "></i>{" "}
                EXPERT REVIEW
              </button>
              <a href="#buyArtwork" className=" artworkModal-btn">
                BUY ARTWORK
                <i className="fas fa-long-arrow-alt-right ourArtists-arrow"></i>
              </a>
              <button className="font-brandon-16 artworkStory-arrow">
                ARTWORK STORY{" "}
                <i className="fas fa-long-arrow-alt-right artwork-right-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtworkModal;
