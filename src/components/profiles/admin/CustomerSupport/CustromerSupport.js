import React, { useState } from "react";
import "./CustromerSupport.css";

const CustomerSupport = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState(null);
  const [chatMessages, setChatMessages] = useState({
    Tina: [
      { sender: "Tina", message: "Hi! Can you help me with my booking?" },
      { sender: "You", message: "Sure! What seems to be the issue?" },
    ],
    Jacqueline: [
      { sender: "Jacqueline", message: "Can I get a discount for bulk booking?" },
    ],
    Michael: [
      { sender: "Michael", message: "Is there any update on my order?" },
    ],
    Sarah: [
      { sender: "Sarah", message: "Can you clarify the terms for cancellations?" },
    ],
  });
  const [people, setPeople] = useState([
    { name: "Jacqueline", unread: true, avatar: "https://i.pravatar.cc/48?u=jacqueline" },
    { name: "Tina", unread: false, avatar: "https://i.pravatar.cc/48?u=tina" },
    { name: "Michael", unread: true, avatar: "https://i.pravatar.cc/48?u=michael" },
    { name: "Sarah", unread: true, avatar: "https://i.pravatar.cc/48?u=sarah" },
  ]);

  const handleChatSelect = (person) => {
    setSelectedChat(person.name);
    setPeople((prevPeople) =>
      prevPeople.map((p) =>
        p.name === person.name ? { ...p, unread: false } : p
      )
    );
  };

  const handleSendMessage = (message) => {
    if (message && selectedChat) {
      setChatMessages((prev) => ({
        ...prev,
        [selectedChat]: [...prev[selectedChat], { sender: "You", message }],
      }));
    }
  };

  const filteredPeople = searchQuery
    ? people.filter((person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : people;

  return (
    <div className="CustomerSupport-container">
      {/* Inbox Section */}
      <div className="CustomerSupport-inbox">
        <div className="CustomerSupport-header">
          <h2>Inbox</h2>
          <div className="CustomerSupport-filters">
            <span>All</span>
            <span>Unread</span>
          </div>
        </div>
        <div className="CustomerSupport-search">
          <input
            type="text"
            placeholder="Search all messages"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="CustomerSupport-messageList">
          {filteredPeople.map((person) => (
            <div
              key={person.name}
              className={`CustomerSupport-message ${
                selectedChat === person.name ? "active" : ""
              }`}
              onClick={() => handleChatSelect(person)}
            >
              <div className="CustomerSupport-avatar">
                <img src={person.avatar} alt={`${person.name}'s avatar`} />
              </div>
              <div className="CustomerSupport-messageInfo">
                <h4>{person.name}</h4>
                <p>
                  {chatMessages[person.name]?.[0]?.message.slice(0, 30) || ""}
                </p>
                {person.unread && <span className="unread-badge">New</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Chat Section */}
      <div className="CustomerSupport-chat">
        {selectedChat ? (
          <>
            <div className="CustomerSupport-chatHeader">
              <h3>{selectedChat}</h3>
              <button className="CustomerSupport-viewOffer">View Offer</button>
            </div>
            <div className="CustomerSupport-chatBody">
              {chatMessages[selectedChat]?.map((chat, index) => (
                <div
                  key={index}
                  className={`CustomerSupport-messageItem ${
                    chat.sender === "You" ? "sent" : "received"
                  }`}
                >
                  <div className="CustomerSupport-avatar">
                    <img
                      src={
                        chat.sender === "You"
                          ? "https://i.pravatar.cc/48?u=you"
                          : people.find((p) => p.name === selectedChat)?.avatar
                      }
                      alt={`${chat.sender}'s avatar`}
                    />
                  </div>
                  <p>{chat.message}</p>
                </div>
              ))}
            </div>
            <div className="CustomerSupport-chatFooter">
              <input
                type="text"
                placeholder="Type Message"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage(e.target.value);
                    e.target.value = "";
                  }
                }}
              />
              <button
                onClick={(e) => {
                  const input = e.target.previousSibling;
                  handleSendMessage(input.value);
                  input.value = "";
                }}
              >
                &#9658;
              </button>
            </div>
          </>
        ) : (
          <div className="CustomerSupport-placeholder">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerSupport;
