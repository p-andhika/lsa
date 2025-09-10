import { createContext, useReducer } from "react";

import "./App.css";
import { Child } from "./components/Child";
import { initialMessageState, MessageContext, reducer } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialMessageState);

  return (
    <MessageContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Child />
    </MessageContext.Provider>
  );
}

export default App;
