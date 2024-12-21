import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";



import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGem,
  faPalette,
  faWater,
  faUsers,
  faEye,
  faTree,
  faGamepad,
  faPeopleRoof,
  faCity,
  faLandmark,
  faSpa,
  faPersonHiking,
  faLeaf,
  faHeart,
  faWallet,
  faCalendar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";

const filters = [
  { icon: faGem, label: "Luxury" },
  { icon: faPalette, label: "Design" },
  { icon: faWater, label: "Waterfront" },
  { icon: faUsers, label: "Group Stays" },
  { icon: faEye, label: "Scenic Views" },
  { icon: faTree, label: "Countryside" },
  { icon: faGamepad, label: "Game House" },
  { icon: faPeopleRoof, label: "Family" },
  { icon: faCity, label: "City" },
  { icon: faLandmark, label: "Historical" },
  { icon: faSpa, label: "Wellness" },
  { icon: faPersonHiking, label: "Adventure" },
  { icon: faLeaf, label: "Nature" },
  { icon: faHeart, label: "Romantic" },
  { icon: faWallet, label: "Budget-Friendly" },
  { icon: faCalendar, label: "Seasonal" },
];

export default function Home() {
  const [popup, setPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signupStep, setSignupStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loginPopup, setLoginPopup] = useState(false);
  const [signupPopup, setSignupPopup] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [propertyData, setPropertyData] = useState(null);
  const itemsPerRow = 6;
  const itemWidth = 100;
  const maxScroll = (Math.ceil(filters.length / itemsPerRow) - 1) * (itemsPerRow * itemWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const fetchPropertyData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://mhmk2b29-3000.inc1.devtunnels.ms/api/property/allproperties"
        );
        setPropertyData(response.data);
      } catch (err) {
        console.error("Error fetching property data:", err);
        setError("Failed to fetch property data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPropertyData();
  }, []);

  const handleScroll = () => {
    setScrollOffset((prev) => Math.min(prev + itemsPerRow * itemWidth, maxScroll));
  };

  const handleScrollLeft = () => {
    setScrollOffset((prev) => Math.max(prev - itemsPerRow * itemWidth, 0));
  };

  const selectedProperty = (property) => {
    navigate("/property", { state: { property } });
  };

  const checkEmailExistence = async () => {
    try {
      const response = await axios.post(
        "https://mhmk2b29-3000.inc1.devtunnels.ms/api/users/signin/check-email",
        { email }
      );
      if (response.status === 200) {
        setError("");
        return true;
      }
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Email already exists. Please try another.");
      } else {
        console.error("Error during email check:", err);
        setError("An unexpected error occurred. Please try again.");
      }
      return false;
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      setError("Email is required.");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    const isEmailAvailable = await checkEmailExistence();
    if (!isEmailAvailable) {
      setError("Email is already in use.");
      return;
    }
    setSignupStep(2);
  };

  const handleCompleteSignUp = async () => {
    if (!password || !firstName || !lastName || !dob) {
      setError("All fields are required.");
      return;
    }
    try {
      const response = await axios.post(
        "https://mhmk2b29-3000.inc1.devtunnels.ms/api/users/signup",
        { email, password, firstName, lastName, dob }
      );
      alert("Signup completed successfully! You can now log in.");
      setSignupStep(1);
      setSignupPopup(false);
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.error("Error during complete signup:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://mhmk2b29-3000.inc1.devtunnels.ms/api/users/signin",
        { email, password }
      );
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      setPopup(false);
      setLoginPopup(false);
      setError("");
      alert("Login successful!");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        console.error("Error during login:", err);
        setError("Login failed. Please check your credentials.");
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setShowDropdown(false);
    alert("Logged out successfully!");
  };

  const handleSwitchToHosting = () => {
    if (isAuthenticated) {
      navigate("/host-registration");
    } else {
      alert("You need to log in first.");
      setPopup(true);
    }
  };

  const handleProfileClick = () => {
    setShowDropdown(false);
    navigate("/user-profile");
  };

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const toggleSignupPopup = () => {
    if (!signupPopup) {
      setEmail("");
      setPassword("");
      setFirstName("");
      setLastName("");
      setDob("");
      setError("");
    }
    setSignupPopup(!signupPopup);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterClick = async (filter) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://mhmk2b29-3000.inc1.devtunnels.ms/api/property/filtersByPropertyType`,
        { params: { type: filter.label, page: 1, limit: 20 } }
      );
      setPropertyData(response.data);
    } catch (error) {
      console.error("Error fetching filtered properties:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}{loading && <Loading/>}
      <div className="header">
        <div className="home-filter">
     
      <img  src="/paradise.jpeg" />
          <div className="filter"></div>

          <button className="filter-hamburger">
            <div className="line"></div>
            <div className="line short"></div>
            <div className="line"></div>filter
          </button>

          <div className="log-in-container">
            <button className="switch-to-hosting-button" onClick={handleSwitchToHosting}>
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

        {/* Filter Buttons */}
        <div className="container-filter-buttons">
  <button className="compare-button">3/3 | Compare</button>
  <button className="scroll-button" onClick={handleScrollLeft}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </button>
  <div className="filter-wrapper">
    <div
      className="filter-row"
      style={{
        transform: `translateX(-${scrollOffset}px)`,
        transition: "transform 0.5s ease",
      }}
    >
      {filters.map((filter, index) => (
        <div key={index} className="filter-item">
          <button
            className="btn btn-outline-primary d-flex flex-column align-items-center"
            onClick={() => handleFilterClick(filter)}
            onMouseEnter={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.transform = "scale(1.2)";
            }}
            onMouseLeave={(e) => {
              const icon = e.currentTarget.querySelector("svg");
              if (icon) icon.style.transform = "scale(1)";
            }}
            style={{
              backgroundColor: "transparent",
              border: "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              transition: "transform 0.3s ease",
            }}
          >
            <FontAwesomeIcon
              icon={filter.icon}
              size="2x"
              style={{
                color: "gray",
                transition: "transform 0.3s ease, color 0.3s ease",
              }}
            />
            <span
              style={{
                color: "gray",
                transition: "color 0.3s ease",
              }}
            >
              {filter.label}
            </span>
          </button>
        </div>
      ))}
    </div>
  </div>
  <button className="scroll-button" onClick={handleScroll}>
    <FontAwesomeIcon icon={faArrowRight} />
  </button>
</div>

      </div>

      <div className="home-body">
        <div className="hotel-data">
          {propertyData && propertyData.length > 0 ? (
            propertyData.map((property, index) => (
              <div key={index} className="hotel-card" onClick={() => selectedProperty(property)}>
                <img
                  src={property.coverPhotos?.cover?.image || "https://via.placeholder.com/150"}
                  alt={`Image of ${property.title || "Unknown Property"}`}
                />
                <div id="hotel-detail">
                  <h3 style={{ color: "#198E78" }}>{property.title || "Unnamed Property"}</h3>
                  <p>
                    Check-in: {property.availability?.checkinTime ?
                      new Date(property.availability.checkinTime).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      }) : "N/A"}
                  </p>
                  <p>
                    Min Nights: {property.availability?.minimumNight || "N/A"} | Max Nights: {property.availability?.maximumNight || "N/A"}
                  </p>
                  <p style={{ color: "black", fontSize: "18px", fontWeight: "bold" }}>
                    ${Math.floor(property.price?.BaseCharge || 0)}/night Total: <span style={{ color: "#198E78" }}>${Math.floor(property.price?.PriceBeforeTax || 0)}</span>
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No properties available to display.</p>
          )}
        </div>
      </div>





      {/* Signup Popup */}
      {signupPopup && (
  <div>
    <div className="signup-popup-overlay" onClick={() => setSignupPopup(false)}></div>
    {signupStep === 1 ? (
      <div className="signup-popup">
        <button
          className="close-popup-btn"
          onClick={() => setSignupPopup(false)}
        >
          ✖
        </button>
        <h3 className="text-center mb-4">Sign up</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <small style={{ color: "red", display: "block", marginTop: "5px" }}>{error}</small>
            )}
          </div>
          <button
            onClick={handleSignUp}
            type="submit"
            className="btn btn-primary w-100 mb-3"
            style={{ background: "#198E78", border: "none" }}
          >
            Continue
          </button>
        </form>

        <div className="d-flex align-items-center my-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 text-muted">or</span>
          <hr className="flex-grow-1" />
        </div>
        <div className="d-grid gap-3">
        <button
  className="btn btn-outline-primary d-flex align-items-center justify-content-center"
  style={{
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    borderWidth: "1px",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => {
    e.target.style.textDecoration = "underline"; // Add underline
  }}
  onMouseLeave={(e) => {
    e.target.style.textDecoration = "none"; // Remove underline
  }}
>
  <i
    className="bi bi-facebook me-2"
    style={{
      fontSize: "1rem",
    }}
  ></i>{" "}
  Continue with Facebook
</button>

<button
  className="btn btn-outline-danger d-flex align-items-center justify-content-center"
  style={{
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    borderWidth: "1px",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => {
    e.target.style.textDecoration = "underline"; // Add underline
  }}
  onMouseLeave={(e) => {
    e.target.style.textDecoration = "none"; // Remove underline
  }}
>
  <i
    className="bi bi-google me-2"
    style={{
      fontSize: "1rem",
    }}
  ></i>{" "}
  Continue with Google
</button>

<button
  className="btn btn-outline-dark d-flex align-items-center justify-content-center"
  style={{
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    lineHeight: "1.2",
    borderWidth: "1px",
    borderRadius: "0.25rem",
    backgroundColor: "transparent",
    textDecoration: "none",
  }}
  onMouseEnter={(e) => {
    e.target.style.textDecoration = "underline"; // Add underline
  }}
  onMouseLeave={(e) => {
    e.target.style.textDecoration = "none"; // Remove underline
  }}
>
  <i
    className="bi bi-apple me-2"
    style={{
      fontSize: "1rem",
    }}
  ></i>{" "}
  Continue with Apple
</button>

        </div>
      </div>
    ) : (
      <div className="signup2-container">
        <h2>Finish Signing Up</h2>
        <div className="signup2-input-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
           <div className="signup2-input-group">
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="email"
            value={email} 
            disabled
           
          />
        </div>
        <div className="signup2-input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <p className="signup2-agree">
          By selecting Agree and Continue, I agree to the Terms of Service, 
          Payments Terms of Service, and Nondiscrimination Policy, and acknowledge the Privacy Policy.
        </p>
        <div className="signup2-checkbox-group">
          <input type="checkbox" id="marketing" />
          <label htmlFor="marketing">I don't want to receive marketing messages from paradise.</label>
        </div>
        <button
          onClick={handleCompleteSignUp}
          className="btn btn-primary w-100"
          style={{ background: "#198E78", border: "none" }}
        >
          Agree and Continue
        </button>
        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
      </div>
    )}
  </div>
)}



      {/* Footer */}

    </div>
  );
}
