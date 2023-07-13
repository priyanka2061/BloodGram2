import React, { useState } from "react";
import Button from "./Button";
import "./Contact.css";
const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    pincode: "",
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const { firstName, lastName, password, pincode } = formData;

  return (
    <div className="contact" id="take">
      <h1>Check Your city</h1>
      <form className="contact-form">
        <div className="contact-inside">
          <input
            value={firstName}
            onChange={(e) => updateFormData(e)}
            placeholder="Name"
            type="text"
            name="firstName"
            required
          />
          <select className="contact-select">
            <option>Select Need Blood</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
            <option>O+</option>
            <option>O-</option>
          </select>
        </div>
        <div className="contact-inside">
          {/* <label>Mobile Number</label> */}
          <input
            value={password}
            onChange={(e) => updateFormData(e)}
            placeholder="Enter Your Number"
            type="phone"
            name="number"
            required
          />
          {/* <label>Area Pincode</label>
          <input
            value={pincode}
            onChange={(e) => updateFormData(e)}
            placeholder='Pincode'
            type='number'
            name='pincode'
            required
          /> */}
          {/* <label>City</label> */}
          <select className="contact-select">
            <option>Select the city</option>
            <option>Mumbai</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
            <option>Korba</option>
            <option>Delhi</option>
            <option>Banglore</option>
            <option>Vijayawada</option>
            <option>Other</option>
          </select>
        </div>
      </form>
      <div className="contact-submit"></div>
      <Button />
    </div>
  );
};
export default Form;
