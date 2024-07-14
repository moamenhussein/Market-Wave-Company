import React from "react";
import footerLogo from "../../images/logo.png";
import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <img
                  src={footerLogo}
                  alt="Footer Logo"
                  className="footerLogo"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h4>Company</h4>
                <ul className="infoLinks">
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to={"/team"}>Team</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Blog</Link>
                  </li>
                  <li>
                    <Link to={"/contact"}>Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h4>Follow Us</h4>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/moalfj?mibextid=ZbWKwL">
                      <i className="fa-brands fa-facebook facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/moamenhussein">
                      <i className="fa-brands fa-github github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/moamen-hussein-414ab1254/">
                      <i className="fa-brands fa-linkedin-in linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/moamenhussein1?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
                      <i className="fa-brands fa-instagram insta"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/qr/O7BJLZVEUXVYK1">
                      <i className="fa-brands fa-whatsapp whats"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <h4>Connect</h4>
                <p className="number">+01024327924</p>
                <p className="email">Email: moamenhussein2424@gmil.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footerTwo">
        &copy; Copyright 2024. All rights reserved | Made by{" "}
        <a href="https://moamenhussein.github.io/My-Portfolio-Website/">
          Moamen Hussein
        </a>
      </div>
    </>
  );
};

export default Footer;
