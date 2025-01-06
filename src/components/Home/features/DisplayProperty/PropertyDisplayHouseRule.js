// PropertyDisplayHouseRule.js
import React, { useState } from "react";
import "./PropertyDisplayHouseRule.css";

const PropertyDisplayHouseRule = () => {
  const [showAllRules, setShowAllRules] = useState(false);

  const handleShowMore = () => {
    setShowAllRules(!showAllRules);
  };

  return (
    <div className="PropertyDisplayHouseRule-container">
      <h1 className="PropertyDisplayHouseRule-title">House Rules</h1>
      <p className="PropertyDisplayHouseRule-subtitle">Check in Check out</p>

      <div className="PropertyDisplayHouseRule-rule">
        <h2 className="PropertyDisplayHouseRule-ruleTitle">Rule 1</h2>
        <p className="PropertyDisplayHouseRule-ruleText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has...
        </p>
      </div>

      <div className="PropertyDisplayHouseRule-rule">
        <h2 className="PropertyDisplayHouseRule-ruleTitle">Rule 2</h2>
        <p className="PropertyDisplayHouseRule-ruleText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has...
        </p>
      </div>

      {showAllRules && (
        <div className="PropertyDisplayHouseRule-rule">
          <h2 className="PropertyDisplayHouseRule-ruleTitle">Rule 3</h2>
          <p className="PropertyDisplayHouseRule-ruleText">
            This is additional rule content that will appear when "More.." is
            clicked.
          </p>
        </div>
      )}

      <button 
        onClick={handleShowMore} 
        className="PropertyDisplayHouseRule-more"
      >
        {showAllRules ? "Show Less" : "More.."}
      </button>
    </div>
  );
};

export default PropertyDisplayHouseRule;
