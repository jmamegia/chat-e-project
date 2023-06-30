import io from "socket.io-client";
import { useEffect } from "react";
import { useAppState } from "../store/appState";

export function useSocket() {
  const { addMessage, setSocket, socket } = useAppState();
  if (!socket) setSocket(io("/"));
  useEffect(() => {
    socket.on("message", (incomming) => reciveMessage(incomming));
    return () => {
      socket.off("message");
    };
  }, []);

  const reciveMessage = (message) => {
    addMessage(message);
  };

  return { socket };
}
