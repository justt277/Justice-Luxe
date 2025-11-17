import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signin.css';
import JUSTICEL from './assets/JUSTICEL.png';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Sign in successful!");
    navigate("/products");   // Redirect properly
  };

  return (
    <div className="signin-page">
      <div className="signin-container">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="form-control"
            />
          </div>

          <button type="submit">Sign In</button>
          <p className="text-light">you don't have account ? <strong className="text-warning">create One</strong></p>
        </form>
      </div>
    </div>
  );
}
