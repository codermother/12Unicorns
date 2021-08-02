import React from "react";
import "./MyArtworks.css";
import StreetArtToken from "../../../Photos/StreetArtToken.png";
import ArtistsSmall from "../../../Photos/Artists/Artists-small.png";
import Federico from "../../../Photos/Artists/Federico/Federico-Artist.jpg";
import FedericoArtwork1 from "../../../Photos/Artists/Federico/FedericoArtwork1.jpg";

function MyArtworks() {
  return (
    <div className="section">
      <div className="myArtworks-heading">
        <span className="font-heading" id="showArtworks">
          My Artworks
        </span>
        <div className="heading-line "></div>
      </div>
      <div className="justify-content-center myartWorks-container">
        <div className="row">
          <div className="col-5 myArtworks-left">
            <img src={FedericoArtwork1} alt="" />
          </div>
          <div className=" col-7 myArtworks-right">
            <h3>LIMITED EDITION ART PIECE</h3>
            <h2 className="new-spirit-32">Artwork Piece Tokenized</h2>

            <h6>DESCRIPTION</h6>
            <p>
              Classical Artwork with NFT-Token <br /> “Myself as Luke” 2011{" "}
              <br /> By: Federico Castelluccio <br /> Oil on canvas <br /> 42″ x
              54″​ <br /> <br /> “Myself as Luke” has a unique and elegant
              artistic language that finds its roots in the pages of art history
              and comes alive through the warm and plastic images that reveal
              Federico's innate knowledge of the painting techniques of the Old
              Masters.
            </p>

            <div className="d-flex myArtworks-artist">
              <img src={Federico} alt="" />
              <div className="myArtworks-artistInformation">
                <h6>STREET ART ARTIST: FEDERICO CASTELLUCCIO</h6>

                <i class="far fa-calendar-alt"> 15 Jan 2021</i>
              </div>
            </div>
            <h6>PRICE</h6>
            <p className="myArtworks-price"> 3.540,00 € / 11 ETH</p>
            <button className="artists-btn">
              BUY ARTWORK
              <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyArtworks;
