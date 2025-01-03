import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `https://mhmk2b29-3000.inc1.devtunnels.ms/api/admin/login`, // Use env variable for API URL
        { email, password }
      );

      // Save token and user info
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("userType", user.type);

      alert("Login successful!"); // Notify user
      navigate("/super-admin-dashboard"); // Redirect
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error || "Login failed. Please try again.");
      } else {
        console.error("Error during login:", err);
        setError("Unable to connect. Please try again later.");
      }
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <div className="adminlogin-container">
      <div className="adminlogin-box">
        <div className="adminlogin-logo">
          <img src="/ParadiseWhite.png" alt="Paradise Logo" />
          <h4 style={{ marginTop: "20px" }}>Login</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="adminlogin-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="adminlogin-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email Address"
          />
          <label htmlFor="password" className="adminlogin-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="adminlogin-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
          {error && <p className="adminlogin-error">{error}</p>}
          <button
            type="submit"
            className="adminlogin-button"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="adminlogin-options">
          <a href="/reset-password" className="adminlogin-link">
            Reset Password
          </a>
          <a href="/forgot-password" className="adminlogin-link">
            Forgot Password
          </a>
        </div>
      </div>
    </div>
  );
}
