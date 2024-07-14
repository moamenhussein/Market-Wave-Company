import React from "react";

const Form = () => {
  return (
    <div className="form">
      <div className="information">
        <h4>Drop us a line</h4>
        <p>Let's talk about business!</p>
      </div>
      <form>
        <input type="text" placeholder="Name" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <textarea placeholder="Message"></textarea>
      </form>
    </div>
  );
};

export default Form;
