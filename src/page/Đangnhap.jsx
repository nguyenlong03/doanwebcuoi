import React, { useState, useEffect } from "react";
import "../page/Đangnhap.scss";
import AutherAPI from "../api/uselogin";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let respont = await AutherAPI.login(email, password);
      console.log("test respont", respont);
      if (respont) {
        alert("đăng nhập thành công");
      }
    } catch (error) {
      alert("đăng nhập thất bại");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign In</h2>
        <form id="login-form" className="login-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        <p className="login-subtext">Sign in with your Email and Password</p>
      </div>
    </div>
  );
}

export default Login;
