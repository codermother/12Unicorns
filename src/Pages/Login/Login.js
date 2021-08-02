import React, { useState } from "react";
import SignUp from "./SignUp/SignUp";
import logo from "../../Photos/logo.png";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    await fetch("http://auth.dunkelheit.net/api/users/signin", {
      method: "POST",
      credentials: "include",
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
  };

  return (
    <div className="section loginPage-section ">
      <div className="loginPage-container ">
        <Link to="/" className="login-header d-flex mx-auto">
          <img src={logo} alt="logo" />
          <h1 className="font-heading">12UNICORNS</h1>
        </Link>
        <div className="loginPage-form mx-auto">
          <form onSubmit={submit} className="mx-auto">
            <div className="form-group signUp-form-group">
              <label className="font-brandon-17" htmlFor="email">
                EMAIL ADDRESS
              </label>

              <input
                type="email"
                placeholder="Enter Email"
                className="form-control"
                id="email1"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group signUp-form-group ">
              <label className="font-brandon-17" htmlFor="password">
                SET PASSWORD
              </label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="login-btn mx-auto">
              {" "}
              Login{" "}
            </button>
          </form>
          <div className="d-flex flex-column login-bottom">
            <Link to="/" className="login-forget font-brandon-17 " href="/">
              {" "}
              Did you forget your password?
            </Link>
            <div className="d-flex font-brandon-17 ">
              <p>Don't have an account?</p>{" "}
              <Link
                to="/"
                className="signUp-btn "
                data-bs-toggle="modal"
                data-bs-target="#signUp"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SignUp />
    </div>
  );
}

export default Login;
