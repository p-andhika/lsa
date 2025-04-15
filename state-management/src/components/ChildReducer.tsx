import { useReducer } from "react";

const initialState = {
  message: "Hello Reducer",
  buttonText: "Change",
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
        buttonText: "Change Button",
      };
    default:
      throw new Error();
  }
};

export const ChildReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.message}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_MESSAGE",
            payload: "New Message",
          })
        }
      >
        {state.buttonText}
      </button>

      <button
        onClick={() => {
          dispatch({
            type: "CHANGE_BUTTON",
            payload: "Change using reducer",
          });
        }}
      >
        Change Button Text
      </button>
    </div>
  );
};
