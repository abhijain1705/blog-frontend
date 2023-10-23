import React, { useState } from "react";
import "./signup.css";
import logo from "../../asset/logo.png";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleName(event) {
    console.log(event);
    setName(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  return (
    <div className="signupParent">
      <img alt="logo" src={logo} />
      <h1>Welcome to dailyblog</h1>
      <h3>Create Account</h3>
      <form>
        <div className="inputWrapper">
          <label htmlFor="name">Name</label>
          <input
            onChange={handleName}
            id="name"
            value={name}
            placeholder="Enter Your Name"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="email">Email</label>
          <input
            onChange={handleEmail}
            id="email"
            value={email}
            placeholder="Enter Your Mail Id"
          />
        </div>
        <div className="inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            onChange={handlePassword}
            id="password"
            value={password}
            placeholder="Enter Your Password"
          />
        </div>
        <button type="submit">Create Account</button>
      </form>
      <div className="footerText">
        Already have an account?
        <a href="/login">Login</a>
      </div>
    </div>
  );
}

export default Signup;
