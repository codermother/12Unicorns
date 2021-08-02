import React from "react";
import { Link } from "react-router-dom";
import Expert from "../../../../../../../Photos/MariaAbramova.png";
import "./SlideExpertReview.css";

function SlideExpertReview() {
  return (
    <div className="artworkModal-slider">
      <h6 className="font-brandon-16">ART EXPERT REVIEW</h6>
      <h2 className="new-spirit-32">What the experts saying</h2>
      <div className="row artworkModal-expertsComment">
        <div className="col-4 artworkModal-experts-left bg-transparent">
          <img src={Expert} alt="" />
        </div>
        <div className="col-8 bg-transparent artworkModal-experts-right">
          <span className="quotes-left font-heading ">“</span>
          <p className="bg-transparent">
            There are painters who transform the sun to a yellow spot, but there
            are others who with the help of their art and their intelligence,
            transform a yellow spot into the sun.There are painters who
            transform the sun to a yellow spot, but there are others who with
            the help of their art and their intelligence, transform a yellow
            spot into the sun.{" "}
            <span className="quotes-right font-heading">”</span>
          </p>
          <h2 className="bg-transparent new-spirit-32">Maya Summer</h2>
          <h6 className="bg-transparent font-brandon-16">STREET ART EXPERT</h6>
        </div>
      </div>

      <div className="row artworkModal-bottom p-0">
        <div className="col d-flex p-0">
          <p className="artworkModal-bottomBox"> </p>
          <p className="font-brandon-17 artworkModal-bottomComments">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and{" "}
          </p>
        </div>
        <div className="col d-flex p-0">
          <p className="artworkModal-bottomBox"> </p>
          <p className="font-brandon-17 artworkModal-bottomComments">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and{" "}
          </p>
        </div>
      </div>
      <div className="row artworkModal-bottom p-0">
        <div className="col d-flex p-0">
          <p className="artworkModal-bottomBox"> </p>
          <p className="font-brandon-17 artworkModal-bottomComments">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and{" "}
          </p>
        </div>
        <div className="col d-flex p-0 pb-3">
          <p className="artworkModal-bottomBox"> </p>
          <p className="font-brandon-17 artworkModal-bottomComments">
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlideExpertReview;
