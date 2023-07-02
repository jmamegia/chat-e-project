import { useAppState } from "../store/appState";
const Messages = (props) => {
  const { user, text, date } = props.message;
  const { userName } = useAppState();
  const selectStyle = (user) => {
    const style = `text-slate-200 p-2 rounded w-6/12 ${
      user === userName ? "bg-blue-700 mr-auto" : "bg-green-700 ml-auto"
    }`;
    return style;
  };

  return (
    <div className={selectStyle(user)}>
      <b className="text-white">{user + ":"}</b>
      <div>{text}</div>
    </div>
  );
};

export default Messages;
