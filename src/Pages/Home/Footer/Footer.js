import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="section footer-section">
      <div className="footer-container">
        <div className="row footer">
          <div className="col-xl-2 col-md-2 footer-col">
            <Link to="/" className="font-brandon-16 text-light footer-heading">
              WHAT WE BELIEVE IN
            </Link>

            <div className="d-flex flex-column footer-items tk-brandon-grotesque mt-2">
              <Link to="/" className="footer-items ">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 footer-col">
            <Link
              to="/artists"
              className="font-brandon-16 text-light footer-heading"
            >
              OUR ARTISTS
            </Link>
            <div className="d-flex flex-column footer-items tk-brandon-grotesque mt-2">
              <Link to="/" className="footer-items ">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 footer-col">
            <Link
              to="/experts"
              className="font-brandon-16 text-light footer-heading"
            >
              OUR EXPERTS
            </Link>
            <div className="d-flex flex-column footer-items tk-brandon-grotesque mt-2">
              <Link to="/" className="footer-items ">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 footer-col">
            <Link to="/" className="font-brandon-16 text-light footer-heading">
              BUY ART
            </Link>
            <div className="d-flex flex-column footer-items tk-brandon-grotesque mt-2">
              <Link to="/" className="footer-items ">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 footer-col">
            <Link
              to="/lectures"
              className="font-brandon-16 text-light footer-heading"
            >
              NFT-LECTURES
            </Link>
            <div className="d-flex flex-column footer-items tk-brandon-grotesque mt-2">
              <Link to="/" className="footer-items ">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
              <Link to="/" className="footer-items">
                Lorem Ipsum
              </Link>
            </div>
          </div>

          <div className="col-xl-2 col-md-2 footer-col">
            <Link to="/" className="font-brandon-16 text-light footer-heading">
              CONTACT
            </Link>
            <div className="d-flex flex-column footer-contact tk-brandon-grotesque mt-2 ">
              <p>
                <i className="fas fa-map-marker-alt footer-icon"></i>New York
                Street 12 393030 - New York
              </p>
              <p>
                <i className="fas fa-envelope footer-icon"></i>
                Contact@12unicorns.com
              </p>
              <p>
                <i className="fas fa-phone footer-icon"></i>Call us
                <br />
                +49 30/ 556 67 77
                <br />
                Mo.-Fr.: 10:00-14:00
              </p>
            </div>
          </div>
          <div className="d-flex footer-social ">
            <p className="footer-contact tk-brandon-grotesque pt-3 ">
              Follow us
            </p>
            <a href="/" className="footer-social">
              <i className="fab fa-facebook-f footer-social-icon"></i>
            </a>
            <a href="/" className="footer-social">
              <i className="fab fa-instagram footer-social-icon"></i>
            </a>
            <a href="/" className="footer-social ">
              <i className="fab fa-twitter footer-social-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
