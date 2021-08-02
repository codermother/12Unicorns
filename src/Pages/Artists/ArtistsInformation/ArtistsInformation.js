import React from "react";
import "./ArtistsInformation.css";

function ArtistsInformation() {
  return (
    <div className="section">
      <div className="artists-information-container">
        <div className="row artists-information">
          <h1 className="font-heading">Federico Castelluccio</h1>
          <div className="col-5 artists-information-left">
            <h3 className="font-brandon-16">STREET ART ARTIST</h3>
            <p>
              I’am an internationally renowned realist painter, art collector
              and connoisseur of old master, baroque painting. I was born in
              Naples, Italy and moved to the US in 1968. From an early age it
              was evident that I had talent and an innate ability for drawing
              and painting and was determined to pursue a life in art.
            </p>
            <p>
              Painting came naturally to me at a young age, but I knew I wanted
              to perfect my skills. I chose a high school that was out of my
              district because of the incredible art program they had. At the
              time, it was called Passaic County Tech and Vocational High
              School. However, they didn't have a theatre program at the time,
              so my entire focus was on art. When I graduated High school, I
              received a full scholarship to the school of Visual Arts in New
              York City. It wasn't until my last year in college that I was
              inspired by a friend who invited me to watch one of his monologues
              that I knew I wanted to pursue acting. Acting has always been a
              passion, and when I saw my buddy transform into a different
              character, it motivated me to dive in headfirst into a class."
            </p>
          </div>

          <div className="col-6 artists-information-right">
            <h3 className="font-brandon-16">MOST RECENT EXHIBITIONS</h3>

            <div className="recent-exhibitions-top">
              <div className="d-flex">
                <span className="recent-exhibitions-date ">2018</span>
                <p className="recent-exhibitions">
                  Chetkin Gallery, Federico Castelluccio
                </p>
              </div>
              <div className="d-flex">
                <span className="recent-exhibitions-date ">2017</span>
                <p className="recent-exhibitions">
                  Eli and Edythe Broad Art Museum, East Lansing, MI, "The
                  Transported Man"
                </p>
              </div>
              <div className="d-flex">
                <span className="recent-exhibitions-date ">2017</span>
                <p className="recent-exhibitions">
                  Stanek Gallery, Nelson Shanks "Past, Present, Future" Group
                  Show
                </p>
              </div>
              <div className="d-flex">
                <span className="recent-exhibitions-date ">2016</span>
                <p className="recent-exhibitions">
                  Chetkin Gallery, Federico Castelluccio
                </p>
              </div>
            </div>
            {/*  <div className="">
              <div className="row recent-exhibitons-top">
                <div className="col-3 recent-exhibitions-date">
                  {" "}
                  2008 <br /> - <br /> 2013
                </div>
                <div className="col-9 recent-exhibitions">
                  <p>
                    California Institute of Technology, Computer Engineering
                  </p>
                  <p>BS, engineering, Technical University of Denmark</p>
                </div>
              </div>
              <div className="row recent-exhibitons-bottom">
                <div className="col-3 recent-exhibitions-date">
                  {" "}
                  2016 <br /> 2017 <br /> 2017 <br /> 2018
                </div>
                <div className="col-9 recent-exhibitions">
                  <p>Team Leader, Software Design and Development, Doom</p>
                  <p>Awwwards Site Of The Day</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="col-1 d-flex artists-information-socialIcons">
            <a href="/">
              <i class="fab fa-facebook-f artists-icon-facebook"></i>
            </a>
            <a href="/" className="artists-social">
              <i class="fab fa-instagram artists-icon"></i>
            </a>
            <a href="/" className="artists-social">
              <i class="fab fa-twitter artists-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistsInformation;
