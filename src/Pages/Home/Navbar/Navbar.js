import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Photos/logo.png";
import "./Navbar.css";
import NavbarTop from "./NavbarTop/NavbarTop";
import { useWindowScroll } from "react-use";

function Navbar() {
  const [open, setOpen] = useState(true);
  const { y } = useWindowScroll(true);

  const xOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="navbar-section ">
        <NavbarTop />
        <nav className="navbar p-0 navbar-expand-lg navbar-bottom">
          <Link to="/" className="navbar-brand d-flex p-0 ">
            <img src={logo} alt="logo" />
            <p>12UNICORNS </p>
          </Link>
          {!open && (
            <div className="bg-transparent navbar-btn-wrapper">
              {y > 800 ? (
                <button className="navbar-btn">
                  BUY ART{" "}
                  <i className="fas fa-long-arrow-alt-right navbar-arrow"></i>
                </button>
              ) : null}
            </div>
          )}
          <button
            className="navbar-toggler justify-content-end"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon ">
              <i className="fas fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <div className="nav-item active d-flex ">
              {open && (
                <div className="nav-wrapper active d-flex ">
                  <Link to="/" className="nav-link">
                    WHAT WE BELIEVE IN
                  </Link>
                  <Link to="/artists" className="nav-link ">
                    ARTISTS
                  </Link>
                  <Link to="/experts" className="nav-link ">
                    OUR EXPERTS
                  </Link>
                  <Link to="/gallery" className="nav-link ">
                    GALLERY
                  </Link>
                  <Link to="/lectures" className="nav-link ">
                    NFT-LECTURES
                  </Link>
                  <Link to="/" className="nav-link ">
                    OUR MANIFEST
                  </Link>
                  <Link to="/logIn" className="nav-link ">
                    LOGIN
                    <i className="fas fa-sign-in-alt"></i>
                  </Link>
                </div>
              )}
            </div>
            <div className="navbar-menu-icons">
              <input type="checkbox" id="toggle" className="d-none" />
              <label
                className="navbar-toggle"
                htmlFor="toggle"
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>
        </nav>
      </div>
      <div
        className="modal fade navbar-modal"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg navbar-modal-container">
          <div className="modal-content navbar-modal-content">
            <div className="modal-body p-0 navbar-modal-body">
              <button
                type="button"
                className="btn-close navbar-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-form-title new-spirit-32 ">
                <h4>Any Questions?</h4>
              </div>

              <div className="d-flex navbar-modal-body justify-contents-between">
                <div className="col navbar-modal-left">
                  <div className="d-flex flex-column">
                    <form>
                      <div className="form-group navbar-form-group">
                        <label htmlFor="usr">NAME</label>
                        <input type="text" className="form-control" id="usr" />
                      </div>
                      <div className="form-group navbar-form-group">
                        <label htmlFor="email">EMAIL ADDRESS</label>

                        <input
                          type="email"
                          className="form-control"
                          id="email1"
                        />
                      </div>
                      <div className="form-group navbar-form-group">
                        <label htmlFor="comment">YOUR MESSAGE</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          id="comment"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col navbar-modal-right">
                  <p className=" navbar-modal-message">
                    SEND US A MESSAGE -
                    <br /> We will come back to you within 24 hours.
                  </p>
                  <div className="d-flex navbar-modal-text">
                    <i className="fas fa-map-marker-alt navbar-modal-contact large"></i>{" "}
                    <p>New York Street 12 393030 - New York</p>
                  </div>

                  <div className="d-flex navbar-modal-text">
                    {" "}
                    <i className="fas fa-phone navbar-modal-contact"></i>
                    <p>
                      Call us +49 30/ 556 67 77
                      <br />
                      Mo.-Fr.: 10:00-14:00
                    </p>
                  </div>

                  <div className="d-flex navbar-modal-text">
                    <i className="fas fa-comment-alt navbar-modal-contact small"></i>
                    <p> Chat with Expert now.</p>
                  </div>
                </div>
              </div>
              <button type="button" className="navbar-modal-button">
                SEND{" "}
                <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
