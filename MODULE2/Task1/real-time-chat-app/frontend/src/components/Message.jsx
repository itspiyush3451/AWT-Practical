function Message({ msg }) {
  return (
    <div className={`message ${msg.username === "System" ? "system" : ""}`}>
      <strong>{msg.username}:</strong> {msg.text}
    </div>
  );
}

export default Message;
