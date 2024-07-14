import React from "react";
import "./tarekDetails.css";
import person from "../../images/person1.webp";
const TarekDetails = () => {
  return (
    <>
      <div className="tarekDetails">
        <div className="container tarekContainer">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <img src={person} alt="Person" />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 infoAboutTarek">
              <h3>Tarek Mohamed</h3>
              <p>Founder & CEO</p>
              <ul className="social-media">
                <li>
                  <a href="#">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container skillsOfTarek">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3>Background</h3>
            <h5 className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Dignissimos, nam molestiae magni enim voluptate alias
              <br /> blanditiis quos assumenda unde sed error nobis facere{" "}
              <br /> tempore dolorem!
            </h5>
            <p className="mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sunt
              <br /> temporibus odio doloremque magnam pariatur, quod
              reprehenderit accusamus,
              <br /> sequi quisquam cum architecto, sint voluptates quis ipsa
              odit officiis quia est.
            </p>
            <p className="mt-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              sunt
              <br /> temporibus odio doloremque magnam pariatur, quod
              reprehenderit accusamus,
              <br /> sequi quisquam cum architecto, sint voluptates quis ipsa
              odit officiis quia est.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h3>Skills</h3>
            <ul className="skills">
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
              <li> Lorem ipsum dolor sit amet.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TarekDetails;
