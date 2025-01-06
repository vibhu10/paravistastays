export default function PropertyReservation() {


    return(
         <div className="reservation-widget">
                  <div className="price-section">
                    <span className="price">$275</span> <span>night</span>
                  </div>
                  <div className="reservation-dates">
                    <div>
                      <label>Check-in</label>
                      <input type="date" />
                    </div>
                    <div>
                      <label>Check-out</label>
                      <input type="date" />
                    </div>
                  </div>
                  <div>
                    <label>Guests</label>
                    <select>
                      <option>2 guests</option>
                      <option>1 guest</option>
                      <option>3 guests</option>
                    </select>
                  </div>
                  <button className="reserve-button">Reserve</button>
                  <p className="reservation-note">You won't be charged yet</p>
                  <div className="reservation-costs">
                    <p>$275 × 2 nights</p>
                    <p>$550</p>
                    <p>Paradise service fee</p>
                    <p>$93</p>
                    <hr />
                    <p className="total-cost">Total</p>
                    <p>$643</p>
                  </div>
                </div>
    )
}