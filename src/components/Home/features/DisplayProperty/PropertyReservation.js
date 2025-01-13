import { useState, useEffect } from "react";
import './PropertyReservation.css';

export default function PropertyReservation({ price, availability, setReservePage, setBookingDetails }) {
    const [checkinDate, setCheckinDate] = useState("");
    const [checkoutDate, setCheckoutDate] = useState("");
    const [selectedGuests, setSelectedGuests] = useState("");
    const [totalCost, setTotalCost] = useState(0);
    const [error, setError] = useState("");

    const nightlyRate = price.BaseCharge;
    const serviceFee = price.ServiceFees;

    useEffect(() => {
        calculateTotalCost();
    }, [checkinDate, checkoutDate]);

    const calculateTotalCost = () => {
        if (checkinDate && checkoutDate) {
            const checkin = new Date(checkinDate);
            const checkout = new Date(checkoutDate);
            const timeDiff = checkout - checkin;
            const numberOfNights = timeDiff / (1000 * 60 * 60 * 24);

            if (numberOfNights > 0) {
                const total = numberOfNights * nightlyRate + serviceFee;
                setTotalCost(total);
            } else {
                setTotalCost(0);
            }
        } else {
            setTotalCost(0);
        }
    };

    const getNumberOfNights = () => {
        if (checkinDate && checkoutDate) {
            const checkin = new Date(checkinDate);
            const checkout = new Date(checkoutDate);
            const timeDiff = checkout - checkin;
            const numberOfNights = timeDiff / (1000 * 60 * 60 * 24);
            return numberOfNights > 0 ? numberOfNights : 0;
        }
        return 0;
    };

    const handleReserve = () => {
        if (!checkinDate || !checkoutDate || !selectedGuests) {
            setError("Please select check-in, check-out dates, and the number of guests.");
            return;
        }

        setError("");
        const bookingDetails = {
            checkinDate,
            checkoutDate,
            guests: selectedGuests,
            totalCost,
            serviceFee,
        };
        setBookingDetails(bookingDetails);
        setReservePage(true);
    };

    return (
        <div className="reservation-for-selected-property">
            <div className="reservation-for-selected-property-price-section">
                <span className="reservation-for-selected-property-price">${nightlyRate}</span>
                <span className="reservation-for-selected-property-night">night</span>
            </div>

            <div className="reservation-for-selected-property-dates">
                <div className="reservation-for-selected-property-checkin">
                    <label>Check-in</label>
                    <input
                        type="date"
                        className="reservation-for-selected-property-date-input"
                        value={checkinDate}
                        onChange={(e) => setCheckinDate(e.target.value)}
                    />
                </div>
                <div className="reservation-for-selected-property-checkout">
                    <label>Check-out</label>
                    <input
                        type="date"
                        className="reservation-for-selected-property-date-input"
                        value={checkoutDate}
                        onChange={(e) => setCheckoutDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="reservation-for-selected-property-guests">
                <select
                    className="reservation-for-selected-property-guest-select"
                    value={selectedGuests}
                    onChange={(e) => setSelectedGuests(e.target.value)}
                >
                    <option disabled value="">
                        Select Guests
                    </option>
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                </select>
            </div>

            {error && <p className="reservation-for-selected-property-error" style={{color:"red"}}>{error}</p>}

            <button
                className="reservation-for-selected-property-reserve-button"
                onClick={handleReserve}
            >
                Reserve
            </button>

            <p className="reservation-for-selected-property-note">You won't be charged yet</p>

            <div className="reservation-for-selected-property-costs">
                <div className="reservation-for-selected-property-line-item">
                    <p className="reservation-for-selected-property-item-description">
                        ${nightlyRate} × {getNumberOfNights()} nights
                    </p>
                    <p className="reservation-for-selected-property-item-cost">
                        ${getNumberOfNights() * nightlyRate}
                    </p>
                </div>
                <div className="reservation-for-selected-property-line-item">
                    <p className="reservation-for-selected-property-item-description">
                        Paradise service fee
                    </p>
                    <p className="reservation-for-selected-property-item-cost">
                        ${serviceFee}
                    </p>
                </div>
                <hr className="reservation-for-selected-property-divider" />
                <div className="reservation-for-selected-property-total">
                    <p className="reservation-for-selected-property-total-label">Total</p>
                    <p className="reservation-for-selected-property-total-cost">${totalCost}</p>
                </div>
            </div>
        </div>
    );
}
