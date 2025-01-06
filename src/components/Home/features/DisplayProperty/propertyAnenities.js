import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faKitchenSet,
  faParking,
  faBowlFood,
  faTv,
  faWifi,

  faChild,
  faTree,
  faFridge,
  faWind,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyAmenities() {

    return(
        <div className="property-amenities">
        <h3>Amenities</h3>
        <div className="amenities-grid">
          <div>
            <FontAwesomeIcon icon={faKitchenSet} /> Kitchen
          </div>
          <div>
            <FontAwesomeIcon icon={faParking} /> Free parking on premises
          </div>
          <div>
            <FontAwesomeIcon icon={faWind} /> Private patio or balcony
          </div>
          <div>
            <FontAwesomeIcon icon={faFire} /> Indoor fireplace
          </div>
          <div>
            <FontAwesomeIcon icon={faBowlFood} /> Hair dryer
          </div>
          <div>
            <FontAwesomeIcon icon={faWifi} /> Wifi
          </div>
          <div>
            <FontAwesomeIcon icon={faTv} /> TV
          </div>
          <div>
            <FontAwesomeIcon icon={faTree} /> Garden
          </div>
          <div>
            <FontAwesomeIcon icon={faChild} /> Children's books and toys
          </div>
         
        </div>
        <button className="more-amenities-button">More amenities</button>
        <a className="report-property-link" href="#">
          Report Property
        </a>
      </div>

    )
}