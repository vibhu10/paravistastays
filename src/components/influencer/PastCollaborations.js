import React from "react";
import "./PastCollaborations.css"; // Import a CSS file for styling

const PastCollaborations = () => {
  const collaborations = [
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150", // Replace with the real image URL
      details: [
        "2 Promotional Videos on Social Media",
        "New Listing Photos",
        "In Exchange for Free Stay",
      ],
      date: "July 15 - 17 2022",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150", // Replace with the real image URL
      details: [
        "2 Promotional Videos on Social Media",
        "New Listing Photos",
        "In Exchange for Free Stay",
      ],
      date: "July 15 - 17 2022",
    },
    {
      id: 3,
      imageUrl: "https://via.placeholder.com/150", // Replace with the real image URL
      details: [
        "2 Promotional Videos on Social Media",
        "New Listing Photos",
        "In Exchange for Free Stay",
      ],
      date: "July 15 - 17 2022",
    },
  ];

  return (
    <div className="past-collaborations-container">
      <button className="back-button">←</button>
      <h2>Past Collaborations</h2>
      <div className="collaborations-list">
        {collaborations.map((collab) => (
          <div key={collab.id} className="collaboration-card">
            <img src={collab.imageUrl} alt="Collaboration" className="collab-image" />
            <div className="collab-details">
              <p className="details-title">Details</p>
              <ul>
                {collab.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <button className="more-details-button">More Details</button>
            </div>
            <p className="collab-date">{collab.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastCollaborations;
