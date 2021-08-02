import React, { useState, useContext, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import "./ExpertsInformation.css";
import { ExpertsContext } from "../../../Contexts/expertsContext";
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

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const ExpertsInformation = () => {
  const [experts, setExperts] = useContext(ExpertsContext);
  const [isFocus, setIsFocus] = useState(false);
  const [desc, setDesc] = useState({
    txt: {
      desc: " ",
      ls: [],
    },
  });

  const hover = (userId) => {
    const userData = experts.filter((value) => userId === value.id);
    console.log(userData);

    setDesc(userData[0]);
    setIsFocus(true);
  };

  useEffect(() => {}, [desc]);

  return (
    <div className="section experts-information-section ">
      <div className="experts-information-container" id="ourExperts">
        <h1 className="font-heading text-center"> Our Experts</h1>
        <div className="experts-information-top">
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
            {experts.map((expert, index) => (
              <SwiperSlide
                key={index}
                onMouseEnter={() => hover(expert.id)}
                onMouseLeave={() => setIsFocus(false)}
                className=" ourExperts-item d-flex flex-column"
              >
                <img className="mx-auto" src={expert.img} alt="" />
                <h5>{expert.art}</h5>
                <p>{expert.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* <ExpertsInformationBottom desc={desc} /> */}
        <div className="row experts-information">
          <div className="col-xl-6 d-flex experts-information-left" id="deneme">
            <span className="quotes-left">“</span>{" "}
            <p>
              {ReactHtmlParser(desc.txt.desc)}{" "}
              <span className="quotes-right">”</span>
            </p>
          </div>
          <div className="col-xl-6 font-brandon-20wide experts-information-right">
            {desc.txt.ls.map((parag, index) => (
              <p key={index}>{parag}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertsInformation;
