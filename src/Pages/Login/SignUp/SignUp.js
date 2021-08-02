import React, { useState } from "react";
import "./SignUp.css";
import { Redirect } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  /*   const [show, setShow] = useState(false);

  const handleClose = () => setShow(false); */

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://auth.dunkelheit.net/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="section">
      <div
        className="modal fade signUp-modal"
        /*     show={show}
        onHide={handleClose} */
        id="signUp"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="signUpLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg signUp-modal-container">
          <div className="modal-content signUp-modal-content">
            <div className="modal-body p-0 signUp-modal">
              <button
                type="button"
                className="btn-close signUp-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div className="modal-form-title new-spirit-32 ">
                <h4>Create an account for collecting your favourites</h4>
              </div>

              <div className="d-flex signUp-modal-body justify-contents-between">
                <div className="col signUp-modal-form">
                  <div className="d-flex flex-column">
                    <form onSubmit={submit}>
                      <div
                        className="form-group 
                      signUp-form-group"
                      >
                        <label for="email">EMAIL ADDRESS</label>

                        <input
                          type="email"
                          className="form-control"
                          id="email1"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="form-group signUp-form-group ">
                        <label for="password">SET PASSWORD</label>
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="form-check signUp-formCheck">
                        <input
                          className="form-check-input signUp-check"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label
                          className="form-check-label"
                          for="flexCheckDefault"
                        >
                          I agree to the terms of services
                        </label>
                      </div>
                      <button type="submit" className="signUp-modal-button">
                        SIGN UP
                        <i className="fas fa-long-arrow-alt-right slider-arrow"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
