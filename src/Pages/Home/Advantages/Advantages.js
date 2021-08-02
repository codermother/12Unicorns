import React from "react";
import "./Advantages.css";
import Advantages1 from "../../../Photos/advantages1.png";
import Advantages2 from "../../../Photos/advantages2.png";
import Advantages3 from "../../../Photos/advantages3.png";
import Advantages5 from "../../../Photos/advantages5.png";
import star from "../../../Photos/star.png";

function Advantages() {
  return (
    <div className="section advantages-section">
      <div className="text-center advantages-container">
        <h1>Your 12Unicorn Advantages</h1>
        <div className="row ml-0 mr-0">
          <div className="col advantages-col ">
            <img src={Advantages1} alt="" />
            <p className="advantages">GET FOKUS</p>
          </div>
          <div className="col advantages-col">
            <img src={Advantages2} alt="" />
            <p className="advantages">RECEIVE CLARITY</p>
          </div>
          <div className="col advantages-col">
            <img src={Advantages3} alt="" />
            <p className="advantages">BE IN CONTROL</p>
          </div>
          <div className="col advantages-col">
            <img src={Advantages1} alt="" />
            <p className="advantages">GET COMFORT</p>
          </div>
          <div className="col advantages-col">
            <img src={Advantages5} alt="" />
            <p className="advantages border-0">TAKE DELIGHT</p>
          </div>
        </div>
      </div>
      <p className="font-brandon-25">
        12 Unicorns unites the history of traditional art with the boom of
        digital art and makes art dealing not only safe with the transparency of
        the blockchain but also opens up the art market to customers around the
        globe with the agility and the speed of the blockchain.
      </p>
      <button className="advantages-btn">
        LEARN MORE ABOUT YOUR ADVANTAGES
        <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
      </button>
      <div className="d-flex align-items-center justify-content-center">
        <div className="star-line"></div>
        <div>
          <img src={star} alt="" />
        </div>
        <div className="star-line"></div>
      </div>
    </div>
  );
}

export default Advantages;
