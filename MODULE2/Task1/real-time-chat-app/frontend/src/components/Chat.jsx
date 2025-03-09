import { useEffect, useState } from "react";
import io from "socket.io-client";
import Message from "./Message";

const socket = io("http://localhost:5000");

function Chat({ username }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.emit("joinChat", username);

    socket.on("receiveMessage", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    socket.on("serverMessage", (data) => {
      setMessages((prev) => [...prev, { username: "System", text: data.text }]);
    });

    socket.on("userList", (userList) => {
      setUsers(userList);
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("serverMessage");
      socket.off("userList");
    };
  }, [username]);

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = { username, text: message };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat-container">
      <h2>Real-Time Chat</h2>

      <div className="user-list">
        <strong>Users Online:</strong> {users.join(", ") || "No one online"}
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} msg={msg} />
        ))}
      </div>

      <div className="input-area">
        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
