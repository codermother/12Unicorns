import React, { useContext } from "react";
import "./GalleryTabs.css";
import SeeAll from "./SeeAll/SeeAll";
import { GalleryContext } from "../../../../Contexts/galleryContext";

function GalleryTabs() {
  const [activeGallery, setActiveGallery] = useContext(GalleryContext);

  const onChangeInput = () => {
    setActiveGallery(!activeGallery);
  };

  return (
    <div className="section ">
      <div className="justify-content-center gallery-tabs-container ">
        <div className="d-flex justify-content-between gallery-tabs-top">
          <p>All artworks will be available as limited edition NFT's.</p>
          <div className="form-check mt-3 gallery-tabs-check">
            <input
              checked={activeGallery}
              onChange={onChangeInput}
              className="form-check-input"
              type="checkbox"
              name="flexCheckboxDefault"
              id="flexCheckboxDefault1"
            />
            <label className="form-check-label m-0" htmlFor="flexRadioDefault1">
              SHOW MORE GALLERY DETAILS
            </label>
          </div>
        </div>

        <ul
          className="nav nav-pills gallery-tabs"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active gallery-tab-btn"
              id="pills-seeAll-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-seeAll"
              type="button"
              role="tab"
              aria-controls="pills-seeAll"
              aria-selected="true"
            >
              SEE ALL
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-streetArt-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-streetArt"
              type="button"
              role="tab"
              aria-controls="pills-streetArt"
              aria-selected="false"
            >
              STREET ART
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-fineArt-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-fineArt"
              type="button"
              role="tab"
              aria-controls="pills-fineArt"
              aria-selected="false"
            >
              FINE ART
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-mediaArt-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-mediaArt"
              type="button"
              role="tab"
              aria-controls="pills-mediaArt"
              aria-selected="false"
            >
              DIGITAL MEDIA ART
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-sculptures-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-sculptures"
              type="button"
              role="tab"
              aria-controls="pills-sculptures"
              aria-selected="false"
            >
              SCULPTURES
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-cryptoArt-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-cryptoArt"
              type="button"
              role="tab"
              aria-controls="pills-cryptoArt"
              aria-selected="false"
            >
              CRYPTO ART
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link gallery-tab-btn"
              id="pills-generatedArt-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-generatedArt"
              type="button"
              role="tab"
              aria-controls="pills-generatedArt"
              aria-selected="false"
            >
              GENERATED ART
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-seeAll"
            role="tabpanel"
            aria-labelledby="pills-seeAll-tab"
          >
            <SeeAll />
          </div>
          <div
            className="tab-pane fade"
            id="pills-streetArt"
            role="tabpanel"
            aria-labelledby="pills-streetArt-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-fineArt"
            role="tabpanel"
            aria-labelledby="pills-fineArt-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-mediaArt"
            role="tabpanel"
            aria-labelledby="pills-mediaArt-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-sculptures"
            role="tabpanel"
            aria-labelledby="pills-sculptures-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-cryptoArt"
            role="tabpanel"
            aria-labelledby="pills-cryptoArt-tab"
          >
            ...
          </div>
          <div
            className="tab-pane fade"
            id="pills-generatedArt"
            role="tabpanel"
            aria-labelledby="pills-generatedArt-tab"
          >
            ...
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryTabs;
