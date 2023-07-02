import { useState } from "react";
import { useSocket } from "../hooks.js/useSocket";
import { useAppState } from "../store/appState";
import enter from "../assets/enter.png";

const LoginForm = () => {
  const { socket } = useSocket();
  const { setUserName } = useAppState();
  const [user, setUser] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("login");
    setUserName(user);
    setUser("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="sticky flex  justify-center aw-5/12 align-self-start w-full m-auto"
    >
      <input
        className="text-white p-2 w-3/12  inline rounded-l outline-offset-0 outline-0 bg-gray-800"
        type="textarea"
        value={user || ""}
        placeholder="Type your e-name..."
        onChange={(e) => setUser(e.target.value)}
      />
      <button className="rounded-r  pl-2 pr-2  bg-indigo-700  gap-1 m-0 p-0 text-white flex justify-center items-center">
        <img src={enter} alt="Send" title="send" />
      </button>
    </form>
  );
};

export default LoginForm;
