import React from "react";
import "./AdminLogin.css"; // Add your CSS for styling

export default function AdminLogin() {
  return (
    <div className="adminlogin-container">
      <div className="adminlogin-box">
        <div className="adminlogin-logo">
         
           <img src="/ParadiseWhite.png" alt="paradise.log"/>
            <h4 style={{marginTop:"20px"}}>Login</h4>
        </div>
        <form>
          <label htmlFor="email" className="adminlogin-label"></label>
          <input type="email" id="email" placeholder="Email Address" className="adminlogin-input" />
          <label htmlFor="password" className="adminlogin-label"></label>
          <input type="password" id="password" placeholder="Password" className="adminlogin-input" />
          <button type="submit" className="adminlogin-button">
            Login
          </button>
        </form>
        <div className="adminlogin-options">
          <a  style={{color:"black"}}href="/reset-password" className="adminlogin-link">Reset Password</a>
          <a style={{color:"black"}} href="/forgot-password" className="adminlogin-link">Forgot Password</a>
        </div>
      </div>
    </div>
  );
}
