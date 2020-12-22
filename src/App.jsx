import React, { useState } from "react";
import image1 from "./assets/img/anastase-maragos-KFk20KWxgeo-unsplash.jpg";
import image2 from "./assets/img/anastase-maragos-Lrfuy93_hAc-unsplash.jpg";
import image3 from "./assets/img/brandon-paul-mlnQxJYNsxo-unsplash.jpg";
import image4 from "./assets/img/macau-photo-agency-WadUnk0Omww-unsplash.jpg";
import Modal from "react-bootstrap/Modal";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./App.css";

const data = [
  {
    name: "Luxury Car",
    description:
      "The 2014 Audi R8 V8 is powered by a 4.2-liter V8 mounted behind the passenger compartment that sends 430 horsepower and 317 pound-feet of torque through an AWD system.Equipped with either transmission, the Audi R8 V10 boasts a 5.2-liter V10 that produces 525 hp and 391 lb-ft of torque.",
    year: "2014",
    body: "Compartment",
    color: "Black-Red",
    topSpeed: "298kph",
  },
  {
    name: "Sport Car",
    description:
      "Known as the 2JZ-GTE, this formidable contender has been swapped into almost every make and model. This Toyota Supra engine is rated at 321 horsepower and 315 lb-ft of torque, but we sill dissect that a little later. This allowed the Toyota Supra top speed is 177 mph, but it was limited to 155 mph outside of Japan. ",
    year: "1997",
    body: "Compartment",
    color: "White",
    topSpeed: "309kph",
  },
  {
    name: "Classic Car",
    description:
      "The BMW M3 is a high-performance version of the BMW 3 Series, developed by BMW's in-house motorsport division, BMW M GmbH. M3 models have been produced for every generation of 3 Series since the E30 M3 was introduced in 1986.The initial model was available in a coupé body style, with a convertible body style added soon after. M3 Sedans were available during the E36 (1994–1999) and E90 (2008–2012) generations. Since 2014, the M3 has been solely produced in the sedan body style, due to the coupé and convertible models being rebranded as the 4 Series range, making the high-performance variant the M4.",
    year: "2001",
    body: "Sedan",
    color: "Brown",
    topSpeed: "250kph",
  },
  {
    name: "Old Refurbished Car",
    description:
      "The AE86 series of the Toyota Corolla Levin and Toyota Sprinter Trueno are small, front-engine/rear-drive models within the fifth generation Corolla range — marketed by Toyota from 1983 to 1987 in coupe and hatchback configurations. They were the last Corollas to offer rear-wheel drive.In classic Toyota code, the 'A' represents the engine that came in the car (4A series), 'E' represents the Corolla, '8' represents the fifth generation (E80 series) and '6' represents the variation within this generation. Toyota AE86 (Eight-Six, or Hachi-Roku) models are the most prominent type of car in the Initial D series, the most iconic of which is the Toyota Sprinter Trueno driven by Takumi Fujiwara and his father, Bunta.",
    year: "1986",
    body: "Cope",
    color: "White-Black",
    topSpeed: "249kph",
  },
];

const App = () => {
  const [selectedCar, setSelectedCar] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTime, setSelectedTime] = useState(0);

  const selectCar = (name) => {
    // console.log(name);
    setModalVisible(true);

    const car = data.find((currentCar) => currentCar.name === name);
    setSelectedCar(car);
    // console.log(car);
  };

  const changeTime = (direction) => {
    if (selectedTime === 0 && direction === -1) {
      return;
    } else if (selectedTime === 72 && direction === 1) {
      return;
    } else {
      setSelectedTime(selectedTime + direction);
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <div className="row">
          <div className="halfScreen">
            <img src={image1} alt="" className="fullImg" id="fullImg" />
            <div className="overlay">
              <h2 className="classCars">Luxury Cars</h2>
              <button
                className="btnCars"
                onClick={() => selectCar("Luxury Car")}
              >
                GO
              </button>
            </div>
          </div>
          <div className="halfScreen">
            <img src={image2} alt="" className="fullImg" id="fullImg" />
            <div className="overlay">
              <h2 className="classCars">Sport Cars</h2>
              <button
                className="btnCars"
                onClick={() => selectCar("Sport Car")}
              >
                GO
              </button>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="halfScreen">
            <img src={image3} alt="" className="fullImg" id="fullImg" />
            <div className="overlay">
              <h2 className="classCars">Classic Cars</h2>
              <button
                className="btnCars"
                onClick={() => selectCar("Classic Car")}
              >
                GO
              </button>
            </div>
          </div>
          <div className="halfScreen">
            <img src={image4} alt="" className="fullImg" id="fullImg" />
            <div className="overlay">
              <h2 className="classCars">Old Refurbished Cars</h2>
              <button
                className="btnCars"
                onClick={() => selectCar("Old Refurbished Car")}
              >
                GO
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modalVisible} size="lg">
        <div className="carData">
          <h3>{selectedCar.name}</h3>
          <p>{selectedCar.description}</p>
          <div className="row">
            <div>
              <ul>
                <li>Year: {selectedCar.year}</li>
                <li>Body: {selectedCar.body}</li>
                <li>Color: {selectedCar.color}</li>
                <li>TopSpeed: {selectedCar.topSpeed}</li>
              </ul>
            </div>
            <div className="timeRender">
              <button onClick={() => changeTime(-1)}>-</button>
              {` ${selectedTime} hours `}
              <button onClick={() => changeTime(1)}>+</button>
              <br/><br/>
              <button className="btnGo">Lets, Go!</button>
            </div>
          </div>
        </div>

        <button onClick={() => setModalVisible(false)}>CLOSE</button>
      </Modal>
      <Footer />
    </>
  );
};

export default App;
