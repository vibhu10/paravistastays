import React from "react";
import "./AdminProfileUpdate.css";

export default function Profile() {
  return (
    <div className="profile-Admin-container">
      <div className="profile-Admin-form">
        <div className="profile-Admin-section">
          <h2>Name</h2>
          <div className="profile-Admin-input-group">
            <input
              type="text"
              placeholder="Superadmin"
              disabled
              className="profile-Admin-input-disabled"
            />
            <p>Usernames cannot be changed.</p>
            <div className="profile-Admin-name-fields">
              <input type="text" placeholder="First name" className="profile-Admin-input" />
              <input type="text" placeholder="Last name" className="profile-Admin-input" />
            </div>
            <input type="text" placeholder="Nick name*" className="profile-Admin-input" />
          </div>
        </div>

        <div className="profile-Admin-section">
          <h2>Contact Info</h2>
          <input type="email" placeholder="Email" className="profile-Admin-input" />
          <input
            type="text"
            placeholder="https://paravistastays.com"
            className="profile-Admin-input"
          />
        </div>

        <div className="profile-Admin-section">
          <h2>About Yourself</h2>
          <textarea
            placeholder="Biographical Info"
            className="profile-Admin-textarea"
          ></textarea>
        </div>

        <div className="profile-Admin-section">
          <h2>Profile Picture</h2>
          <div className="profile-Admin-picture">
            <div className="profile-Admin-picture-placeholder">👤</div>
            <p>
              You can change your profile picture on <a href="https://gravatar.com">Gravatar</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="profile-Admin-account-management">
        <h2>Account Management</h2>
        <input style={{width:"30%"}}
          type="password"
          placeholder="Enter your new password"
          className="profile-Admin-input"
        />
        <button style={{width:"30%"}} className="profile-Admin-button">Set New Password</button>
      </div>

      <div className="profile-Admin-update">
        <button className="profile-Admin-button">Update Profile</button>
      </div>
    </div>
  );
}
