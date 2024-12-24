import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BecomeInfluencer.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { 
  faFacebook, 
  faInstagram, 
  faYoutube, 
  faTiktok, 
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { 
    faCamera,
  faPlane, 
  faHeart, 
  faUsers, 
  faHiking, 
  faTree, 
  faGem, 
  faStar, 
  faUtensils, 
  faSpa 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(
  faFacebook,
  faInstagram,
  faYoutube,
  faTiktok,
  faGoogle,
  faPlane,
  faHeart,
  faUsers,
  faHiking,
  faTree,
  faGem,
  faStar,
  faUtensils,
  faSpa
);
library.add(faFacebook, faInstagram, faYoutube, faTiktok, faGoogle);

function BecomeInfluencer() {
 
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  const handleClear = () => {
    setProfileImage(null);
  };


  return (
    <div className="BecomeInfluencer-container">
      <h1>Become an Influencer</h1>
      <p className="BecomeInfluencer-description">
        If you want to become an influencer, you have to link with your social media account.
      </p>


      {/* Accordion Section */}
      <div className="accordion" id="BecomeInfluencerAccordion">
        {/* Step 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Step 1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#BecomeInfluencerAccordion"
          >
            <div className="accordion-body">
            <ul className="BecomeInfluencer-social-links">
  <li className="BecomeInfluencer-social-item" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faFacebook} className="BecomeInfluencer-icon" style={{ marginRight: '10px' }} />
    <span>Facebook</span>
    <a href="#" className="BecomeInfluencer-connect" style={{ marginLeft: '500px' }}>Connect</a>
  </li>
  <li className="BecomeInfluencer-social-item" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faInstagram} className="BecomeInfluencer-icon" style={{ marginRight: '10px' }} />
    <span>Instagram</span>
    <a href="#" className="BecomeInfluencer-connect" style={{ marginLeft: 'auto' }}>Connect</a>
  </li>
  <li className="BecomeInfluencer-social-item" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faYoutube} className="BecomeInfluencer-icon" style={{ marginRight: '10px' }} />
    <span>YouTube</span>
    <a href="#" className="BecomeInfluencer-connect" style={{ marginLeft: 'auto' }}>Connect</a>
  </li>
  <li className="BecomeInfluencer-social-item" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faTiktok} className="BecomeInfluencer-icon" style={{ marginRight: '10px' }} />
    <span>TikTok</span>
    <a href="#" className="BecomeInfluencer-connect" style={{ marginLeft: 'auto' }}>Connect</a>
  </li>
  <li className="BecomeInfluencer-social-item" style={{ display: 'flex', alignItems: 'center' }}>
    <FontAwesomeIcon icon={faGoogle} className="BecomeInfluencer-icon" style={{ marginRight: '10px' }} />
    <span>Google</span>
    <a href="#" className="BecomeInfluencer-disconnect" style={{ marginLeft: 'auto' }}>Disconnect</a>
  </li>
</ul>


            </div>
            <button  style={{borderRadius:"10px",backgroundColor:"#198E78",color:"white",marginLeft:"20px"}}>Next</button>
          </div>
        </div>

         {/* Step 2 */}
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
              Step 2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#BecomeInfluencerAccordion"
          >
            <div className="accordion-body">
              <div className="BecomeInfluencer-step2">
                <h5>Influencer Type</h5>
                <div className="BecomeInfluencer-types">
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faPlane} className="type-icon" /> Travel
                  </button>
                  <button className="BecomeInfluencer-type-btn active">
                    <FontAwesomeIcon icon={faHeart} className="type-icon" /> Lifestyle
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faUsers} className="type-icon" /> Family
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faHiking} className="type-icon" /> Adventure
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faTree} className="type-icon" /> Outdoor
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faGem} className="type-icon" /> Luxury
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faStar} className="type-icon" /> Celebrities
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faUtensils} className="type-icon" /> Food/Beverage
                  </button>
                  <button className="BecomeInfluencer-type-btn">
                    <FontAwesomeIcon icon={faSpa} className="type-icon" /> Wellness
                  </button>
                </div>
                <div className="BecomeInfluencer-field">
                  <label>Minimum followers</label>
                  <input type="text" placeholder="Type in amount ex, 50,000" />
                </div>
                <div className="BecomeInfluencer-field">
                  <label>Tell us how your social media account provides value to our property?</label>
                  <textarea placeholder="Write few lines"></textarea>
                </div>
                <div className="BecomeInfluencer-field">
                  <label>Biography</label>
                  <textarea placeholder="Add biography"></textarea>
                </div>
                <div className="BecomeInfluencer-field">
                  <label>Add previous collaboration field.</label>
                  <textarea placeholder="Add collaboration"></textarea>
                </div>

                        {/* Why Join Section */}
      <div className="why-join">
        <h3>Why you want to join our platform as an influencer?</h3>
        <textarea placeholder="Write a few lines"></textarea>
      </div>

              </div>
            </div>
          </div>
        </div>
    
      </div>

  
      
      {/* Gallery Section */}
      <h3>Gallery</h3>
<div className="gallery">
  <div className="gallery-item">
    <img src="https://via.placeholder.com/150" alt="Cover Photo" />
    <p>Cover Photo</p>
   
  </div>
  <div className="gallery-item">
    <img src="https://via.placeholder.com/150" alt="Living Room" />
    <p>Living Room</p>
  
  </div>
  <div className="gallery-item">
    <img src="https://via.placeholder.com/150" alt="House" />
    <p>House</p>

  </div>
  <button className="add-photo">+</button>
</div>

      {/* Past Collaborations */}
      <div className="past-collaborations">
        <div style={{display:"flex",justifyContent:"space-between"}}>

        <h3>Past Collaborations</h3><button  style={{marginBottom:"10px"}}className="add-photo">+</button>
        </div>
        <div className="collaboration-item">
          <img src="https://via.placeholder.com/150" alt="Collaboration 1" />
          <div>
            <p>Details:</p>
            <ul>
              <li>2 Promotional Videos on Social Media</li>
              <li>New Listing Photos</li>
              <li>In Exchange for Free Stay</li>
            </ul>
            <p>July 15 - 17 2022</p>
          </div>
        </div>
        <div className="collaboration-item">
          <img src="https://via.placeholder.com/150" alt="Collaboration 2" />
          <div>
            <p>Details:</p>
            <ul>
              <li>2 Promotional Videos on Social Media</li>
              <li>New Listing Photos</li>
              <li>In Exchange for Free Stay</li>
            </ul>
            <p>July 15 - 17 2022</p>
          </div>
        </div>
      </div>

      {/* Profile Upload */}
      <div className="influencer-profile-upload">
      <h3 style={{marginBottom:"10px"}}>Upload your profile picture</h3>
      <div  style={{marginBottom:"10px"}} className="influencer-profile-upload-container">
        <div className="influencer-profile-image-wrapper">
          {profileImage ? (
            <img src={profileImage} alt="Profile" className="influencer-profile-image" />
          ) : (
            <div className="influencer-placeholder-image">Upload</div>
          )}
          <label htmlFor="profileImageInput" className="influencer-upload-icon-wrapper">
            <FontAwesomeIcon icon={faCamera} className="influencer-upload-icon" />
          </label>
          <input
            type="file"
            id="influencer-profileImageInput"
            className="influencer-profile-image-input"
            onChange={handleImageUpload}
          />
        </div>
        <div className="profile-buttons">
          <button className="clear-button-influencer" onClick={handleClear}>Clear all</button>
          <button className="save-button-influencer">Save and continue</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BecomeInfluencer;
