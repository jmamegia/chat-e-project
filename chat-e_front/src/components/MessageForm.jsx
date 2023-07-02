import { useState } from "react";
import { useSocket } from "../hooks.js/useSocket";
import { useAppState } from "../store/appState";
import send from "../assets/send.png";

const MessageForm = () => {
  const { socket } = useSocket();
  const { addMessage, userName } = useAppState();
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { text: outgoingMessage, user: userName });
    addMessage({
      user: userName,
      text: outgoingMessage,
      date: new Date(Date.now()),
    });
    setOutgoingMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sticky flex  justify-center aw-11/12 align-self-bottom w-full bottom-5"
    >
      <input
        className="text-white p-2 w-9/12  inline rounded-l outline-offset-0 outline-0 bg-gray-800"
        type="textarea"
        value={outgoingMessage || ""}
        placeholder="Write a message..."
        onChange={(e) => setOutgoingMessage(e.target.value)}
      />
      <button className="rounded-r  w-20  bg-indigo-700  gap-1 m-0 p-0 text-white flex justify-center items-center">
        <img src={send} alt="Send" title="send" />
      </button>
    </form>
  );
};

export default MessageForm;
