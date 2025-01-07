import React, { useState } from "react";
import './propertyAnenities.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faThermometerThreeQuarters,
  faSnowflake,
  faShower,
  faTshirt,
  faUtensils,
  faSnowflake as faRefrigerator,
  faBurn as faStove,
  faMugHot as faCoffeeMaker,
  faSoap,
  faFan as faDryer,
  faShirt as faIron,
  faTv,
  faSatelliteDish as faCableTv,
  faFilm as faStreaming,
  faBook,
  faChess,
  faVolumeUp as faSoundSystem,
  faGamepad,
  faBaby,
  faShieldAlt as faFireplaceGuards,
  faWheelchair as faStepFreeAccess,
  faArrowUp as faElevator,
  faRulerHorizontal as faWideHallway,
  faSwimmer as faPool,
  faUmbrellaBeach as faPatio,
  faCouch as faOutdoorFurniture,
  faFireAlt as faBbqGrill,
  faTree as faGarden,
  faUmbrella as faHammock,
  faExclamationTriangle as faDefaultIcon,
  faBicycle as faSportsEquipment,
  faShower as faOutdoorShower,
  faBell as faSmokeAlarm,
  faExclamationTriangle as faCarbonMonoxideAlarm,
  faFireExtinguisher,
  faKitMedical as faFirstAidKit,
  faVideo as faSecurityCameras,
  faLaptop as faDedicatedWorkspace,
  faParking as faFreeParking,
  faCarSide as faStreetParking,
  faMoneyBill as faPaidParking,
  faChargingStation as faEvCharger,
  faPaw as faPetFriendly,
  faCalendarAlt as faLongTermStays,
  faKey as faSelfCheckIn,
  faSuitcase as faLuggageDropOff,
  faGlassCheers as faHostBreakfast
} from "@fortawesome/free-solid-svg-icons";

export default function PropertyAmenities({ amenities }) {
  const [showMore, setShowMore] = useState(false);

  const amenitiesList = amenities.flatMap((category) => {
    return category.options.map((option) => {
      let icon;
      switch (option.toLowerCase()) {
        case "wifi":
          icon = faWifi;
          break;
        case "heating":
          icon = faThermometerThreeQuarters;
          break;
        case "air conditioning":
          icon = faSnowflake;
          break;
        case "hotwater":
          icon = faShower;
          break;
        case "towels":
          icon = faShower;
          break;
        case "extra pillows":
          icon = faTshirt;
          break;
        case "clothingstorage":
          icon = faTshirt;
          break;
        case "kitchen":
        case "cookingbasics":
        case "dishes":
        case "bbqutensils":
          icon = faUtensils;
          break;
        case "refrigerator":
          icon = faRefrigerator;
          break;
        case "stove":
          icon = faStove;
          break;
        case "coffeemaker":
          icon = faCoffeeMaker;
          break;
        case "shampoo":
        case "bodysoap":
        case "showergel":
          icon = faSoap;
          break;
        case "dryer":
          icon = faDryer;
          break;
        case "iron":
          icon = faIron;
          break;
        case "tv":
          icon = faTv;
          break;
        case "cabletv":
          icon = faCableTv;
          break;
        case "streaming":
          icon = faStreaming;
          break;
        case "books":
          icon = faBook;
          break;
        case "boardgames":
          icon = faChess;
          break;
        case "soundsystem":
          icon = faSoundSystem;
          break;
        case "gameconsole":
          icon = faGamepad;
          break;
        case "crib":
          icon = faBaby;
          break;
        case "fireplaceguards":
          icon = faFireplaceGuards;
          break;
        case "stepfreeaccess":
          icon = faStepFreeAccess;
          break;
        case "elevator":
          icon = faElevator;
          break;
        case "widehallway":
          icon = faWideHallway;
          break;
        case "pool":
          icon = faPool;
          break;
        case "patio":
          icon = faPatio;
          break;
        case "outdoorfurniture":
          icon = faOutdoorFurniture;
          break;
        case "bbqgrill":
          icon = faBbqGrill;
          break;
        case "garden":
          icon = faGarden;
          break;
        case "hammock":
          icon = faHammock;
          break;
        case "sportsequipment":
          icon = faSportsEquipment;
          break;
        case "outdoorshower":
          icon = faOutdoorShower;
          break;
        case "smokealarm":
          icon = faSmokeAlarm;
          break;
        case "carbonmonoxidealarm":
          icon = faCarbonMonoxideAlarm;
          break;
        case "fireextinguisher":
          icon = faFireExtinguisher;
          break;
        case "firstaidkit":
          icon = faFirstAidKit;
          break;
        case "securitycameras":
          icon = faSecurityCameras;
          break;
        case "dedicated workspace":
          icon = faDedicatedWorkspace;
          break;
        case "free parking on premises":
          icon = faFreeParking;
          break;
        case "streetparking":
          icon = faStreetParking;
          break;
        case "paid parking on premises":
          icon = faPaidParking;
          break;
        case "evcharger":
          icon = faEvCharger;
          break;
        case "petfriendly":
          icon = faPetFriendly;
          break;
        case "longtermstays":
          icon = faLongTermStays;
          break;
        case "selfcheckin":
          icon = faSelfCheckIn;
          break;
        case "luggagedropoff":
          icon = faLuggageDropOff;
          break;
        case "hostbreakfast":
          icon = faHostBreakfast;
          break;
        default:
          icon = faDefaultIcon;
      }

      return {
        label: option,
        icon,
      };
    });
  });

  const visibleAmenities = showMore ? amenitiesList : amenitiesList.slice(0, 10);

  return (
    <div className="selected-property-amenites-home">
      <h3 className="property-amenities-title">Amenities</h3>
      <div className="property-amenities-grid">
        {visibleAmenities.map((amenity, index) => (
          <div className="property-amenities-item" key={index}>
            <FontAwesomeIcon icon={amenity.icon} /> {amenity.label}
          </div>
        ))}
      </div>
      <button
        className="property-amenities-more-button"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? "Show less" : "More amenities"}
      </button>
      <a className="property-amenities-report-link" href="#">
        Report Property
      </a>
    </div>
  );
}
