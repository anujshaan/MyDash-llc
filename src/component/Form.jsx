import React, { useState } from "react";
import vaild from "../valid";
import { useNavigate } from "react-router-dom";

const Form = () => {
  let navigate = useNavigate();
  const initalState = {
    email: "",
    password: "",
    cf_password: "",
    fullname: "",
    phone: "",
  };
  const [userData, setUserData] = useState(initalState);
  const { email, password, cf_password, fullname, phone } = userData;
  const [err, setErr] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = vaild(userData);
    if (error.errLength > 0) {
      setErr({ ...error.errMsg });
    } else {
      navigate("/");
    }
  };
  return (
    <div className="container__right">
      <form onSubmit={handleSubmit}>
        <h2>Create an account</h2>
        <div className="container__input">
          <label htmlFor="email">Your email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <p>{err.email}</p>
        </div>
        <div className="container__input">
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <p>{err.password}</p>
        </div>
        <div className="container__input">
          <label htmlFor="cf_password">Confirm your password</label>
          <input
            type="password"
            id="cf_password"
            name="cf_password"
            value={cf_password}
            onChange={handleChange}
          />
          <p>{err.cf_password}</p>
        </div>
        <div className="container__input">
          <label htmlFor="fullname">Your full name</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={handleChange}
          />
          <p>{err.fullname}</p>
        </div>
        <div className="container__input">
          <label htmlFor="phone">Your phone number</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
          <p>{err.phone}</p>
        </div>
        <div className="container__terms">
          <input type="checkbox" required />
          <span>I read and agree Terms and Conditions</span>
        </div>
        <button type="submit" className="container__button">
          Create account
        </button>
      </form>
    </div>
  );
};

export default Form;
