import React from "react";

import Explore1 from "../../../../Photos/Explore1.png";
import Explore2 from "../../../../Photos/Explore2.png";
import Explore5 from "../../../../Photos/Explore5.png";
import Explore6 from "../../../../Photos/Explore6.png";
import Explore7 from "../../../../Photos/Explore7.png";
import Explore8 from "../../../../Photos/Explore8.png";
import Explore9 from "../../../../Photos/Explore9.png";
import Explore3 from "../../../../Photos/MariaAbramova.png";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";

function FreeSpirited() {
  return (
    <div>
      <Checkbox />
      <div className="row d-flex justify-content-center">
        <div className="row explore-row">
          <div className="col explore-expert-items ">
            <img src={Explore2} alt="" />
            <h5>
              ART
              <br /> EXPERT
            </h5>
          </div>
          <div className="col explore-expert-items  ">
            <img src={Explore1} alt="" />
          </div>
          <div className="col explore-expert-items">
            <img src={Explore5} alt="" />
            <h5>
              STREET ART
              <br /> EXPERT
            </h5>
          </div>
        </div>

        <div className="row">
          <div className="col lecture-container ">
            <h5 className="font-brandon-20wide">LECTURE NO°1</h5>
            <div className="lecture">
              <h3 className="new-spirit-30">What is NFT-art?</h3>
              <hr />
              <p>
                Sed ut perspiciatis undenis iste natus error sit volup tatem
                acusantium dolorem que laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto…
              </p>
              <Link to="/" className="moreInfo">
                MORE INFOS{" "}
                <i className="fas fa-long-arrow-alt-right bg-transparent"></i>
              </Link>
            </div>
          </div>

          <div className="col explore-row-items crypto-5-container ">
            <div className="crypto-5 mx-auto">
              <img src={Explore5} alt="" />
              <h3 className="text-center mx-auto new-spirit-30">
                We believe in the art of t<u>omorr</u>ow.
              </h3>
              <Link to="/" className="moreInfo">
                MORE INFOS{" "}
                <i className="fas fa-long-arrow-alt-right bg-transparent"></i>
              </Link>
            </div>
          </div>

          <div className="col explore-row-items crypto-6-container">
            <div className="crypto-6-wrapper">
              <img src={Explore6} alt="" />
              <div className="crypto-6 mx-auto ">
                <h3 className="font-brandon-16">UNICORN NO°2</h3>
                <h2>Frauke Sommer</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col explore-row-items crypto-7-container">
            <div className="crypto-7-wrapper">
              <img src={Explore7} alt="" />
              <div className="crypto-7 mx-auto">
                <h3 className="font-brandon-16">UNICORN NO°1</h3>
                <h2>Ben Johnson</h2>
              </div>
            </div>
          </div>

          <div className="col explore-row-items crypto-8">
            <img src={Explore8} alt="" />
          </div>

          <div className="col explore-expert-items crypto-9">
            <img src={Explore9} alt="" />
            <h5>
              STREET ART
              <br /> EXPERT
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeSpirited;
