# Real-Time Chat Application

A real-time chat application built using **Node.js, WebSockets, and React (Vite)**. It allows multiple users to connect dynamically, send messages, and see who is online.

## Features

- Real-time messaging with **WebSockets**
- Tracks online users dynamically
- Notifies when users join or leave the chat
- Uses **Socket.io** for real-time communication
- Styled UI with responsive chat layout

## Tech Stack

- **Backend:** Node.js, Express, Socket.io
- **Frontend:** React (Vite), Socket.io-client

## Project Structure

```
real-time-chat-app/
│── backend/
│   ├── server.js  # Node.js server with WebSockets
│   ├── package.json  # Backend dependencies
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx  # Chat UI with Socket.io integration
│   │   │   ├── Message.jsx  # Message component
│   │   ├── App.jsx  # Main entry point
│   │   ├── main.jsx  # React root file
│   ├── package.json  # Frontend dependencies
│── README.md  # Project documentation
```

## Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/itspiyush3451/real-time-chat-app.git
cd real-time-chat-app
```

### 2️⃣ Backend Setup

```sh
cd backend
npm install
node server.js
```

_Server runs at **http://localhost:5000**_

### 3️⃣ Frontend Setup

```sh
cd ../frontend
npm install
npm run dev
```

_App runs at **http://localhost:5173**_

## Testing Multi-User Chat

### Method 1: Open Multiple Browser Tabs

1. Start both the **backend** (`node server.js`) and **frontend** (`npm run dev`).
2. Open **http://localhost:5173** in **two or more tabs**.
3. Enter different usernames in each tab.
4. Send messages and verify that they appear across all tabs in real-time.

### Other Methods

1. Open in **different browsers (Chrome, Firefox, etc.)**.
2. Open in **incognito mode** to simulate multiple users.
3. Test on **PC and mobile** by connecting via local network.
