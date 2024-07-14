import React from "react";

const ContactUs = () => {
  return (
    <div className="contactUs">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <i className="fa-solid fa-envelope"></i>
            <h6>Mail</h6>
            <p>moamenhussein2424@gmail.com</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box">
            <i className="fa-solid fa-location-dot"></i>
            <h6>Location</h6>
            <p>Cairo, Egypt</p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 box">
            <i className="fa-solid fa-phone"></i>
            <h6>Call us</h6>
            <p>+01024327924</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
