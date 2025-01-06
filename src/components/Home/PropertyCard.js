export default function PropertyCard({propertyData, selectedProperty}){

    return(
        <div className="hotel-data">
        {propertyData && propertyData.length > 0 ? (
          propertyData.map((property, index) => (
            <div
              key={index}
              className="hotel-card"
              onClick={() => selectedProperty(property)}
            >
              <img
                src={
                  property.coverPhotos?.cover?.image ||
                  "https://via.placeholder.com/150"
                }
                alt={`Image of ${property.title || "Unknown Property"}`}
              />
              <div id="hotel-detail">
                <h3 style={{ color: "#198E78" }}>
                  {property.title || "Unnamed Property"}
                </h3>
                <p>
                  Check-in:{" "}
                  {property.availability?.checkinTime
                    ? new Date(
                        property.availability.checkinTime
                      ).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "N/A"}
                </p>
                <p>
                  Min Nights: {property.availability?.minimumNight || "N/A"} |
                  Max Nights: {property.availability?.maximumNight || "N/A"}
                </p>
                <p
                  style={{
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  ${Math.floor(property.price?.BaseCharge || 0)}/night Total:{" "}
                  <span style={{ color: "#198E78" }}>
                    ${Math.floor(property.price?.PriceBeforeTax || 0)}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No properties available to display.</p>
        )}
      </div>
    );
}