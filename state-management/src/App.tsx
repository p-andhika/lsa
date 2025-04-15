import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={() => setMessage("Hello React!")}>Change message</button>
    </div>
  );
}

export default App;
