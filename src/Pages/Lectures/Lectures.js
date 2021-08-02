import React from "react";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import { Link } from "react-router-dom";
import "./Lectures.css";

function Lectures() {
  return (
    <div className="section">
      <Navbar />
      <div className="lectures-container">
        <div className="row">
          <div className="col-6">
            <div className="lectures-empty">
              <p></p>
            </div>
          </div>
          <div className="col-6 lectures-information">
            <h6>CONTEMPORARY ARTIST</h6>
            <h2>Fine art of the blockchain age</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pay pain was born and I will give you a
              complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but
            </p>
            <p className="lectures-date">
              <i className="far fa-calendar-alt"></i> 16 Jan - 23 Jan 2021
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 lectures-information">
            <h6>STREET ART ARTIST</h6>
            <h2>NFT explained</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pay pain was born and I will give you a
              complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but
            </p>
            <Link to="/" className="readMore">
              READ MORE <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <div className="col-6">
            <div className="lectures-empty">
              <p></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="lectures-empty">
              <p></p>
            </div>
          </div>
          <div className="col-6 lectures-information">
            <h6>CONTEMPORARY ARTIST</h6>
            <h2>NFT explained</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pay pain was born and I will give you a
              complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but
            </p>
            <Link to="/" className="readMore">
              READ MORE <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
            <p className="lectures-date">
              <i className="far fa-calendar-alt"></i> 16 Jan - 23 Jan 2021
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-6 lectures-information">
            <h6>STREET ART ARTIST</h6>
            <h2>NFT explained</h2>
            <p>
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pay pain was born and I will give you a
              complete account of the system, and expound the actual teachings
              of the great explorer of the truth, the master-builder of human
              happiness. No one rejects, dislikes, or avoids pleasure itself,
              because it is pleasure, but
            </p>
            <Link to="/" className="readMore">
              READ MORE <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
            <p className="lectures-date">
              <i className="far fa-calendar-alt"></i> 15 Jan 2021
            </p>
          </div>
          <div className="col-6">
            <div className="lectures-empty">
              <p></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Lectures;
