import React from "react";
import "./ConfirmBookingPage.css";

const ConfirmBookingPage = ({ BookingDetails, title, fullDescription }) => {
  const { checkinDate, checkoutDate, guests, totalCost, serviceFee } = BookingDetails;

  // Helper function to format date
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" }); // e.g., "Jan"
    return `${day}${month}`;
  };

  // Handle Confirm and Pay
  const handleConfirmAndPay = () => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");

    if (!userLoggedIn) {
      alert("Please log in to proceed.");
    } else {
      // Proceed with booking logic
      alert("Booking confirmed!");
    }
  };

  return (
    <div className="confirmBookingPage">
      <div className="confirmBookingPage-content">
        {/* Left Section */}
        <div className="confirmBookingPage-left">
          <h1 className="confirmBookingPage-title">Confirm and pay</h1>

          <section className="confirmBookingPage-section">
            <h2 className="confirmBookingPage-section-title">Your trip</h2>
            <div className="confirmBookingPage-detail">
              <p className="confirmBookingPage-label">Dates</p>
              <div className="confirmBookingPage-detail-value">
                <p>
                  {formatDate(checkinDate)}-{formatDate(checkoutDate)}
                </p>
                <button className="confirmBookingPage-edit">Edit</button>
              </div>
            </div>
            <div className="confirmBookingPage-detail">
              <p className="confirmBookingPage-label">Guests</p>
              <div className="confirmBookingPage-detail-value">
                <p>{guests} guests</p>
                <button className="confirmBookingPage-edit">Edit</button>
              </div>
            </div>
          </section>

          <section className="confirmBookingPage-section">
            <h2 className="confirmBookingPage-section-title">Choose how to pay</h2>
            <div className="confirmBookingPage-payment-option">
              <input type="radio" id="pay-now" name="payment" defaultChecked />
              <label htmlFor="pay-now">Pay ${totalCost} now</label>
            </div>
          </section>

          <section className="confirmBookingPage-section">
            <h2 className="confirmBookingPage-section-title">Pay With</h2>
            <select className="confirmBookingPage-select">
              <option>Visa ...xxxx125</option>
              <option>Mastercard ...xxxx125</option>
            </select>
          </section>

          <p className="confirmBookingPage-disclaimer">
            We'll call or text you to confirm your number. Standard message and
            data rates apply. <a href="#">Privacy Policy</a>
          </p>

          <button className="confirmBookingPage-button" onClick={handleConfirmAndPay}>
            Confirm and pay
          </button>
        </div>

        {/* Right Section */}
        <div className="confirmBookingPage-right">
          <h3 className="confirmBookingPage-property-title">{title}</h3>
          <div className="confirmBookingPage-summary">
            <img
              src="/image (1).png"
              alt="Treehouse"
              className="confirmBookingPage-image"
            />
            <div className="confirmBookingPage-property">
              <p className="confirmBookingPage-property-type">{fullDescription}</p>
              <p className="confirmBookingPage-rating">
                <span>4.98</span> <span>118 Reviews</span>
              </p>
            </div>
          </div>
          <div className="confirmBookingPage-pricing">
            <div className="confirmBookingPage-pricing-row">
              <p>${totalCost / 2} × 2 nights</p>
              <p>${(totalCost / 2) * 2}</p>
            </div>
            <div className="confirmBookingPage-pricing-row">
              <p>Paradise service fee</p>
              <p>${serviceFee}</p>
            </div>
            <hr className="confirmBookingPage-divider" />
            <div className="confirmBookingPage-pricing-row total">
              <p>Total</p>
              <p>${totalCost}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBookingPage;
