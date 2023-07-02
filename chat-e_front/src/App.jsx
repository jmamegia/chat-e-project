import LoginForm from "./components/LoginForm";
import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import { useAppState } from "./store/appState";

function App() {
  const { userName } = useAppState();
  return (
    <div className="h-screen static flex justify-center items-end m-0 p-0 items-top bg-gray-800 gap-2">
      <div className="absolute flex flex-col overflow-auto h-full pb-20 items-center w-11/12  bg-gray-700 gap-3 p-5">
        <MessageList />
      </div>
      {userName ? <MessageForm /> : <LoginForm />}
    </div>
  );
}

export default App;
