import React from "react";
import Form from "../component/Form";
import logo from "../assets/image.png";

const Register = () => {
  return (
    <div className="container">
      <div className="container__left">
        <img src={logo} alt="" className="container__image" />
        <div className="container__detail">
          <h2>Choose a date range</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            qui tempo
          </p>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default Register;
