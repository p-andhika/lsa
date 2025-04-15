import { createContext, useReducer } from "react";

import "./App.css";
import { Child } from "./components/Child";

export const MessageContext = createContext<{
  state: any;
  dispatch: any;
}>({ state: {}, dispatch: {} });

const initialState = {
  message: "Hello Reducer",
  buttonText: "Default Button Text",
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    case "CHANGE_BUTTON":
      return {
        ...state,
        buttonText: action.payload,
      };
    default:
      throw new Error();
  }
};

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
