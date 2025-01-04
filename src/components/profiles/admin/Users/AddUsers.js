import React from "react";
import "./AddUsers.css";

export default function AddUser() {
  return (
    <div className="AddUser-form-container">
      <h1 className="AddUser-title">Add New User</h1>
      <p className="AddUser-description">
        Create a brand new user and add them to this site.
      </p>
      <form className="AddUser-form">
        <label htmlFor="username" className="AddUser-label">Username *</label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className="AddUser-input"
        />

        <div className="AddUser-name-fields">
          <div>
            <label htmlFor="first-name" className="AddUser-label">First name</label>
            <input
              type="text"
              id="first-name"
              name="first-name"
              className="AddUser-input"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="AddUser-label">Last name</label>
            <input
              type="text"
              id="last-name"
              name="last-name"
              className="AddUser-input"
            />
          </div>
        </div>

        <label htmlFor="email" className="AddUser-label">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="AddUser-input"
        />

        <label htmlFor="website" className="AddUser-label">Website</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://paravistastays.com"
          className="AddUser-input"
        />

        <label htmlFor="password" className="AddUser-label">
          Enter your password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="AddUser-input"
        />

        <label htmlFor="role" className="AddUser-label">Role</label>
        <input type="text" id="role" name="role" className="AddUser-input" />

        <div className="AddUser-notification">
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            className="AddUser-checkbox"
          />
          <label htmlFor="notifications" className="AddUser-checkbox-label">
            Send user notifications
          </label>
        </div>

        <button type="submit" className="AddUser-button">Add New User</button>
      </form>
    </div>
  );
}
