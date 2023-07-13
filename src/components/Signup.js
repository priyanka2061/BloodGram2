import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import { AiOutlineMail, AiFillPhone } from "react-icons/ai";
import { RiLockPasswordFill } from "react-icons/ri";
import Navbar from "./Navbar";
export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    blood: "",
    gender: "",
    age: "",
    weight: "",
    donationdate: "",
    alert: "",
    pincode: "",
    state: "",
    district: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phone,
      password,
      Blood,
      gender,
      age,
      weight,
      smsAlert,
      zipcode,
      state,
      district,
    } = user;
    const res = await fetch("http://localhost:3004/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        Blood,
        gender,
        age,
        weight,
        smsAlert,
        zipcode,
        state,
        district,
      }),
    });
    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/login");
    }
  };
  return (
    <div className="signup">
      <Navbar />

      <form method="POST">
        <div className="outer-div">
          <div className="login-info">
            <div className="nameic">
              <HiUser className="icons" />
              <input
                type="text"
                name="name"
                placeholder=" fullName "
                value={user.name}
                onChange={handleInputs}
              />
            </div>

            <div className="nameic">
              <AiOutlineMail className="icons" />
              <input
                type="email"
                name="email"
                placeholder="  valid email id"
                value={user.email}
                onChange={handleInputs}
              />
            </div>

            <div className="nameic">
              <AiFillPhone className="icons" />
              <input
                type="number"
                name="phone"
                placeholder="  Mobile No."
                value={user.phone}
                onChange={handleInputs}
              />
            </div>

            <div className="nameic">
              <RiLockPasswordFill className="icons" />
              <input
                type="text"
                name=" password"
                placeholder="  Create Password"
                value={user.password}
                onChange={handleInputs}
              />
            </div>
          </div>
          <div className="donor-info">
            <label>
              <select value={user.blood} name="blood" onChange={handleInputs}>
                <option>Blood-Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </label>
            <label>
              <select value={user.gender} name="gender" onChange={handleInputs}>
                <option>Gender</option>
                <option>male</option>
                <option>female</option>
                <option>others</option>
              </select>
            </label>
            <label>
              <input
                type="number"
                placeholder=" Age"
                className="start"
                value={user.age}
                name="age"
                onChange={handleInputs}
              ></input>
            </label>
            <label>
              <input
                type="number"
                placeholder=" Weight:/kg"
                className="start"
                value={user.weight}
                name="weight"
                onChange={handleInputs}
              />
            </label>
            <label>
              Last Date Donation(optional)
              <input
                type="date"
                className="start"
                value={user.donationdate}
                name="donationdate"
                onChange={handleInputs}
              />
            </label>
          </div>
        </div>
        <h1>
          Contact information:
          <hr />
        </h1>
        <div className="contact-info">
          <label>
            SMS ALERT ON YOUR PHONE <span>*</span>
            <select value={user.alert} onChange={handleInputs} name="alert">
              <option>YES</option>
              <option>NO</option>
            </select>
          </label>
          <label>
            <input
              type="number"
              placeholder="  Postal code / Zip Code"
              className="start"
              value={user.pincode}
              onChange={handleInputs}
              name="pincode"
            ></input>
          </label>
          <label>
            <select value={user.state} onChange={handleInputs} name="state">
              <option value="ST"> Select State</option>
              <option value="AN">Andaman and Nicobar Islands</option>
              <option value="AP">Andhra Pradesh</option>
              <option value="AR">Arunachal Pradesh</option>
              <option value="AS">Assam</option>
              <option value="BR">Bihar</option>
              <option value="CH">Chandigarh</option>
              <option value="CT">Chhattisgarh</option>
              <option value="DN">Dadra and Nagar Haveli</option>
              <option value="DD">Daman and Diu</option>
              <option value="DL">Delhi</option>
              <option value="GA">Goa</option>
              <option value="GJ">Gujarat</option>
              <option value="HR">Haryana</option>
              <option value="HP">Himachal Pradesh</option>
              <option value="JK">Jammu and Kashmir</option>
              <option value="JH">Jharkhand</option>
              <option value="KA">Karnataka</option>
              <option value="KL">Kerala</option>
              <option value="LA">Ladakh</option>
              <option value="LD">Lakshadweep</option>
              <option value="MP">Madhya Pradesh</option>
              <option value="MH">Maharashtra</option>
              <option value="MN">Manipur</option>
              <option value="ML">Meghalaya</option>
              <option value="MZ">Mizoram</option>
              <option value="NL">Nagaland</option>
              <option value="OR">Odisha</option>
              <option value="PY">Puducherry</option>
              <option value="PB">Punjab</option>
              <option value="RJ">Rajasthan</option>
              <option value="SK">Sikkim</option>
              <option value="TN">Tamil Nadu</option>
              <option value="TG">Telangana</option>
              <option value="TR">Tripura</option>
              <option value="UP">Uttar Pradesh</option>
              <option value="UT">Uttarakhand</option>
              <option value="WB">West Bengal</option>
            </select>
          </label>
          <label>
            <input
              type="text"
              placeholder=" City"
              className="start"
              name="district"
              value={user.district}
              onChange={handleInputs}
            ></input>
          </label>
        </div>
        <button className="sign" onClick={PostData}>
          SIGNUP
        </button>
        <div className="privacy">
          <input type="checkbox" />
          <h3 className="accept-info">I accept all information is correct.</h3>
        </div>
      </form>
    </div>
  );
}
