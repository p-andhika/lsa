import { createContext } from "react";

export const MessageContext = createContext<{
  state?: typeof initialState | null;
  dispatch: any;
}>({
  state: null,
  dispatch: {},
});

export const initialState = {
  message: "Hello reducer",
  buttonText: "Default Button",
};

export const reducer = (state: typeof initialState, action) => {
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
