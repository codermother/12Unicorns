import React from "react";
import "./NavbarTop.css";
import { useWindowScroll } from "react-use";

function NavbarTop() {
  const { y } = useWindowScroll(true);

  return (
    <div>
      <div className="navbar-top">
        <div className="bg-transparent">
          {y > 800 ? (
            <p className="navTop-text font-brandon-16 bg-transparent">
              WE TRUST IN THE ART OF TOMORROW
            </p>
          ) : null}
        </div>
        <div className="bg-transparent navbarTop-social">
          <a href="/" className="navbar-social-icon bg-transparent ">
            <i className="fab fa-facebook-f navbar-icon"></i>
          </a>
          <a href="/" className="navbar-social-icon bg-transparent">
            <i className="fab fa-instagram navbar-icon"></i>
          </a>
          <a href="/" className="navbar-social-icon bg-transparent">
            <i className="fab fa-twitter navbar-icon"></i>
          </a>
          <a
            href="/contact"
            className="navbar-social-icon bg-transparent"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fas fa-paper-plane navbar-icon"></i>
          </a>
        </div>

        {/* <!-- Modal --> */}
      </div>
    </div>
  );
}

export default NavbarTop;
