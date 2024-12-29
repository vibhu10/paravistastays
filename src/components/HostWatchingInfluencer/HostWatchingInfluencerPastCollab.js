import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./HostWatchingInfluencerPastCollab.css";

const HostWatchingInfluencerPastCollab = () => {
  const collaborations = [
    {
      location: "Miami, Florida",
      rating: 4.98,
      reviews: 154,
      influencerName: "Influencer name",
      followers: "2k Followers",
      platforms: ["instagram", "youtube", "facebook", "tiktok"],
      image: "https://tse1.mm.bing.net/th?id=OIP.3km_boAGqNMWla3UJzRJRQHaEj&pid=Api",
      details: ["2 Promotional Videos on Social Media", "New Listing Photos"],
      date: "July 15 - 17 2022",
    },
    {
      location: "Miami, Florida",
      rating: 4.98,
      reviews: 154,
      influencerName: "Influencer name",
      followers: "2k Followers",
      platforms: ["instagram", "youtube", "facebook", "tiktok"],
      image: "https://tse1.mm.bing.net/th?id=OIP.3km_boAGqNMWla3UJzRJRQHaEj&pid=Api",
      details: ["2 Promotional Videos on Social Media", "New Listing Photos"],
      date: "July 15 - 17 2022",
    },
    {
      location: "Miami, Florida",
      rating: 4.98,
      reviews: 154,
      influencerName: "Influencer name",
      followers: "2k Followers",
      platforms: ["instagram", "youtube", "facebook", "tiktok"],
      image: "https://tse1.mm.bing.net/th?id=OIP.3km_boAGqNMWla3UJzRJRQHaEj&pid=Api",
      details: ["2 Promotional Videos on Social Media", "New Listing Photos"],
      date: "July 15 - 17 2022",
    },
  ];

  const platformIcons = {
    instagram: faInstagram,
    youtube: faYoutube,
    facebook: faFacebook,
    tiktok: faTiktok,
  };

  return (
    <div className="hostwatchinginfluencer-pastcollab">
      <h2>Past Collaborations</h2>
      {collaborations.map((collab, index) => (
        <div className="collaboration-card" key={index}>
          <div className="collab-info">
            <div className="location-rating">
              <h3>{collab.location}</h3>
              <p>
                <span className="rating">⭐ {collab.rating}</span> ({collab.reviews} Reviews)
              </p>
            </div>
            <div className="influencer-details">
              <p><strong>{collab.influencerName}</strong></p>
              <p>{collab.followers}</p>
              <div className="platforms">
                {collab.platforms.map((platform, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={platformIcons[platform]}
                    className={`platform-icon ${platform}`}
                    title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                  />
                ))}
              </div>
              <button className="contact-button">Contact</button>
            </div>
          </div>
          <div className="collab-media">
            <img src={collab.image} alt="Collaboration" />
            <div className="details">
              <ul>
                {collab.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <p><strong>In Exchange for Free Stay</strong></p>
              <a href="#">More Details</a>
            </div>
          </div>
          <div className="collab-date">
            <p>{collab.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HostWatchingInfluencerPastCollab;
