import React, { useContext } from "react";
import "./GalleryExperts.css";
import ExpertBetty from "../../../Photos/ExpertBetty.png";
import { GalleryContext } from "../../../Contexts/galleryContext";

function GalleryExpert() {
  const [activeGallery, setActiveGallery] = useContext(GalleryContext);

  return (
    <div className="section">
      <div className="gallery-experts-container ">
        {activeGallery ? (
          ""
        ) : (
          <div className="gallery-heading text-center font-heading">
            Explore Our Exhibition
          </div>
        )}

        <div className="bg-transparent gallery-experts-top d-flex justify-content-between">
          <div className="gallery-experts bg-transparent p-0 d-flex">
            <img src={ExpertBetty} alt="" />
            <div className=" bg-transparent gallery-experts-info ">
              <h6>POP ART EXPERT</h6>
              <h5>Betty Winters</h5>
            </div>
          </div>
          <div className=" gallery-experts bg-transparent p-0 d-flex">
            <img src={ExpertBetty} alt="" />
            <div className=" bg-transparent align-content-center gallery-experts-info ">
              <h6>POP ART EXPERT</h6>
              <h5>Betty Winters</h5>
            </div>
          </div>
          <div className="gallery-experts bg-transparent p-0 d-flex">
            <img src={ExpertBetty} alt="" />
            <div className=" bg-transparent align-content-center gallery-experts-info ">
              <h6>POP ART EXPERT</h6>
              <h5>Betty Winters</h5>
            </div>
          </div>
          <div className="gallery-experts bg-transparent p-0 d-flex">
            <img src={ExpertBetty} alt="" />
            <div className=" bg-transparent align-content-center gallery-experts-info ">
              <h6>POP ART EXPERT</h6>
              <h5>Betty Winters</h5>
            </div>
          </div>
          <div className=" gallery-experts bg-transparent p-0 d-flex">
            <img src={ExpertBetty} alt="" />
            <div className=" bg-transparent align-content-center gallery-experts-info ">
              <h6>POP ART EXPERT</h6>
              <h5>Betty Winters</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryExpert;
