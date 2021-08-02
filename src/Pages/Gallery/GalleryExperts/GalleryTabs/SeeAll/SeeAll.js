import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./SeeAll.css";
import ApprovedArtists from "../../../../../Photos/ApprovedArtists.png";
import approved from "../../../../../Photos/approved.png";
import SeeAll3 from "../../../../../Photos/StreetArtToken.png";
import { GalleryContext } from "../../../../../Contexts/galleryContext";
import Astronaut from "../../../../../Photos/Explore8.png";
import ArtworkModal from "../SeeAll/AstronautModal/ArtworkModal";

function SeeAll() {
  const [activeGallery, setActiveGallery] = useContext(GalleryContext);

  return (
    <div className="section">
      <div className=" container p-0 gallery-tab-container">
        <div className="row justify-content-between">
          <div className="col-3 gallery-tab-1">
            <p></p>
            <h3 className="new-spirit-32">The NFT age</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}

            <img src={ApprovedArtists} alt="" />
          </div>
          <div className="col-5 gallery-tab-2">
            <p></p>
            <h3 className="new-spirit-32">Fine Art Collection</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-4 gallery-tab-3">
            <img src={SeeAll3} alt="" />
            <h3 className="new-spirit-32">Street Art Tokenized</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-7 gallery-tab-4">
            <p className="photo"></p>
            <div className="gallery-tab-4-content">
              <h3 className="new-spirit-32">Limited Collection</h3>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pay pain was born and I will
                give you a complete account of the system, and expound the
                actual teachings of the great{" "}
              </p>
              {activeGallery ? (
                <div className="gallery-tab-more-details">
                  <h6>STREET ART ARTIST</h6>
                  <div className="d-flex justify-content-between gallery-date">
                    <p>
                      <i className="far fa-calendar-alt"></i> 15 Jan 2021
                    </p>
                    <Link
                      to="/"
                      className="gallery-tab-moreInfo font-brandon-16"
                    >
                      SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="col-5 gallery-tab-5">
            <a
              href="#artworkModal"
              data-bs-toggle="modal"
              data-bs-target="#artworkModal"
            >
              <img className="gallery-tab-5-img" src={Astronaut} alt="" />
            </a>
            <h3 className="new-spirit-32">Limited Artwork NFT's</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <ArtworkModal />
        <div className="row justify-content-between">
          <div className="col-4 gallery-tab-6">
            <img src={SeeAll3} alt="" />
            <h3 className="new-spirit-32">Street Art Tokenized</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-5 gallery-tab-2">
            <p></p>
            <h3 className="new-spirit-32">Fine Art Collection</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="col-3 gallery-tab-8">
            <p></p>
            <img src={approved} alt="" />
            <h3 className="new-spirit-32">Unique NFT's</h3>
            {activeGallery ? (
              <div className="gallery-tab-more-details">
                <h6>STREET ART ARTIST</h6>
                <div className="d-flex justify-content-between gallery-date">
                  <p>
                    <i className="far fa-calendar-alt"></i> 15 Jan 2021
                  </p>
                  <Link to="/" className="gallery-tab-moreInfo font-brandon-16">
                    SHOW MORE <i className="fas fa-long-arrow-alt-right"></i>
                  </Link>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeeAll;
