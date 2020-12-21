import React from "react";
import { Component } from "react";
import image1 from "./assets/img/anastase-maragos-KFk20KWxgeo-unsplash.jpg";
import image2 from "./assets/img/anastase-maragos-Lrfuy93_hAc-unsplash.jpg";
import image3 from "./assets/img/brandon-paul-mlnQxJYNsxo-unsplash.jpg";
import image4 from "./assets/img/macau-photo-agency-WadUnk0Omww-unsplash.jpg";

import Navigation from "./components/Navigation";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div>
          <div className="row">
            <div className="halfScreen">
              <img src={image1} alt="" className="fullImg" id="fullImg"/>
              <h2 className="classCars">Luxury Cars</h2>
            </div>
            <div className="halfScreen">
              <img src={image2} alt="" className="fullImg" id="fullImg"/>
              <h2 className="classCars">Luxury Cars</h2>
            </div>
          </div>
          <div className="row ">
            <div className="halfScreen">
              <img src={image3} alt="" className="fullImg" id="fullImg"/>
              <h2 className="classCars">Luxury Cars</h2>
            </div>
            <div className="halfScreen">
              <img src={image4} alt="" className="fullImg" id="fullImg"/>
              <h2 className="classCars">Luxury Cars</h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
