import React, { useState } from "react";
import './signup.css';
import JUSTICEL from './assets/JUSTICEL.png';

export default function Signup({ goToSignIn }) {
  const [formData, setFormData] = useState({
    nationalId: "",
    names: "",
    creditCard: "",
    birthDate: "",
    password: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
    goToSignIn(); 
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>National ID:</label>
            <input type="text" name="nationalId" value={formData.nationalId} onChange={handleChange} required className="form-control" />
          </div>

          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" name="names" value={formData.names} onChange={handleChange} required className="form-control" />
          </div>

          <div className="form-group">
            <label>Credit Card:</label>
            <input type="text" name="creditCard" value={formData.creditCard} onChange={handleChange} required maxLength="16" className="form-control" />
          </div>

          <div className="form-group">
            <label>Birth Date:</label>
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required className="form-control" />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="form-control" />
          </div>

          <div className="form-group">
            <label>Country:</label>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required className="form-control" />
          </div>

          <div className="form-group">
            <label>Phone Number:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="form-control" />
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
