import { useState } from "react";
import "../Host-Registration/css/pageThree.css";

export function PageThree({ handleNext, handleBack, handleSaveProperty }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const propertyOptions = [
    {
      id: 1,
      kindOfProperty: "Homes",
      description: "A standalone house or private residence rented as a whole.",
      icon: "fa-solid fa-house", // Font Awesome icon class
    },
    {
      id: 2,
      kindOfProperty: "Apartment/Condo",
      description: "An apartment or condo unit rented as a whole.",
      icon: "fa-solid fa-building", // Font Awesome icon class
    },
    {
      id: 3,
      kindOfProperty: "Hotels",
      description: "A hotel room or suite rented for exclusive use.",
      icon: "fa-solid fa-hotel", // Font Awesome icon class
    },
  ];

  const handleSelection = (property) => {
    setSelectedProperty(property);
  };

  const onNextClick = () => {
    if (selectedProperty) {
      handleSaveProperty(selectedProperty); // Save the selected property to parent
      handleNext(); // Move to the next step
    }
  };

  return (
    <div className="page-three-container">
      <div className="page-three-body-host">
        <p className="page-three-question">What type of property do you have? *</p>
        <div className="page-three-pannel-box">
          {propertyOptions.map((property) => (
            <div
              key={property.id}
              className={`page-three-box ${
                selectedProperty?.id === property.id ? "selected" : ""
              }`}
              onClick={() => handleSelection(property)}
              style={{
                border: selectedProperty?.id === property.id ? "2px solid green" : "",
                boxShadow: selectedProperty?.id === property.id ? "0 0 10px rgba(0, 128, 0, 0.5)" : "",
              }}
            >
              <div className="page-three-box-icon-container">
                <i className={`${property.icon} page-three-box-icon`}></i>
              </div>
              <h4 className="page-three-box-title">{property.kindOfProperty}</h4>
              <p className="page-three-box-description">{property.description}</p>
            </div>
          ))}
        </div>
        <p className="page-three-note">
          <span>Note:</span> Only entire properties with private entrances are allowed—renting
          individual rooms in homes is not permitted. Shared outdoor spaces and amenities are
          acceptable.
        </p>
      </div>

      <div className="page-3-footer">
        <button onClick={handleBack} className="page-3-back-btn">
          Back
        </button>
        <div className="page-3-progress-bar"></div>
        <button
          onClick={onNextClick}
          className="page-3-next-btn"
          disabled={!selectedProperty} // Disable Next if no selection is made
        >
          Next
        </button>
      </div>
    </div>
  );
}
