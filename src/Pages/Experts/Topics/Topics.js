import React from "react";
import "./Topics.css";

function Topics() {
  return (
    <div className="section">
      <div className="topics-container">
        <div className="row text-center mx-auto">
          <div className="col font-brandon-20wide topics-columns ">
            TOPIC XY
          </div>
          <div className="col font-brandon-20wide topics-columns">TOPIC XY</div>
          <div className="col font-brandon-20wide  border-0 topics-columns">
            TOPIC XY
          </div>
        </div>
        <p className="font-brandon-25 text-center">
          Teachings of the great explorer of the truth, the master-builder of
          human happiness. No one rejects, dislikes, or avoids pleasure itself,
          because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself.
        </p>
      </div>
    </div>
  );
}

export default Topics;
