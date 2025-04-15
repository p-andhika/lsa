import { useState } from "react";

import "./App.css";
import { Child } from "./components/Child";

function App() {
  const [message, setMessage] = useState("Hello World!");

  return <Child message={message} onClick={() => setMessage("Hello React!")} />;
}

export default App;
