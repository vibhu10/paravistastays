import React, { useState } from "react";
import "./HostList.css";

// Correcting any typos in the data, e.g., "CCanceled" → "Canceled"
const bookings = [
  { id: "#GS-2234", name: "Yonna", avatar: "/image.png", dateOrder: "Sunday, Oct 24th, 2023", checkIn: "Oct 29th, 2023", checkOut: "Oct 31st, 2023", time: "08:29 AM", specialRequest: "View Notes", roomType: "Queen A-2345", roomNumber: "Room No. 0024", status: "Pending" },
  { id: "#GS-2235", name: "Michael", avatar: "/image.png", dateOrder: "Monday, Oct 25th, 2023", checkIn: "Nov 1st, 2023", checkOut: "Nov 3rd, 2023", time: "10:15 AM", specialRequest: "Extra Towels", roomType: "King B-1234", roomNumber: "Room No. 0025", status: "Canceled" },
  { id: "#GS-2236", name: "Sophia", avatar: "/image.png", dateOrder: "Wednesday, Oct 26th, 2023", checkIn: "Nov 2nd, 2023", checkOut: "Nov 5th, 2023", time: "03:40 PM", specialRequest: "Early Check-in", roomType: "Twin A-3345", roomNumber: "Room No. 0026", status: "Booked" },
  { id: "#GS-2237", name: "James", avatar: "/image.png", dateOrder: "Thursday, Oct 27th, 2023", checkIn: "Nov 3rd, 2023", checkOut: "Nov 7th, 2023", time: "09:55 AM", specialRequest: "Sea View", roomType: "King C-2234", roomNumber: "Room No. 0027", status: "Pending" },
  { id: "#GS-2238", name: "Emma", avatar: "/image.png", dateOrder: "Friday, Oct 28th, 2023", checkIn: "Nov 5th, 2023", checkOut: "Nov 8th, 2023", time: "02:30 PM", specialRequest: "Late Checkout", roomType: "Queen B-4545", roomNumber: "Room No. 0028", status: "Refund" },
  // Add more data as needed...
];

export default function HostList() {
  const [guests, setGuests] = useState(bookings);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const guestsPerPage = 5;

  // Filter and search logic
  const filteredGuests = guests.filter((guest) => {
    const guestStatus = guest.status.trim().toLowerCase(); // Normalize
    const currentFilter = filter.trim().toLowerCase(); // Normalize

    return (
      (currentFilter === "all" || guestStatus === currentFilter) &&
      (guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.id.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  // Pagination logic
  const indexOfLastGuest = currentPage * guestsPerPage;
  const indexOfFirstGuest = indexOfLastGuest - guestsPerPage;
  const currentGuests = filteredGuests.slice(indexOfFirstGuest, indexOfLastGuest);
  const totalPages = Math.ceil(filteredGuests.length / guestsPerPage);

  return (
    <div className="hostlist-container">
      <div className="hostlist-header">
        <h2>Host List</h2>
        <div className="hostlist-tabs">
          {["All", "Pending", "Booked", "Canceled", "Refund"].map((status) => (
            <button
              key={status}
              className={`hostlist-tab ${filter === status ? "active" : ""}`}
              onClick={() => {
                setFilter(status);
                setCurrentPage(1); // Reset to first page when filter changes
              }}
            >
              {status}
            </button>
          ))}
        </div>
        <div className="hostlist-actions">
          <input
            type="text"
            placeholder="Search"
            className="hostlist-search"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // Reset to first page when search changes
            }}
          />
          <button className="hostlist-generate-btn" onClick={() => alert("Report Generated!")}>
            Generate Report
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="hostlist-table">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>Guest</th>
            <th>Date Order</th>
            <th>Check In</th>
            <th>Check Out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentGuests.map((guest) => (
            <tr key={guest.id}>
              <td><input type="checkbox" /></td>
              <td className="hostlist-guest">
                <img src={guest.avatar} alt="Guest Avatar" />
                <div>
                  <p style={{ color: "#198E78" }}>{guest.id}</p>
                  <p>{guest.name}</p>
                </div>
              </td>
              <td>{guest.dateOrder}</td>
              <td>{guest.checkIn}</td>
              <td>{guest.checkOut}</td>
              <td>{guest.specialRequest}</td>
              <td>{guest.roomType}</td>
              <td className={`hostlist-status ${guest.status.toLowerCase()}`}>
                {guest.status}
              </td>
              <td className="hostlist-action-menu">
                <div className="hostlist-dots-menu">
                  <button className="hostlist-dots">...</button>
                  <div className="dropdown-content">
                    <button onClick={() => alert(`Edit ${guest.name}`)}>Edit</button>
                    <button onClick={() => setGuests(guests.filter((g) => g.id !== guest.id))}>
                      Delete
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="hostlist-pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}
