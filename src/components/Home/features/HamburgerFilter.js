import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './HamburgerFilter.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faSnowflake, faUtensils, faTshirt, faParking, faDollarSign, faLaptop, faTv, faSwimmingPool, faFireAlt, faShower, faBathtub, faHouse, faBuilding, faHotel } from "@fortawesome/free-solid-svg-icons";
import { faGem, faPalette, faWater, faUsers, faEye, faTree, faGamepad, faPeopleRoof, faCity, faLandmark, faSpa, faPersonHiking, faLeaf, faHeart, faWallet, faCalendar } from "@fortawesome/free-solid-svg-icons";

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

const amenities = [
    { id: "wifi", label: "Wifi", icon: faWifi },
    { id: "air_conditioning", label: "Air Conditioning", icon: faSnowflake },
    { id: "kitchen", label: "Kitchen", icon: faUtensils },
    { id: "washing_machine", label: "Washing Machine", icon: faTshirt },
    { id: "free_parking", label: "Free parking", icon: faParking },
    { id: "tv", label: "TV", icon: faTv },
    { id: "pool", label: "Pool", icon: faSwimmingPool },
    { id: "bathtub", label: "Bathtub", icon: faBathtub },
    { id: "firepit", label: "Firepit", icon: faFireAlt },
    { id: "outdoor_shower", label: "Outdoor Shower", icon: faShower },
];

const propertyTypes = [
    { label: "Homes", icon: faHouse },
    { label: "Apartment / Condo", icon: faBuilding },
    { label: "Hotels", icon: faHotel },
];

const HamburgerFilter = ({ filterdata }) => {
  const [showAllFilters, setShowAllFilters] = useState(false);
  const [showAllAmenities, setShowAllAmenities] = useState(false);
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [instantBook, setInstantBook] = useState(false);
  const [flexibleCancellation, setFlexibleCancellation] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [features, setFeatures] = useState({
      step_free_guest_entrance: false,
      guest_entrance_wider: false,
      accessible_parking_spot: false,
      step_free_path_to_entrance: false,
      step_free_bedroom_access: false,
      bedroom_entrance_wider: false,
  });

  const visibleAmenities = showAllAmenities ? amenities : amenities.slice(0, 8); // Add this line


    const toggleSelection = (item, selectedItems, setSelectedItems) => {
        if (selectedItems.includes(item)) {
            setSelectedItems(selectedItems.filter(selected => selected !== item));
        } else {
            setSelectedItems([...selectedItems, item]);
        }
    };

    const handleMinPriceChange = (e) => {
        const value = Math.min(Number(e.target.value), maxPrice);
        setMinPrice(value);
    };

    const handleMaxPriceChange = (e) => {
        const value = Math.max(Number(e.target.value), minPrice);
        setMaxPrice(value);
    };

    const handleFeatureToggle = (feature) => {
        setFeatures({ ...features, [feature]: !features[feature] });
    };

    const handleShowPlaces = () => {
        const data = {
            selectedFilters,
            selectedAmenities,
            selectedPropertyTypes,
            priceRange: { min: minPrice, max: maxPrice },
            petsAllowed,
            instantBook,
            flexibleCancellation,
            accessibilityFeatures: features,
        };
        filterdata(data);
        console.log(data,"data comming in filter")
    };
  
    return (
  
        <div className="accordion" id="propertyCategoryAccordion" style={{marginBottom:"20px"}}>
          {/* Property Categories Section */}
          <h1 style={{marginLeft:"200px"}}>Filters</h1>
          <hr/>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Property Categories
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne">
              <div className="accordion-body hamburgerFilter-container">
                <div className="hamburgerFilter-categories">
                  {filters.map((filter, index) => (
                    <div
                      key={index}
                      className={`hamburgerFilter-category ${selectedFilters.includes(filter.label) ? "selected" : ""}`}
                      onClick={() => toggleSelection(filter.label, selectedFilters, setSelectedFilters)}
                    >
                      <FontAwesomeIcon icon={filter.icon} className="hamburgerFilter-icon" />
                      <span className="hamburgerFilter-label">{filter.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      
          {/* Property Type Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                Property Type
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#propertyCategoryAccordion"
            >
              <div className="accordion-body hamburgerFilter-container">
                <div className="hamburgerFilter-categories">
                  {propertyTypes.map((type, index) => (
                    <div
                      key={index}
                      className={`hamburgerFilter-category ${selectedPropertyTypes.includes(type.label) ? "selected" : ""}`}
                      onClick={() => toggleSelection(type.label, selectedPropertyTypes, setSelectedPropertyTypes)}
                    >
                      <FontAwesomeIcon icon={type.icon} className="hamburgerFilter-icon" />
                      <span className="hamburgerFilter-label">{type.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
      
          {/* Price Range Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Price Range
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#propertyCategoryAccordion"
            >
              <div className="accordion-body">
                <div className="price-range-slider">
                  <input
                    type="range"
                    min="50"
                    max="20000"
                    value={minPrice}
                    onChange={handleMinPriceChange}
                    className="form-range"
                  />
                  <input
                    type="range"
                    min="50"
                    max="20000"
                    value={maxPrice}
                    onChange={handleMaxPriceChange}
                    className="form-range"
                  />
                  <div className="price-range-labels">
                    <div className="price-range-input">
                      <label>Minimum:</label>
                      <input
                        type="number"
                        min="50"
                        max={maxPrice}
                        value={minPrice}
                        onChange={handleMinPriceChange}
                      />
                    </div>
                    <div className="price-range-input">
                      <label>Maximum:</label>
                      <input
                        type="number"
                        min={minPrice}
                        max="20000"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          {/* Amenities Section */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Amenities
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#propertyCategoryAccordion"
            >
              <div className="accordion-body hamburgerFilter-container">
                <div className="hamburgerFilter-categories">
                  {visibleAmenities.map((amenity, index) => (
                    <div
                      key={index}
                      className={`hamburgerFilter-category ${selectedAmenities.includes(amenity.label) ? "selected" : ""}`}
                      onClick={() => toggleSelection(amenity.label, selectedAmenities, setSelectedAmenities)}
                    >
                      <FontAwesomeIcon icon={amenity.icon} className="hamburgerFilter-icon" />
                      <span className="hamburgerFilter-label">{amenity.label}</span>
                    </div>
                  ))}
                </div>
                {amenities.length > 8 && (
                  <button
                    className="btn btn-link mt-2"
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                  >
                    {showAllAmenities ? "Show Less" : "Show More"}
                  </button>
                )}
              </div>
            </div>
          </div>
      
          {/* Toggles Section */}
          <div className="toggle-section">
            <div className="toggle-item">
              <label className="toggle-label">Pets allowed</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="pets-allowed"
                  checked={petsAllowed}
                  onChange={() => setPetsAllowed(!petsAllowed)}
                />
                <label htmlFor="pets-allowed" className="slider"></label>
              </div>
            </div>
      
            <div className="toggle-item">
              <label className="toggle-label">Instant Book</label>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="instant-book"
                  checked={instantBook}
                  onChange={() => setInstantBook(!instantBook)}
                />
                <label htmlFor="instant-book" className="slider"></label>
              </div>
            </div>
          </div>
          <div className="accordion-item">
      <h2 className="accordion-header" id="headingPolicy">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsePolicy"
          aria-expanded="false"
          aria-controls="collapsePolicy"
        >
          Cancellation Policy
        </button>
      </h2>
      <div
        id="collapsePolicy"
        className="accordion-collapse collapse"
        aria-labelledby="headingPolicy"
        data-bs-parent="#propertyCategoryAccordion"
      >
        <div className="accordion-body">
          <div className="toggle-section">
            {/* Flexible Cancellation Toggle */}
            <div className="toggle-item">
              <div className="toggle-content">
                <p className="toggle-title">Flexible Cancellations</p>
                <p className="toggle-description">Cancel up to 24 hours before check-in</p>
              </div>
              <div className="toggle-switch">
                <input
                  type="checkbox"
                  id="flexible-cancellation"
                  checked={flexibleCancellation}
                  onChange={() => setFlexibleCancellation(!flexibleCancellation)}
                />
                <label htmlFor="flexible-cancellation" className="slider"></label>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingAccessibility">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseAccessibility"
          aria-expanded="false"
          aria-controls="collapseAccessibility"
        >
          Accessibility Features
        </button>
      </h2>
      <div
        id="collapseAccessibility"
        className="accordion-collapse collapse"
        aria-labelledby="headingAccessibility"
        data-bs-parent="#propertyCategoryAccordion"
      >
        <div className="accordion-body">
          {/* Guest Entrance and Parking Section */}
          <div className="accessibility-section">
            <h6>Guest entrance and parking</h6>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="step_free_guest_entrance"
                checked={features.step_free_guest_entrance}
                onChange={() => handleFeatureToggle("step_free_guest_entrance")}
              />
              <label htmlFor="step_free_guest_entrance">Step-free guest entrance</label>
            </div>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="guest_entrance_wider"
                checked={features.guest_entrance_wider}
                onChange={() => handleFeatureToggle("guest_entrance_wider")}
              />
              <label htmlFor="guest_entrance_wider">
                Guest entrance wider than 32 inches (81 centimetres)
              </label>
            </div>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="accessible_parking_spot"
                checked={features.accessible_parking_spot}
                onChange={() => handleFeatureToggle("accessible_parking_spot")}
              />
              <label htmlFor="accessible_parking_spot">Accessible parking spot</label>
            </div>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="step_free_path_to_entrance"
                checked={features.step_free_path_to_entrance}
                onChange={() => handleFeatureToggle("step_free_path_to_entrance")}
              />
              <label htmlFor="step_free_path_to_entrance">
                Step-free path to the guest entrance
              </label>
            </div>
          </div>

          {/* Bedroom Section */}
          <div className="accessibility-section">
            <h6>Bedroom</h6>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="step_free_bedroom_access"
                checked={features.step_free_bedroom_access}
                onChange={() => handleFeatureToggle("step_free_bedroom_access")}
              />
              <label htmlFor="step_free_bedroom_access">Step-free bedroom access</label>
            </div>
            <div className="accessibility-feature">
              <input
                type="checkbox"
                id="bedroom_entrance_wider"
                checked={features.bedroom_entrance_wider}
                onChange={() => handleFeatureToggle("bedroom_entrance_wider")}
              />
              <label htmlFor="bedroom_entrance_wider">
                Bedroom entrance wider than 32 inches (81 centimetres)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button style={{ backgroundColor: "#198E78", color: "white",marginLeft:"180px" }} onClick={handleShowPlaces}>
                Show Places
            </button>
      </div>
    );
  };
  
  export default HamburgerFilter;
  