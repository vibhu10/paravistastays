import React, { useState } from "react";
import "./PaymentAndFinance.css";

const PaymentAndFinance = () => {
  const initialData = Array(12).fill(null).map((_, i) => ({
    image: "https://via.placeholder.com/40",
    location: i % 2 === 0 ? "Miami, Florida" : "New York, USA",
    guest: i % 2 === 0 ? "Yonna (Guest)" : "James (Guest)",
    transitionId: `#01234567${i}`,
    dateTime: `Oct 29th, 2023 08:${29 + i} AM`,
    paymentMethod: i % 3 === 0 ? "Card Pay xxxxxxxxx2040" : "Bank Transfer xxxxxxxxx1234",
    status: i % 4 === 0 ? "Pending" : i % 4 === 1 ? "Canceled" : i % 4 === 2 ? "Refund" : "Paid",
  }));

  const [data, setData] = useState(initialData);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 4;

  const filteredData = data.filter((entry) => {
    const currentFilter = filter.toLowerCase();
    const entryStatus = entry.status.toLowerCase();

    return (
      (currentFilter === "all" || entryStatus === currentFilter) &&
      (entry.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.transitionId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.paymentMethod.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const handleFilter = () => {
    alert("Filter functionality is not implemented yet.");
  };

  return (
    <div className="PaymentAndFinance-container">
      <h2 className="PaymentAndFinance-title">Payment and Finance Management</h2>
<div style={{display: "flex", justifyContent: "space-between"}}>

      <div className="PaymentAndFinance-tabs">
        {"All,Pending,Canceled,Refund,Paid".split(",").map((status) => (
            <button
            key={status}
            className={`PaymentAndFinance-tab ${filter === status ? "active" : ""}`}
            onClick={() => {
              setFilter(status);
              setCurrentPage(1);
            }}
            >
            {status}
          </button>
        ))}
      </div>

      <div className="PaymentAndFinance-controls">
        <input
          type="text"
          placeholder="Search by guest, location, or payment method"
          className="PaymentAndFinance-search"
          value={searchTerm}
          onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            />
        <button className="PaymentAndFinance-filterButton" onClick={handleFilter}>
          Filter
        </button>
            </div>
      </div>

      <table className="PaymentAndFinance-table">
        <thead>
          <tr>
            <th>Booked</th>
            <th>Transition ID</th>
            <th>Transition Date / Time</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((entry, index) => (
            <tr key={index}>
              <td className="PaymentAndFinance-booked">
                <img src={entry.image} alt="location" className="PaymentAndFinance-image" />
                <div>
                  <p className="location-text">{entry.location}</p>
                  <p>{entry.guest}</p>
                </div>
              </td>
              <td className="transition-id">{entry.transitionId}</td>
              <td>{entry.dateTime}</td>
              <td>{entry.paymentMethod}</td>
              <td className={`status ${entry.status.toLowerCase()}`}>{entry.status}</td>
              <td className="actions">
                <button className="action-dots">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="PaymentAndFinance-pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentAndFinance;
