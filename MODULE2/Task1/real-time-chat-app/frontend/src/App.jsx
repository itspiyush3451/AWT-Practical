import { useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [username, setUsername] = useState("");
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <div className="app">
      {!isChatActive ? (
        <div className="login">
          <h2>Enter your name to join chat</h2>
          <input
            type="text"
            placeholder="Your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setIsChatActive(true)}>Join</button>
        </div>
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

export default App;
