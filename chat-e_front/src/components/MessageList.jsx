import { useAppState } from "../store/appState";
import Message from "./Message";

const MessageList = () => {
  const { messages } = useAppState();

  return (
    <>
      {messages.length > 0
        ? messages.map((message) => (
            <Message message={message} key={message.date} />
          ))
        : ""}{" "}
    </>
  );
};

export default MessageList;
