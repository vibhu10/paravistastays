import React, { useState } from 'react';
import './BookingListGuest.css';

export default function BookingListGuest() {
  const allBookings = [
    {
      bookingId: '#s2000154',
      location: 'Treehouse in Mayfield, United Kingdom',
      imageSrc: '/path-to-treehouse-image.png', // Replace with your image URL
      dateOrder: 'Sunday, Oct 24th, 2023 08:29 AM',
      checkIn: 'Oct 29th, 2023 08:29 AM',
      checkOut: 'Oct 31st, 2023 08:29 AM',
      roomType: 'Queen A-2345',
      roomNumber: 'Room No. 0024',
      status: 'Booked',
    },
    {
      bookingId: '#s2000155',
      location: 'Treehouse in Mayfield, United Kingdom',
      imageSrc: '/path-to-treehouse-image.png', // Replace with your image URL
      dateOrder: 'Sunday, Oct 24th, 2023 08:29 AM',
      checkIn: 'Oct 29th, 2023 08:29 AM',
      checkOut: 'Oct 31st, 2023 08:29 AM',
      roomType: 'Queen A-2345',
      roomNumber: 'Room No. 0024',
      status: 'Canceled',
    },
    {
      bookingId: '#s2000156',
      location: 'Ocean Villa in Bali, Indonesia',
      imageSrc: '/path-to-villa-image.png', // Replace with your image URL
      dateOrder: 'Monday, Oct 25th, 2023 09:00 AM',
      checkIn: 'Nov 1st, 2023 02:00 PM',
      checkOut: 'Nov 5th, 2023 11:00 AM',
      roomType: 'Deluxe Suite',
      roomNumber: 'Room No. 0032',
      status: 'Booked',
    },
    {
      bookingId: '#s2000157',
      location: 'Mountain Lodge in Aspen, USA',
      imageSrc: '/path-to-lodge-image.png', // Replace with your image URL
      dateOrder: 'Wednesday, Nov 10th, 2023 11:15 AM',
      checkIn: 'Nov 15th, 2023 03:00 PM',
      checkOut: 'Nov 20th, 2023 10:00 AM',
      roomType: 'Presidential Suite',
      roomNumber: 'Room No. 0101',
      status: 'Canceled',
    },
    {
      bookingId: '#s2000158',
      location: 'Luxury Yacht in Monaco',
      imageSrc: '/path-to-yacht-image.png', // Replace with your image URL
      dateOrder: 'Thursday, Nov 12th, 2023 02:45 PM',
      checkIn: 'Nov 18th, 2023 12:00 PM',
      checkOut: 'Nov 22nd, 2023 10:00 AM',
      roomType: 'Ocean View Cabin',
      roomNumber: 'Cabin No. 007',
      status: 'Refund',
    },
    {
      bookingId: '#s2000159',
      location: 'Safari Lodge in Kenya',
      imageSrc: '/path-to-safari-image.png', // Replace with your image URL
      dateOrder: 'Saturday, Nov 14th, 2023 04:00 PM',
      checkIn: 'Nov 25th, 2023 01:00 PM',
      checkOut: 'Nov 30th, 2023 11:00 AM',
      roomType: 'Luxury Tent',
      roomNumber: 'Tent No. 008',
      status: 'Booked',
    },
    {
      bookingId: '#s2000160',
      location: 'City Apartment in Tokyo, Japan',
      imageSrc: '/path-to-apartment-image.png', // Replace with your image URL
      dateOrder: 'Sunday, Nov 15th, 2023 03:30 PM',
      checkIn: 'Dec 1st, 2023 04:00 PM',
      checkOut: 'Dec 5th, 2023 10:00 AM',
      roomType: 'Skyline Penthouse',
      roomNumber: 'Penthouse No. 11',
      status: 'Booked',
    },
    {
      bookingId: '#s2000161',
      location: 'Beach Resort in Maldives',
      imageSrc: '/path-to-resort-image.png', // Replace with your image URL
      dateOrder: 'Monday, Nov 20th, 2023 06:00 PM',
      checkIn: 'Dec 10th, 2023 02:00 PM',
      checkOut: 'Dec 15th, 2023 11:00 AM',
      roomType: 'Water Villa',
      roomNumber: 'Villa No. 021',
      status: 'Canceled',
    },
    {
      bookingId: '#s2000162',
      location: 'Desert Camp in Dubai, UAE',
      imageSrc: '/path-to-camp-image.png', // Replace with your image URL
      dateOrder: 'Tuesday, Nov 25th, 2023 08:45 PM',
      checkIn: 'Dec 20th, 2023 03:00 PM',
      checkOut: 'Dec 22nd, 2023 10:00 AM',
      roomType: 'Luxury Desert Tent',
      roomNumber: 'Tent No. 003',
      status: 'Refund',
    },
  ];
  
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 5;
  const totalPages = Math.ceil(allBookings.length / entriesPerPage);

  const currentBookings = allBookings.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="BookingListGuest-container">
      <h2 className="BookingListGuest-header">History Booking</h2>
      <table className="BookingListGuest-table">
        <thead className="BookingListGuest-thead">
          <tr className="BookingListGuest-tr">
            <th className="BookingListGuest-th">Booking Id</th>
            <th className="BookingListGuest-th">Location</th>
            <th className="BookingListGuest-th">Date Order</th>
            <th className="BookingListGuest-th">Check In</th>
            <th className="BookingListGuest-th">Check Out</th>
            <th className="BookingListGuest-th">Room Type</th>
            <th className="BookingListGuest-th">Status</th>
            <th className="BookingListGuest-th">Action</th>
          </tr>
        </thead>
        <tbody className="BookingListGuest-tbody">
          {currentBookings.map((booking, index) => (
            <tr key={index} className="BookingListGuest-tr">
              <td className="BookingListGuest-td" style={{color:"#00796b"}}>{booking.bookingId}</td>
              <td className="BookingListGuest-td">
                <div className="BookingListGuest-location">
                  <img
                    src={booking.imageSrc}
                    alt="Location thumbnail"
                    className="BookingListGuest-thumbnail"
                  />
                  <div className="BookingListGuest-location-text">
                    <span>{booking.location}</span>
                  </div>
                </div>
              </td>
              <td className="BookingListGuest-td">{booking.dateOrder}</td>
              <td className="BookingListGuest-td">{booking.checkIn}</td>
              <td className="BookingListGuest-td">{booking.checkOut}</td>
              <td className="BookingListGuest-td">
                {booking.roomType}
                <br />
                {booking.roomNumber}
              </td>
              <td
                className={`BookingListGuest-td BookingListGuest-status-${booking.status.toLowerCase()}`}
              >
                {booking.status}
              </td>
              <td className="BookingListGuest-td">
                <button className="BookingListGuest-action-button">⋮</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="BookingListGuest-pagination">
        <button
          className="BookingListGuest-pagination-button"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`BookingListGuest-pagination-button ${
              currentPage === i + 1
                ? 'BookingListGuest-pagination-active'
                : ''
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="BookingListGuest-pagination-button"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}