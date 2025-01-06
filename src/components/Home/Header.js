import React from "react";
import SearchBar from "./features/SearchBar";
import HamburgerFilter from "./features/HamburgerFilter";


export default function Header({
  toggleMenu,
  isMenuOpen,
  closeMenu,
  fetchFilteredProperties,
  setPopup,
  popup,
  isAuthenticated,
  handleSwitchToHosting,
  showDropdown,
  toggleDropdown,
  handleProfileClick,
  handleLogout,
  loginPopup,
  setLoginPopup,
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  error,
  
  toggleLoginPopup,toggleSignupPopup
}) {
  return (
    <div className="header">
      <div className="home-filter">
        <img src="/paradisenewlogo.png" />
        {/* <div className="filter"></div> */}
        <SearchBar />
        <div>
          {/* Filter Hamburger Button */}
          <button className="filter-hamburger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line short"></div>
            <div className="line"></div>
            Filter
          </button>

          {/* Modal for Hamburger Filter */}
          {isMenuOpen && (
            <div className="modal-overlay" onClick={closeMenu}>
              <div
                className="modal-container-Hamburger-Filter"
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-button" onClick={closeMenu}>
                  &times;
                </button>
                <HamburgerFilter filterdata={fetchFilteredProperties} />{" "}
                {/* Render the HamburgerFilter component */}
              </div>
            </div>
          )}
        </div>

        <div className="log-in-container">
          <button
            className="switch-to-hosting-button"
            onClick={handleSwitchToHosting}
          >
            Switch to hosting
          </button>

          {isAuthenticated ? (
            <div className="profile-menu">
              <div
                className="profile-icon"
                onClick={toggleDropdown}
                style={{ cursor: "pointer" }}
              >
                <span>W</span>
              </div>
              {showDropdown && (
                <div className="profile-dropdown">
                  <ul>
                    <li onClick={handleProfileClick}>Profile</li>
                    <li>Reservations</li>
                    <li>Saved</li>
                    <li>Inbox</li>
                    <li>Compare</li>
                    <li>List Your Property</li>
                    <li>Referral Program</li>
                    <li>Become an Influencer</li>
                    <li>Help Center</li>
                    <li>Resources</li>
                    <li>Feedback</li>
                    <li onClick={handleLogout}>Logout</li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <button
              className="hamburger-button"
              onClick={() => setPopup(!popup)}
            >
              <div className="line"></div>
              <div className="line short"></div>
              <div className="line"></div>
            </button>
          )}

          {popup && !isAuthenticated && (
            <div className="profile-dropdown">
              <ul>
                <li onClick={toggleLoginPopup}>Login</li>
                <li onClick={toggleSignupPopup}>Sign Up</li>
              </ul>
            </div>
          )}

          {loginPopup && (
            <div className="login-popup">
              <button
                style={{ width: "20px", background: "none" }}
                className="close-popup-btn"
                onClick={() => setLoginPopup(false)}
              >
                ✖
              </button>
              <h4>Login or Sign up</h4>
              <h3>Welcome to paradise</h3>
              <div id="log-in-phoneNo-div">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your Password"
                />
              </div>
              <button onClick={handleLogin}>Continue</button>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          )}
        </div>
      </div>

    
    </div>
  );
}
