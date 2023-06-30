const Messages = (props) => {
  const { user, message, date } = props.message;
  const selectStyle = (user) => {
    const style = `text-slate-200 p-2 rounded w-6/12 ${
      user === "Me" ? "bg-blue-700 mr-auto" : "bg-green-700 ml-auto"
    }`;
    return style;
  };

  return (
    <div className={selectStyle(user)}>
      <b className="text-white">{user + ":"}</b>
      <div>{message}</div>
    </div>
  );
};

export default Messages;
