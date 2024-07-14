import React from "react";
import "./clients.css";
import clientOne from "../../images/client1.webp";
import clientTwo from "../../images/client2.webp";
import clientThree from "../../images/client3.webp";
import clientFour from "../../images/client4.webp";
import clientFive from "../../images/client5.webp";
import clientSix from "../../images/client6.webp";
const Clients = () => {
  return (
    <div className="clients">
      <div className="container">
        <h3>Among our clients</h3>
        <div className="container text-center">
          <div className="row images">
            <div className="col-lg-2 col-md-6 col-sm-12">
              <img src={clientOne} alt="Client One"/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={clientTwo} alt="Client Two"/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={clientThree} alt="Client Three"/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={clientFour} alt="Client Four"/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={clientFive} alt="Client Five"/>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={clientSix} alt="Client Six"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
