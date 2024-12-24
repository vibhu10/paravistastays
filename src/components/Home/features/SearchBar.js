import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar-home">
      <div className="search-input where">
        <span>Where</span>
        <input type="text" placeholder="Search destinations" />
      </div>
      <div className="search-input">
        <span>Check in</span>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-input">
        <span>Check out</span>
        <input type="text" placeholder="Add dates" />
      </div>
      <div className="search-input who">
        <span>Who</span>
        <input type="text" placeholder="Add guests" />
      </div>
      <button className="search-button-home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2c8267"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
