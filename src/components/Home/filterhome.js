import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './filterhome.css'
export default function FilterHome
({handleScrollLeft, handleScroll, handleFilterClick, scrollOffset,filters}) {
    return(
        <div className="container-filter-buttons">
        <button className="compare-button">3/3 | Compare</button>
        <button className="scroll-button" onClick={handleScrollLeft}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <div className="filter-wrapper">
          <div
            className="filter-row"
            style={{
              transform: `translateX(-${scrollOffset}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {filters.map((filter, index) => (
              <div key={index} className="filter-item">
                <button
                  className="btn btn-outline-primary d-flex flex-column align-items-center"
                  onClick={() => handleFilterClick(filter)}
                  onMouseEnter={(e) => {
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.transform = "scale(1.0)";
                  }}
                  onMouseLeave={(e) => {
                    const icon = e.currentTarget.querySelector("svg");
                    if (icon) icon.style.transform = "scale(1)";
                  }}
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "transform 0.3s ease",
                  }}
                >
                  <FontAwesomeIcon
                    icon={filter.icon}
                    size="2x"
                    style={{
                      color: "gray",
                      transition: "transform 0.3s ease, color 0.3s ease",
                    }}
                  />
                  <span
                    style={{
                      color: "gray",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {filter.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        <button className="scroll-button" onClick={handleScroll}>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
      
    )
}