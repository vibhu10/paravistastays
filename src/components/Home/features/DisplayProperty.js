import React, { useState } from 'react';
import './DisplayProperty.css';
import { FaUtensils, FaStar, FaWifi, FaTv, FaParking, FaFire, FaChild, FaTree, FaSnowflake } from 'react-icons/fa';

const propertyData = {
  images: [
    "https://tse4.mm.bing.net/th?id=OIP.nPNmQs6cm7VToKJ7oHv1iwHaE8&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.E0tnPW81_JeMB35SPMCATwHaHc&pid=Api",
    "https://tse2.mm.bing.net/th?id=OIP.CUpjCitxOHZoCb2eg4Gl1gHaLb&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.toTv8tHVsosP8MkGhMNcbwHaE8&pid=Api",
    "https://tse1.mm.bing.net/th?id=OIP.toTv8tHVsosP8MkGhMNcbwHaE8&pid=Api",
  ],
  title: "Luxurious, picture-perfect, stunning treehouse",
  location: "Treehouse in Mayfield, United Kingdom",
  rating: 4.98,
  reviews: 118,
  description:
    "Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse with all mod cons in an area of outstanding natural beauty. Only 45 minutes south of M25, clad in aromatic cedar wood, beautifully furnished. Ideal for couples.",
  price: 275,
  serviceFee: 93,
  maxGuests: 4,
  layoutImages: [
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
    "https://via.placeholder.com/150",
  ],
  reviewsData: [
    {
      name: "Sahil",
      date: "3 weeks ago",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      name: "Sahil",
      date: "3 weeks ago",
      rating: 5,
      comment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
  amenities: [
    { icon: <FaUtensils />, name: "Kitchen" },
    { icon: <FaWifi />, name: "Wifi" },
    { icon: <FaTv />, name: "TV" },
    { icon: <FaParking />, name: "Free parking on premises" },
    { icon: <FaTree />, name: "Garden" },
    { icon: <FaFire />, name: "Indoor fireplace" },
    { icon: <FaChild />, name: "Children’s books and toys" },
    { icon: <FaSnowflake />, name: "Fridge" },
  ],
};

const DisplayProperty = ({property}) => {
  console.log(property,"ssss")
  const [showAllImages, setShowAllImages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    images,
    title,
    location,
    rating,
    reviews,
    description,
    price,
    serviceFee,
    maxGuests,
    layoutImages,
    reviewsData,
    amenities,
  } = propertyData;

  const displayedImages = showAllImages ? images : images.slice(0, 5);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="display-property-container">
      {/* Header Section */}
      <header className="display-property-header">
        <h1>{title}</h1>
      </header>

      {/* Image Section */}
      <div className="display-property-images">
        <div className="display-property-thumbnails">
          {displayedImages.map((src, index) => (
            <img key={index} src={src} alt={`Thumbnail ${index + 1}`} />
          ))}
        </div>
        {!showAllImages && (
          <button
            className="display-property-showall-button"
            onClick={() => {
              setShowAllImages(true);
              openModal();
            }}
          >
            Show All Photos
          </button>
        )}
      </div>

      {/* Main Content Section */}
      <div className="display-property-main-content">
        {/* Property Details */}
        <div className="display-property-details">
          <h2>{location}</h2>
          <div className="display-property-rating">
            <span>
              {Array.from({ length: Math.round(rating) }).map((_, index) => (
                <FaStar key={index} color="gold" />
              ))}
            </span>
            <span>
              {rating} ({reviews} Reviews)
            </span>
          </div>
          <p>{description}</p>
        </div>

        {/* Reservation Section */}
        <div className="display-property-reservation">
          <div className="display-property-price">
            <span>${price}</span> <span>/ night</span>
          </div>
          <div className="display-property-dates">
            <label>Check-in:</label>
            <input type="date" />
            <label>Check-out:</label>
            <input type="date" />
            <label>Guests:</label>
            <select>
              {Array.from({ length: maxGuests }).map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1} {index + 1 === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>
          <div className="display-property-total">
            <p>${price} × 2 nights = ${price * 2}</p>
            <p>Service fee: ${serviceFee}</p>
            <p>Total: ${price * 2 + serviceFee}</p>
          </div>
          <button className="display-property-reserve-button">Reserve</button>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="display-property-amenities">
        <h3>Amenities</h3>
        <ul className="amenities-list">
          {amenities.map((amenity, index) => (
            <li key={index} className="amenity-item">
              {amenity.icon} {amenity.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Layout Section */}
      <div className="display-property-layout">
        <h3>Layout</h3>
        <div className="display-property-layout-images">
          {layoutImages.map((src, index) => (
            <img key={index} src={src} alt={`Layout ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="display-property-reviews">
        <h3>Reviews</h3>
        <div className="display-property-review-summary">
          <span>
            <FaStar color="gold" />
            {rating}
          </span>
          <span>{reviews} Reviews</span>
        </div>
        <div className="display-property-review-cards">
          {reviewsData.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <div className="review-avatar">{review.name[0]}</div>
                <div>
                  <h4>{review.name}</h4>
                  <p>{review.date}</p>
                </div>
              </div>
              <p>{review.comment}</p>
              <a href="#">Read more..</a>
            </div>
          ))}
        </div>
        <button className="display-property-showall-reviews">Show all reviews</button>
      </div>
  {/* Map Section */}
  <div className="display-property-map">
        <h3>Map</h3>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509885!2d-122.41941568468185!3d37.774929279759444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cbae6b8b3%3A0x2e153fe6c5df22f3!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2s!4v1634348738127!5m2!1sen!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Property Location"
          ></iframe>
        </div>
      </div>

      {/* Reservation Calendar */}
      <div className="display-property-calendar">
        <h3>Check Available Dates</h3>
        <div className="calendar-container">
          <div className="calendar-month">
            <h4>August 2024</h4>
            <div className="calendar-grid">
              {Array.from({ length: 31 }).map((_, index) => (
                <span key={index} className={index < 26 ? "disabled" : "enabled"}>
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
          <div className="calendar-month">
            <h4>September 2024</h4>
            <div className="calendar-grid">
              {Array.from({ length: 30 }).map((_, index) => (
                <span
                  key={index}
                  className={index >= 8 && index <= 12 ? "selected" : "enabled"}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Owner Details */}
      <div className="display-property-owner">
        <h3>Property Owner Details</h3>
        <div className="owner-container">
          <div className="owner-image">
            <img
              src="https://via.placeholder.com/150"
              alt="Owner Profile"
            />
          </div>
          <div className="owner-details">
            <h4>Owner Name</h4>
            <p>Language: English</p>
            <p>Rating: 4.98 (118 Reviews)</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="message-owner-button">Message Owner</button>
          </div>
        </div>
        </div>




        
        </div>
        
      
    
  );
};

export default DisplayProperty;
