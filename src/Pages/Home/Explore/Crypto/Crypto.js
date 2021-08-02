import React from "react";
import "./Crypto.css";
import Explore1 from "../../../../Photos/Explore1.png";
import Explore2 from "../../../../Photos/Explore2.png";
import Explore5 from "../../../../Photos/Explore5.png";
import Explore6 from "../../../../Photos/Explore6.png";
import Explore7 from "../../../../Photos/Explore7.png";
import Explore8 from "../../../../Photos/Explore8.png";
import Explore9 from "../../../../Photos/Explore9.png";
import Explore3 from "../../../../Photos/MariaAbramova.png";
import Approved from "../../../../Photos/approved.png";
import { Link } from "react-router-dom";
import Checkbox from "../Checkbox";

function Crypto() {
  return (
    <div
      className="tab-pane fade show active"
      id="pills-crypto"
      role="tabpanel"
      aria-labelledby="pills-crypto-tab"
    >
      <Checkbox />

      <div className="row explore-row justify-content-between">
        <div className="col-4 explore-expert-items explore-expert-items-round ">
          <img src={Explore1} alt="" />
          <h5>
            ART
            <br /> EXPERT
          </h5>
        </div>
        <div className="col-4 explore-expert-items explore-expert-items-square">
          <img src={Explore2} alt="" />
        </div>
        <div className="col-4 explore-expert-items explore-expert-items-round ">
          <img src={Explore3} alt="" />
          <h5>
            STREET ART
            <br /> EXPERT
          </h5>
        </div>
      </div>

      <div className="row explore-row explore-row-2">
        <div
          className="col
          "
        >
          <div className=" lecture-container mx-auto">
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
      <div className="row explore-row explore-row-3">
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
          <img className="explore-8" src={Explore8} alt="" />
          <img className="approved" src={Approved} alt="" />
        </div>

        <div className="col explore-expert-items crypto-9 explore-expert-items-round ">
          <img src={Explore9} alt="" />
          <h5>
            STREET ART
            <br /> EXPERT
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Crypto;
