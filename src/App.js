import React from "react";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Experts from "./Pages/Experts/Experts";
import Gallery from "./Pages/Gallery/Gallery";
import Artists from "./Pages/Artists/Artists";
import Lectures from "./Pages/Lectures/Lectures";
import Login from "./Pages/Login/Login";
import { GalleryProvider } from "./Contexts/galleryContext";
import { BuyArtworkProvider } from "./Contexts/buyArtworkContext";
import { ArtistsProvider } from "./Contexts/artistsContext";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/experts">
            <Experts />
          </Route>
          <Route path="/gallery">
            <GalleryProvider>
              <BuyArtworkProvider>
                <Gallery />
              </BuyArtworkProvider>
            </GalleryProvider>
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/lectures">
            <Lectures />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
