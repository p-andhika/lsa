import { createContext } from "react";

export const MessageContext = createContext({
  state: {},
  dispatch: {},
});

export const initialMessageState = {
  message: "Hello reducer",
  buttonText: "Default Button",
};

export const reducer = (state, action) => {
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
