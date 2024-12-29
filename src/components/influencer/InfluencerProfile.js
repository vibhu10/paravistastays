import React, { useState } from "react";
import "./InfluencerProfile.css";

const InfluencerProfile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showMoreDescription, setShowMoreDescription] = useState(false);

  const images = [
    "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg",
    "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg",
    "https://images.pexels.com/photos/1166411/pexels-photo-1166411.jpeg",
    "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
    "https://images.pexels.com/photos/356378/pexels-photo-356378.jpeg",
    "https://images.pexels.com/photos/1230675/pexels-photo-1230675.jpeg",
  ];

  const description =
    "Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse with all modern amenities in an area of outstanding natural beauty. Located near a serene lake, it offers a tranquil experience, complete with breathtaking views of sunrise and sunset. Visitors can enjoy a unique stay under the stars, with a blend of modern architecture and cozy interiors. This property is perfect for getaways, retreats, and celebrating special moments.";

  const reviews = [
    {
      author: "Sahil",
      date: "3 weeks ago",
      text: "Hoots Treehouse is absolutely amazing. The interiors are stunning and the surrounding scenery is breathtaking. It’s the perfect place for a peaceful getaway!",
    },
    {
      author: "Riya",
      date: "1 month ago",
      text: "The property exceeded all my expectations. The amenities were top-notch, and the hosts were very welcoming. Highly recommend staying here!",
    },
  ];

  return (
    <div className="InfluencerProfile">
      {/* Sidebar */}
      <aside className="InfluencerProfile-sidebar">
        <div className="InfluencerProfile-sidebarHeader">
          <img
            src="https://via.placeholder.com/100"
            alt="Profile"
            className="InfluencerProfile-profilePic"
          />
          <h2>Name</h2>
          <p>Travel, Lifestyle</p>
          <p className="InfluencerProfile-location">Miami, Florida</p>
          <div className="InfluencerProfile-socialIcons">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-twitter"></i>
            <i className="fa fa-youtube"></i>
          </div>
          <p className="InfluencerProfile-followers">2k Followers</p>
        </div>
        <button className="InfluencerProfile-editProfileBtn">Edit Profile</button>
      </aside>

      {/* Main Content */}
      <main className="InfluencerProfile-main">
        {/* Image Section */}
        <section className="InfluencerProfile-gallery">
          <div className="InfluencerProfile-gallery-grid">
            {images.slice(0, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`InfluencerProfile-gallery-item ${
                  index === 0 ? "large" : "small"
                }`}
              />
            ))}
          </div>
          <button
            className="InfluencerProfile-showall-btn"
            onClick={() => setShowPopup(true)}
          >
            Show all photos
          </button>
        </section>


       {/* Popup for All Images */}
       {showPopup && (
          <div className="InfluencerProfile-popup">
            <div className="InfluencerProfile-popupContent">
              <button
                className="InfluencerProfile-closePopup"
                onClick={() => setShowPopup(false)}
              >
                &times;
              </button>
              <div className="InfluencerProfile-popupGallery">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Popup Image ${index + 1}`}
                    className="InfluencerProfile-popupImage"
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Description Section */}
        <section className="InfluencerProfile-description">
          <h3>Description</h3>
          <p>
            Hoots Treehouse is a picture-perfect, romantic, luxurious treehouse
            with all modern amenities in an area of outstanding natural beauty.
            Clad in aromatic cedar wood, beautifully furnished – ideal private,
            woodland retreat for couples.
            {showMoreDescription && (
              <>
                {" "}
                Can also comfortably sleep up to 2 children (from 5 years) on
                single mattresses in loft area accessed by a ladder and hatch.
                NOT SUITABLE FOR 4 ADULTS.
              </>
            )}
          </p>
          <button
            className="InfluencerProfile-showmore-btn"
            onClick={() => setShowMoreDescription(!showMoreDescription)}
          >
            {showMoreDescription ? "Show less" : "Show more"}
          </button>
        </section>

        {/* Reviews Section */}
         {/* Reviews Section */}
         <section className="InfluencerProfile-reviews">
          <div className="InfluencerProfile-review-header">
            <h3>Reviews</h3>
            <div className="InfluencerProfile-review-rating">
              <span>4.98</span> &nbsp;★&nbsp; <span>118 Reviews</span>
            </div>
          </div>
          <div className="InfluencerProfile-review-cards">
            {reviews.map((review, index) => (
              <div key={index} className="InfluencerProfile-review-card">
                <div className="InfluencerProfile-review-author">
                  <span className="InfluencerProfile-review-avatar">S</span>
                  <span className="InfluencerProfile-review-name">
                    {review.name}
                  </span>
                  <span className="InfluencerProfile-review-date">
                    {review.date}
                  </span>
                </div>
                <p className="InfluencerProfile-review-text">{review.text}</p>
                <button className="InfluencerProfile-review-readmore">
                  Read more..
                </button>
              </div>
            ))}
          </div>
          <button className="InfluencerProfile-show-reviews">
            Show all reviews
          </button>
        </section>
      </main>
    </div>
  );
};

export default InfluencerProfile;
