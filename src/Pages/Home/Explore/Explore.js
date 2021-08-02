import React from "react";
import Crypto from "./Crypto/Crypto";
import FreeSpirited from "./FreeSpirited/FreeSpirited";
import "./Explore.css";

function Explore() {
  return (
    <div className="section ">
      <div className="text-center explore-container ">
        <h1 className="font-heading">Explore The 12Unicorn Universum</h1>
        <p className="font-brandon-25">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo natus
          minima pariatur exercitationem eum odit provident iste ex,
          voluptatibus mollitia sunt debitiserspiciatis officiis iusto dicta!
          Unde, voluptas repudiandae.
        </p>
        <h2>What kind of Art exists you the most?</h2>

        <ul
          className="nav nav-pills row nav-explore"
          id="pills-tab"
          role="tablist"
        >
          <li
            className="nav-item col-xl-4 nav-item-explore"
            role="presentation"
          >
            <button
              className="nav-link "
              id="pills-crypto-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-crypto"
              type="button"
              role="tab"
              aria-controls="pills-crypto"
              aria-selected="true"
            >
              I'M A CRYPTO ENTHUSIAST
            </button>
          </li>

          <li className="nav-item p-0 col-xl-4" role="presentation">
            <button
              className="nav-link"
              id="pills-freeSpirited-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-freeSpirited"
              type="button"
              role="tab"
              aria-controls="pills-freeSpirited"
              aria-selected="false"
            >
              I'M A FREE SPIRITED ART BUYER
            </button>
          </li>

          <li className="nav-item col-xl-4" role="presentation">
            <button
              className="nav-link"
              id="pills-traditionals-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-traditionals"
              type="button"
              role="tab"
              aria-controls="pills-traditionals"
              aria-selected="false"
            >
              I'M A TRADITIONALS ART BUYER
            </button>
          </li>
        </ul>

        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-crypto"
            role="tabpanel"
            aria-labelledby="pills-crypto-tab"
          >
            <Crypto />
          </div>

          <div
            className="tab-pane fade"
            id="pills-freeSpirited"
            role="tab"
            aria-labelledby="pills-freeSpirited-tab"
          >
            <FreeSpirited />
          </div>
          <div
            className="tab-pane fade"
            id="pills-traditionals"
            role="tabpanel"
            aria-labelledby="pills-traditionals"
          >
            ...
          </div>
        </div>
        <button className="explore-btn">
          SHOW MORE
          <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
        </button>
      </div>
    </div>
  );
}

export default Explore;
