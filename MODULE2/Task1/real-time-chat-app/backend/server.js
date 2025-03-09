const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

app.use(cors());

// Store connected users
const users = {};

// Handle new connections
io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  // User joins chat
  socket.on("joinChat", (username) => {
    users[socket.id] = username;
    io.emit("userList", Object.values(users)); // Send updated user list to everyone
    io.emit("serverMessage", {
      text: `${username} joined the chat`,
      type: "info",
    });
  });

  // Handle messages
  socket.on("sendMessage", (data) => {
    io.emit("receiveMessage", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    const username = users[socket.id];
    delete users[socket.id];

    if (username) {
      io.emit("serverMessage", {
        text: `${username} left the chat`,
        type: "info",
      });
      io.emit("userList", Object.values(users)); // Update user list
    }

    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
