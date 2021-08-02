import React, { useState, useContext, useEffect } from "react";
import "./SlideBuyArtwork.css";
import Astro1 from "../../../../../../../Photos/Astronauts/astro1.png";
import View from "../../../../../../../Photos/Icons/icon-view.png";
import ArtworkDetails from "../../../../../../../Photos/Icons/artworkDetails.png";
import MakeMoney from "../../../../../../../Photos/Icons/makeMoney.png";
import WhyThis from "../../../../../../../Photos/Icons/whyThis.png";
import NFTVersion from "../../../../../../../Photos/Icons/nft-version.png";
import Wallet from "../../../../../../../Photos/Icons/wallet.png";
import { BuyArtworkContext } from "../../../../../../../Contexts/buyArtworkContext";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Virtual } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Virtual]);

const dropItems = [
  {
    icon: ArtworkDetails,
    label: "ARTWORK DETAILS",
    desc: `I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
  account of the system, and expound the actual teachings of the great explorer of the truth,the master-builder human happiness. No one
  rejects, dislikes, or avoids pleasure itself, because that’s how it is.`,
  },
  {
    icon: NFTVersion,
    label: "WHAT IS A NFT VERSION",
    desc: `I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
  account of the system, and expound the actual teachings of the great explorer of the truth,the master-builder human happiness. No one
  rejects, dislikes, or avoids pleasure itself, because that’s how it is.`,
  },
  {
    icon: WhyThis,
    label: "WHY IS THIS ARTPIECE VALUABLE",
    desc: `I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
  account of the system, and expound the actual teachings of the great explorer of the truth,the master-builder human happiness. No one
  rejects, dislikes, or avoids pleasure itself, because that’s how it is.`,
  },
  {
    icon: MakeMoney,
    label: "WHAT DO I GET EXACTLY FOR MY MONEY",
    desc: `I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
  account of the system, and expound the actual teachings of the great explorer of the truth,the master-builder human happiness. No one
  rejects, dislikes, or avoids pleasure itself, because that’s how it is.`,
  },
];

function SlideBuyArtwork() {
  const [images, setImages] = useContext(BuyArtworkContext);
  const [imageSrc, setImageSrc] = useState(Astro1);
  const [totalSlide, setTotalSlide] = useState(images.length);
  const [current, setCurrent] = useState("0");

  const handleImage = (e, id, index) => {
    /* The photo that you click comes to bottom */
    console.log("event", e);
    const img = images.filter((val) => val.id === id);
    setImageSrc(img[0].img);

    /* Opacity changes when you click */
    let _images = document.querySelectorAll(".buyArtworkThumb");
    _images.forEach((el) => {
      el.style.removeProperty("opacity");
    });
    e.target.style.opacity = 1;

    setCurrent(index);
  };

  useEffect(() => {}, [imageSrc]);

  return (
    <div
      className="section artworkModal-slider buyArtwork-slider"
      id="buyArtwork"
    >
      <h6 className="font-brandon-16 ">CHOOSE YOUR FAVOURITE NFT-VERSION</h6>

      <div className="astronauts-container">
        <div className="buyArtwork-pagination">
          {current}/{totalSlide}
        </div>
        <div className="d-flex astronauts-styles justify-content-center">
          <Swiper
            spaceBetween={25}
            slidesPerView={10}
            freeMode={true}
            watchSlidesVisibility={true}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            className="buyArtwork-miniSwiper justify-content-between"
          >
            {images.map(({ img, key, id }, index) => {
              return (
                <SwiperSlide className="buyArtwork-miniSlider">
                  <img
                    className="buyArtworkThumb"
                    onClick={(e) => handleImage(e, id, index)}
                    key={key}
                    src={img}
                    alt=""
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="row mb-5 buyArtwork-section">
          <div className="col p-0 d-flex justify-content-center buyArtwork-container">
            <div className="buyArtwork-left ">
              <img src={imageSrc} alt="" />
              <div className="art-icons d-flex justify-content-between ">
                <img className="art-icon " src={View} alt="" />
                <div className="d-flex">
                  <div className="art-icons">
                    <i className="far fa-heart"></i>
                    <p>101</p>
                  </div>
                  <div className="art-icons">
                    <i className="far fa-eye "></i>
                    <p>101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col p-0 buyArtwork-right">
            <h3 className="new-spirit-32">ArtPiece - Astronaut on bike N°3</h3>
            <div className="buyArtwork-rightLine"></div>

            <div className="buyArtwork-dropdown">
              {dropItems.map((val) => (
                <Dropdown item={val} />
              ))}
            </div>
            <div className="buyArtwork-rightBottom">
              <h3>PRICE</h3>
              <p className="buyArtwork-line"></p>
              <p className="new-spirit-32">3.540,00 $ / 11 ETH</p>
              <button className="buyArtWork-btn d-flex">
                COLLECT IN WALLET <img src={Wallet} alt="" />
                <i> </i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown(props) {
  const { icon, label, desc } = props.item;
  const [isActive, setActive] = useState(false);

  const dropdownArrow = () => {
    setActive(!isActive);
  };

  return (
    <div className="btn-group dropdown-items p-0 d-block">
      <button
        className="d-flex dropdown-item p-0"
        onClick={(e) => dropdownArrow(e)}
      >
        <img src={icon} alt="" />
        <p className="">{label}</p>

        <span
          className={`dropdown-toggle dropdown-toggle-artwork ms-auto ${
            isActive ? "active-dropdown-span" : ""
          } `}
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="sr-only">Toggle Dropdown</span>
        </span>
      </button>

      <div
        className={`dropdown-menu ${isActive ? "active-dropdown-menu" : ""}`}
      >
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default SlideBuyArtwork;
