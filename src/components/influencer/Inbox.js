import React, { useState } from "react";
import "./Inbox.css"; // Import a CSS file for styling

const Inbox = () => {
  const initialMessages = [
    {
      id: 1,
      name: "Jacqueline",
      message: "Lorem Ipsum is simply dummy text of the print...",
      date: "Yesterday",
      location: "29-31 Aug Miami, Florida",
      avatar: "https://via.placeholder.com/50", // Replace with the real avatar URL
      chat: [
        {
          type: "received",
          text: "Hi Jacqueline! How are you?",
          time: "5:00 PM",
        },
        {
          type: "sent",
          text: "I'm good, thank you! How about you?",
          time: "5:05 PM",
        },
      ],
    },
    {
      id: 2,
      name: "Tina",
      message: "Lorem Ipsum is simply dummy text of the print...",
      date: "Yesterday",
      location: "29-31 Aug Miami, Florida",
      avatar: "https://via.placeholder.com/50", // Replace with the real avatar URL
      chat: [
        {
          type: "received",
          text: "Hello Tina! I sent the files yesterday.",
          time: "2:30 PM",
        },
        {
          type: "sent",
          text: "Got it, thanks!",
          time: "2:35 PM",
        },
      ],
    },
    {
      id: 3,
      name: "Jacqueline",
      message: "Lorem Ipsum is simply dummy text of the print...",
      date: "Yesterday",
      location: "29-31 Aug Miami, Florida",
      avatar: "https://via.placeholder.com/50", // Replace with the real avatar URL
      chat: [
        {
          type: "received",
          text: "Hey Jacqueline! Long time no see.",
          time: "1:00 PM",
        },
        {
          type: "sent",
          text: "I know! How have you been?",
          time: "1:10 PM",
        },
      ],
    },
  ];

  const [messages, setMessages] = useState(initialMessages);
  const [selectedPerson, setSelectedPerson] = useState(messages[0]); // Default to the first person
  const [newMessage, setNewMessage] = useState(""); // State for new message input
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Popup visibility state
  const handlePreviewClick = () => {
    setIsPreviewPopupVisible(true);
  };

  const handleClosePreviewPopup = () => {
    setIsPreviewPopupVisible(false);
  };

  const [isPreviewPopupVisible, setIsPreviewPopupVisible] = React.useState(false);
  const handlePersonClick = (person) => {
    setSelectedPerson(person);
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const newChat = {
        type: "sent",
        text: newMessage,
        time: new Date().toLocaleTimeString(),
      };

      const updatedMessages = messages.map((msg) =>
        msg.id === selectedPerson.id
          ? { ...msg, chat: [...msg.chat, newChat] }
          : msg
      );

      setMessages(updatedMessages);
      setNewMessage("");
    }
  };

  const handleViewOffer = () => {
    setIsPopupVisible(true);
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="inbox-container">
      {/* Sidebar */}
      <div className="inbox-sidebar">
        <h2>Inbox</h2>
        <input
          type="text"
          placeholder="Search all messages"
          className="inbox-search"
        />
        <div className="inbox-tabs">
          <button className="inbox-tab active">All</button>
          <button className="inbox-tab">Unread</button>
        </div>
        <div className="inbox-messages-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`inbox-message-item ${
                selectedPerson.id === msg.id ? "active-message" : ""
              }`}
              onClick={() => handlePersonClick(msg)}
            >
              <img src={msg.avatar} alt="Avatar" className="inbox-avatar" />
              <div className="inbox-message-details">
                <p className="inbox-name">{msg.name}</p>
                <p className="inbox-preview">{msg.message}</p>
                <p className="inbox-location">{msg.location}</p>
              </div>
              <p className="inbox-date">{msg.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="inbox-chat">
        <div className="inbox-chat-header">
          <img
            src={selectedPerson.avatar}
            alt="Avatar"
            className="chat-avatar"
          />
          <p className="chat-name">{selectedPerson.name}</p>
          <button className="view-offer-button" onClick={handleViewOffer}>
            View Offer
          </button>
        </div>
        <div className="inbox-chat-body">
          {selectedPerson.chat.map((chat, index) => (
            <div
              key={index}
              className={
                chat.type === "sent" ? "sent-message" : "received-message"
              }
            >
              <p
                className={`chat-message ${
                  chat.type === "received" ? "received" : "sent"
                }`}
              >
                {chat.text}
              </p>
              <p className="chat-time">{chat.time}</p>
            </div>
          ))}
        </div>
        <div className="inbox-chat-footer">
          <input
            type="text"
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Type Message"
            className="chat-input"
          />
          <button className="chat-send-button" onClick={handleSendMessage}>
            ➤
          </button>
        </div>
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div className="inbox-popup-overlay-1">
          <div className="inbox-popup">
            <button className="inbox-close-popup" onClick={handleClosePopup}>
              &#x2715;
            </button>
            <div className="inbox-popup-image">
              <img
                src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
                alt="Scenic property"
              />
            </div>
            <div className="inbox-popup-content">
              <h3>Exclusive Offer:</h3>
              <p className="inbox-popup-title">
                <strong>Stay Longer, Save More!</strong>
              </p>
              <p>
                Promote Miami, Florida and enjoy <strong>15% off</strong> your next stay. Comfortable rooms, prime location, and free perks await!
              </p>
              <p className="inbox-popup-expiry">
                <em>Limited time only – promote and book by 25/09/2024</em>
              </p>
              <div className="inbox-popup-buttons">
                <button className="inbox-offer-button inbox-preview" onClick={handlePreviewClick}>Preview Property</button>
                <button className="inbox-offer-button inbox-accept">Accept Offer</button>
                <button className="inbox-offer-button inbox-decline">Decline Offer</button>
                <button className="inbox-offer-button inbox-counter">Counter Offer</button>
              </div>
            </div>
          </div>
        </div>
      )}
{isPreviewPopupVisible && (
  <div className="inbox-popup-overlay-2">
    <div className="inbox-preview-popup">
      <button className="inbox-close-popup" onClick={handleClosePreviewPopup}>
        &#x2715;
      </button>
      <div className="inbox-preview-header">
        <h3 className="inbox-preview-title">Confirmed Reservation</h3>
        <p className="inbox-checkin-info">Check-in today after <strong>4:00 PM</strong></p>
      </div>
      <div className="inbox-preview-body">
        <img
          src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
          alt="Confirmed Property"
          className="inbox-preview-image"
        />
        <div className="inbox-preview-details">
          <div className="inbox-detail-column">
            <p><strong>Check-in time</strong>: 12:00 pm - 2:00 pm</p>
            <p><strong>Check-in</strong>: Tomorrow</p>
          </div>
          <div className="inbox-detail-column">
            <p><strong>Checkout time</strong>: 12:00 pm</p>
            <p><strong>Checkout Date</strong>: Tue, 27 Aug, 2024</p>
          </div>
        </div>
        <p className="inbox-booking-date"><strong>Booking date</strong>: Tue, 27 Aug, 2024</p>
        <div className="inbox-offer-details">
          <p className="inbox-offer-title">Offer Details</p>
          <ul>
            <li>2 Promotional Videos on Social Media</li>
            <li>New Listing Photos</li>
          </ul>
          <p className="inbox-offer-condition">In Exchange for Free Stay</p>
        </div>

        {/* "Things to Know" Section Inside Popup */}
        <div className="things-to-know-popup">
          <h3 className="things-to-know-title">Things to know</h3>
          <div className="things-to-know-columns">
            {/* House Rules Section */}
            <div className="things-to-know-column">
              <h4>House rules</h4>
              <ul>
                <li>2 guests maximum</li>
                <li>Pets allowed</li>
                <li>No parties or events</li>
              </ul>
            </div>

            {/* Safety and Property Section */}
            <div className="things-to-know-column">
              <h4>Safety & property</h4>
              <ul>
                <li>Carbon monoxide alarm not reported</li>
                <li>Smoke alarm</li>
                <li>Not suitable for children and infants</li>
              </ul>
            </div>
          </div>

          {/* Additional Details */}
          <div className="things-to-know-additional">
            <div>
              <h4>Getting there</h4>
              <p>Address: 1947 Northstar Way</p>
            </div>
            <div>
              <h4>How to get inside</h4>
              <p>Details for an easy check-in</p>
            </div>
            <div>
              <h4>Connecting to wifi</h4>
              <p>Network: BlueClearSky</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}




    </div>
  );
};

export default Inbox;