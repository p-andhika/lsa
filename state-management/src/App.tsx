import { createContext, useReducer } from "react";

import "./App.css";
import { Child } from "./components/Child";
import { initialState, MessageContext, reducer } from "./context";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
