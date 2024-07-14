import React from "react";
import "./contact.css";
import ContactUs from "./ContactUs";
import Form from "./Form";
import Banner from "../../Components/Banner/Banner";
const Contact = () => {
  return (
    <div className="contact">
      <Banner heading="Contact" paragraph="Questions? Let's talk!" />
      <ContactUs />
      <Form />
    </div>
  );
};

export default Contact;
