import React, { useState } from "react";
import logo from "../../asset/logo.png";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }
  return (
    <div className="signupParent">
      <img alt="logo" src={logo} />
      <h1>Welcome to dailyblog</h1>
      <h3>Login to Your Account</h3>
      <form>
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
        <button type="submit">Login</button>
      </form>
      <div className="footerText">
        Didn't have an account?
        <a href="/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
