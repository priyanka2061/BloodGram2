import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  // const loginUser = async (e) => {
  //   e.preventDefault();
  //   const res = await fetch('http://localhost:3004/signin', {
  //     method: 'POST',
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({
  //       email,
  //       password
  //     })
  //   });
  //   const data = await res.json();
  //   if (res.status === 400 || !data) {
  //     window.alert("Invalid Credentials");
  //   }
  //   else {
  //     window.alert("Login Successfully");
  //     navigate("/donate");
  //   }
  // }

  const loginUser = () => {
    const saveUserDataReq = {
      username: userData.username,
      password: userData.password,
    };

    axios({
      method: "POST",
      url: "http://localhost:4000/api/login",
      headers: { "Content-Type": "application/json" },
      data: saveUserDataReq,
    })
      .then((result) => {
        if (result.data.response.length >= 1) {
          alert("Login Successfully!");
        } else {
          alert("Wront input,Please Check Data");
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="login-page">
      <h1>Login Credentials</h1>
      <div className="login-pack">
        <BsPersonCircle className="login-icons" />
        <form>
          <label>
            <input
              className="inpu"
              name="username"
              value={userData.username}
              onChange={handleChange}
              placeholder=" Enter Your Email "
            />
          </label>
          <label>
            <input
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder=" Enter Your Password "
            />
          </label>
          <button className="lo" onClick={loginUser}>
            LOGIN
          </button>
        </form>
        <div>
          <h2>
            New to BloodGram?<a href="/signup">Create an account</a>
          </h2>
        </div>
        <button className="rese">Forgot Password</button>
      </div>
    </div>
  );
}

export default Login;
