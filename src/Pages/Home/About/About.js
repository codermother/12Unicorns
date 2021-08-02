import React from "react";
import "./About.css";
import WowMoment from "../../../Photos/wowmoment.png";

function About() {
  return (
    <div className="section">
      <div className="container about-container mx-auto">
        <h1 className="text-center font-heading ">
          What makes 12Unicorns different
        </h1>
        <p className="text-center font-brandon-25 p-0">
          12 Unicorns is a managed marketplace for classical & digital art
          including NFT´s. Our team of art experts certifies the authenticity
          and the value of each individual art piece to protect potential buyers
          from misinvestments.
        </p>

        <div className="row text-center about">
          <div className="col col-about ">
            <img src={WowMoment} alt="" />
            <h4>We believe</h4>
            <p>
              We make sure that technology does not dominate art, but that art
              uses the advantages of technology
            </p>
          </div>
          <div className="col col-about">
            <img src={WowMoment} alt="" />
            <h4>Manifest</h4>
            <p>We have a renowned art network - worldwide</p>
          </div>
          <div className="col col-about">
            <img src={WowMoment} alt="" />
            <h4>Places</h4>
            <p>
              We offer a modern customer experience with a mix of entertainment
              and education
            </p>
          </div>
          <div className="col col-about">
            <img src={WowMoment} alt="" />
            <h4>Experts</h4>
            <p>
              We are combining traditional art dealing and modern edutainment
              with the agility and speed of the blockchain
            </p>
          </div>
          <div className="col col-about">
            <img src={WowMoment} alt="" />
            <h4>Artists</h4>
            <p>
              We work exclusively with well-known artists and and guarantee a
              valuable selection of artworks
            </p>
          </div>
        </div>
        <button className="about-btn">
          LEARN MORE ABOUT US AND OUR BELIEFS
          <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
        </button>
      </div>
    </div>
  );
}

export default About;
