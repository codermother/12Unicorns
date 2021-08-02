import React from "react";
import "./ArtistsExpertComment.css";
import ExpertPhoto from "../../../Photos/MariaAbramova.png";

function ArtistsExpertComment() {
  return (
    <div className="section">
      <div className="experts-comment-container">
        <div className="row bg-transparent">
          <div className="col-4  bg-transparent experts-comment-left">
            <img src={ExpertPhoto} alt="" />
          </div>
          <div className="col-8 bg-transparent experts-comment-right">
            <span className="quotes-left font-heading ">“</span>
            <p className="new-spirit-25">
              Federico prepares his canvases meticulously and hones their
              surfaces with outmost care and dedication so that they can then
              re- ceive the richness of color arranged precisely and obtained
              from spiration stems from famous artworks that he paints with
              unparalle- complex, sophisticated palettes full of warm hues.
              <span className="quotes-right font-heading">”</span>
            </p>

            <h5 className="new-spirit-32">Maya Summer</h5>
            <h6>STREET ART EXPERT</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistsExpertComment;
