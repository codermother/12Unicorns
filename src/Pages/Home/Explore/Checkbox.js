import React from "react";
import "./Checkbox.css";

function Checkbox() {
  return (
    <div className="d-flex row checkbox-row">
      <div className="form-check col d-flex ">
        <div className="form-check-wrapper">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />

          <label
            className="form-check-label explore-form-check "
            htmlFor="flexRadioDefault1"
          >
            VIDEOS
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            PICTURES
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            PLACES
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            REVIEWS
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            ARTICLES
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            LECTURES
          </label>
        </div>
      </div>
      <div className="form-check col d-flex">
        <div className="">
          <input
            className="form-check-input"
            type="checkbox"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label explore-form-check"
            htmlFor="flexRadioDefault1"
          >
            NEWS
          </label>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
