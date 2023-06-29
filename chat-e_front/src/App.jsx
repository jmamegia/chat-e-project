import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("/");

function App() {
  const [outgoingMessage, setOutgoingMessage] = useState("");
  const [incomingMessages, setIncomingMessages] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", outgoingMessage);
    setIncomingMessages([
      ...incomingMessages,
      { user: "Me", message: outgoingMessage, date: new Date(Date.now()) },
    ]);
  };

  useEffect(() => {
    socket.on("message", (incomming) => reciveMessage(incomming));
    return () => {
      socket.off("message");
    };
  }, []);
  const reciveMessage = (message) => {
    setIncomingMessages((state) => [...state, message]);
  };

  const selectStyle = (user) => {
    const style = `text-white p-2 rounded w-6/12 ${
      user === "Me" ? "bg-blue-700 mr-auto" : "bg-green-700 ml-auto"
    }`;
    return style;
  };

  return (
    <div className="h-screen static flex justify-center items-end m-0 p-0 items-top bg-gray-800 gap-2">
      <div className="absolute flex flex-col overflow-auto h-full pb-20 items-center w-11/12  bg-gray-700 gap-3 p-5">
        {incomingMessages.length > 0
          ? incomingMessages.map((i) => (
              <div className={selectStyle(i.user)} key={i.date}>
                <b>{i.user + ":"}</b>
                <div>{i.message}</div>
              </div>
            ))
          : ""}
      </div>
      <form
        onSubmit={handleSubmit}
        className="sticky flex  justify-center aw-11/12 align-self-bottom w-full bottom-5"
      >
        <input
          className="text-white p-2 w-9/12  inline rounded-l outline-offset-0 outline-0 bg-gray-800"
          type="textarea"
          placeholder="Write a message..."
          onChange={(e) => setOutgoingMessage(e.target.value)}
        />
        <button className="rounded-r  w-1/12 bg-indigo-700  gap-1 m-0 p-0 text-white flex justify-center items-center">
          <span>Send</span> <span>✉</span>
        </button>
      </form>
    </div>
  );
}

export default App;
