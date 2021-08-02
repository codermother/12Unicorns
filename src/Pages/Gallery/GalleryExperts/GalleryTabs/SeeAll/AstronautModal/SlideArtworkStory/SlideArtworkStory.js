import React from "react";
import { Link } from "react-router-dom";
import "./SlideArtworkStory.css";
import Artist from "../../../../../../../Photos/Artists/Artists-medium.png";
import Rectangle from "../../../../../../../Photos/Rectangle96.png";

function SlideArtworkStory() {
  return (
    <div className="artworkModal-slider" id="buyArtwork">
      <h6 className="font-brandon-16 ">STREET ART ARTIST</h6>
      <h2 className="font-heading artworkStory-heading">Frauke Summer</h2>
      <div className="row artworkStory-body ">
        <div className="col-6 artwork-story-left m-0">
          <img src={Artist} alt="" />
          <div className="d-flex artwork-story-left-bottom">
            <img className="rectangle96" src={Rectangle} alt="" />
            <p className="font-brandon-17 artwork-story-text">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the{" "}
            </p>
          </div>
          <div className="d-flex artwork-story-left-bottom">
            <img className="rectangle96" src={Rectangle} alt="" />
            <p className="font-brandon-17 artwork-story-text">
              I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the{" "}
            </p>
          </div>
        </div>
        <div className="col-6 artwork-story-right">
          <h3 className="new-spirit-32">The story behind my Art Colection</h3>
          <div className="artwork-story-headerLine"></div>
          <p className="font-brandon-17">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness.
            <br />
            <br />
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself. <br /> <br />
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are.extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself. I must explain to you how all this mistaken idea of
            denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. <br /> <br />
            No one rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SlideArtworkStory;
