import { useState, createContext } from "react";

import "./App.css";
import { Child } from "./components/Child";

export const MessageContext = createContext<{
  message: string;
  setMessage: Function;
}>({ message: "", setMessage: () => {} });

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <MessageContext.Provider
      value={{
        message,
        setMessage,
      }}
    >
      <Child />
    </MessageContext.Provider>
  );
}

export default App;
