import React, { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaHeart,
  FaUsers,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTiktok,
  FaTimes,
  FaPlane,
  FaLeaf,
  FaGem,
} from "react-icons/fa";
import "./InfluencerData.css";

const InfluencerData = () => {
  const [showFilterPopup, setShowFilterPopup] = useState(false);

  const data = [
    {
      id: 1,
      location: "Miami, Florida",
      reviews: 154,
      rating: 4.98,
      image: "https://tse1.mm.bing.net/th?id=OIP.3km_boAGqNMWla3UJzRJRQHaEj&pid=Api",
    },
    {
      id: 2,
      location: "Miami, Florida",
      reviews: 154,
      rating: 4.98,
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 3,
      location: "Miami, Florida",
      reviews: 154,
      rating: 4.98,
      image:
        "https://images.unsplash.com/photo-1599423300746-b62533397364?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    },
    {
      id: 4,
      location: "Miami, Florida",
      reviews: 154,
      rating: 4.98,
      image: "https://tse1.mm.bing.net/th?id=OIP.3km_boAGqNMWla3UJzRJRQHaEj&pid=Api",
    },
    {
      id: 6,
      location: "Miami, Florida",
      reviews: 154,
      rating: 4.98,
      image: "https://tse3.mm.bing.net/th?id=OIP.5oYanGnJ3GdoQMndxX95GwHaG8&pid=Api",
    },
  ];

  return (
    <div className="influencerdata-wrapper">
      <div className="influencerdata-topbar">
        <button className="influencerdata-btn">
          <FaUsers className="icon" /> Collaborations
        </button>

        <div className="influencerdata-search-container">
          <FaSearch className="influencerdata-search-icon" />
          <input
            type="text"
            placeholder="Search for influencers"
            className="influencerdata-search-input"
          />
          <select className="influencerdata-dropdown">
            <option value="">Influencer Type</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="travel">Travel</option>
            <option value="fitness">Fitness</option>
          </select>
          <button
            className="influencerdata-filter-btn"
            onClick={() => setShowFilterPopup(true)}
          >
            <FaFilter className="icon" /> Filter
          </button>
        </div>

        <button className="influencerdata-btn">
          <FaHeart className="icon influencerdata-heart-icon" /> Saved
        </button>
      </div>

      {/* Cards Section */}
      <div className="influencerdata-container">
        <div className="influencerdata-grid">
          {data.map((item) => (
            <div className="influencerdata-card" key={item.id}>
              <div className="influencerdata-image">
                <img src={item.image} alt={`${item.location}`} />
                <div className="influencerdata-heart">❤️</div>
              </div>
              <div className="influencerdata-card-content">
                <h3>{item.location}</h3>
                <p className="influencerdata-rating">
                  ⭐ {item.rating} <span>({item.reviews} Reviews)</span>
                </p>
                <p className="influencerdata-name">Influencer name</p>
                <div className="influencerdata-socials">
                  <FaInstagram />
                  <FaFacebookF />
                  <FaYoutube />
                  <FaTiktok />
                  <p className="influencerdata-followers">2k Followers</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Popup */}
      {showFilterPopup && (
        <div className="inpopup-overlay">
          <div className="inpopup-container">
            <div className="inpopup-header">
              <h3>Filters</h3>
              <button
                className="inpopup-close-btn"
                onClick={() => setShowFilterPopup(false)}
              >
                <FaTimes />
              </button>
            </div>

            <div className="inpopup-content">
              <h4>Influencer Type</h4>
              <div className="inpopup-grid">
                <button className="inpopup-grid-item">
                  <FaPlane className="inpopup-icon" />
                  Travel
                </button>
                <button className="inpopup-grid-item">
                  <FaLeaf className="inpopup-icon" />
                  Lifestyle
                </button>
                <button className="inpopup-grid-item">
                  <FaUsers className="inpopup-icon" />
                  Family
                </button>
                <button className="inpopup-grid-item">
                  <FaGem className="inpopup-icon" />
                  Luxury
                </button>
                <button className="inpopup-grid-item">
                  <FaUsers className="inpopup-icon" />
                  Celebrities
                </button>
              </div>

              <div className="inpopup-footer">
                <h4>Minimum Followers</h4>
                <input
                  type="number"
                  placeholder="Type in amount ex, 50,000"
                  className="inpopup-input"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfluencerData;
