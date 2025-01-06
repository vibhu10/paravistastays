import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './features/DisplayProperty/DisplayProperty'
import { useState, useEffect } from "react";
import Header from "./Header";
import axios from "axios";

import { useNavigate } from "react-router-dom";
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
 
} from "@fortawesome/free-solid-svg-icons";
import Loading from "../Loading";

import SignUpForm from "./SignUpForm";
import SignUpOne from "./SignUpOne";
import PropertyCard from "./PropertyCard";
import DisplayProperty from "./features/DisplayProperty/DisplayProperty";
import FilterHome from "./filterhome";

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
  const [isPropertySelected, setIsPropertySelected] = useState(false);
  const[selectedPropertyData,setSelectedPropertyData]=useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const itemsPerRow = 6;
  const itemWidth = 100;
  const maxScroll =
    (Math.ceil(filters.length / itemsPerRow) - 1) * (itemsPerRow * itemWidth);
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
    setScrollOffset((prev) =>
      Math.min(prev + itemsPerRow * itemWidth, maxScroll)
    );
  };

  const handleScrollLeft = () => {
    setScrollOffset((prev) => Math.max(prev - itemsPerRow * itemWidth, 0));
  };

  const selectedProperty = (property) => {
    setIsPropertySelected(true);
   setSelectedPropertyData(property);
   
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const fetchFilteredProperties = async (filterData) => {
    console.log(filterData, "click");
    try {
      const response = await axios.post(
        "https://mhmk2b29-3000.inc1.devtunnels.ms/api/property/advancedfilter", // Your API endpoint
        filterData, // Send the filter data as JSON in the request body
        {
          headers: {
            "Content-Type": "application/json", // Ensures that the body is JSON
          },
        }
      );
      console.log("Filtered properties:", response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  return (
    <div className="home-container">
      {/* Header */}
      {loading && <Loading />}
     <Header
      toggleMenu={toggleMenu}
      isMenuOpen={isMenuOpen}
      closeMenu={closeMenu}
      fetchFilteredProperties={fetchFilteredProperties}

      setPopup={setPopup}

      popup={popup}
      isAuthenticated={isAuthenticated}
      handleSwitchToHosting={handleSwitchToHosting}
      showDropdown={showDropdown}
      toggleDropdown={toggleDropdown}
      handleProfileClick={handleProfileClick}
      handleLogout={handleLogout}
      loginPopup={loginPopup}
      setLoginPopup={setLoginPopup}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleLogin={handleLogin}
      error={error}
      scrollOffset={scrollOffset}
      handleScroll={handleScroll}
      handleScrollLeft={handleScrollLeft}
      handleFilterClick={handleFilterClick}
      filters={filters}
      toggleLoginPopup={toggleLoginPopup}
      toggleSignupPopup={toggleSignupPopup}
      isPropertySelected={isPropertySelected}
     />
  {/* Filter Buttons */}
  {!isPropertySelected ?  <FilterHome
        handleScrollLeft={handleScrollLeft}
        handleScroll={handleScroll}
        handleFilterClick={handleFilterClick}
        scrollOffset={scrollOffset}
        filters={filters}
      />
    :null
    }
      {/* Main body*/}

      <div className="home-body">

        {!isPropertySelected ?
       <PropertyCard
       propertyData={propertyData} selectedProperty={selectedProperty}
       />:
       <DisplayProperty selectedPropertyData={selectedPropertyData}/>
      }

      </div>

      {/* Signup Popup */}
      {signupPopup && (
        <div>
          <div
            className="signup-popup-overlay"
            onClick={() => setSignupPopup(false)}
          ></div>
          {signupStep === 1 ? (
           <SignUpOne setSignupPopup={setSignupPopup} email={email} setEmail={setEmail} error={error} handleSignUp={handleSignUp}/>
          ) : (
            <SignUpForm
              setFirstName={setFirstName}
              setLastName={setLastName}
              setDob={setDob}
              setPassword={setPassword}
              handleCompleteSignUp={handleCompleteSignUp}
              firstName={firstName}
              lastName={lastName}
              dob={dob}
              password={password}
              error={error}
              email={email}
            />
          )}
        </div>
      )}

      {/* Footer */}
    </div>
  );
}
