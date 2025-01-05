import React, { useState } from "react";

const Chat = () => {
  const [chats, setChats] = useState([
    { id: 1, name: "BPM 1", messages: ["Hello", "How can I help?"] },
    { id: 2, name: "BPM 2", messages: ["Hi", "What do you need?"] },
  ]);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (message.trim()) {
      setActiveChat((prev) => ({
        ...prev,
        messages: [...prev.messages, message, "System response"],
      }));
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <div className="sidebar">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className={`chat-item ${activeChat.id === chat.id ? "active" : ""}`}
            onClick={() => setActiveChat(chat)}
          >
            {chat.name}
          </div>
        ))}
      </div>
      <div className="chat-box">
        <div className="chat-messages">
          {activeChat.messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                index % 2 === 0 ? "user-message" : "system-message"
              }`}
            >
              {msg}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
