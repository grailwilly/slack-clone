import { useState } from "react";
import { sendMessage } from "../api/api-send-message";

const SendMessage = () => {
  const [receiverId, setReceiverId] = useState("");
  const [message, setMessage] = useState("");

  const changeReceiverId = (e) => {
    setReceiverId(e.target.value);
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitMessage = (e) => {
    e.preventDefault();
    sendMessage(receiverId, message)
  }

  return (
    <div>
      <h1>Send Message</h1>
      <form onSubmit={submitMessage}>
        <input value={receiverId} onChange={changeReceiverId} placeholder="receiver_id" />
        <input value={message} onChange={handleMessage} placeholder="body" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}

export default SendMessage;