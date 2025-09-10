import { useContext } from "react";
import { MessageContext } from "../context";

export const Child = () => {
  const { state, dispatch } = useContext(MessageContext);

  return (
    <div>
      <h1>{state.message}</h1>

      <button
        onClick={() =>
          dispatch({ type: "CHANGE_MESSAGE", payload: "Hello React!" })
        }
      >
        {state.buttonText}
      </button>

      <button
        onClick={() => dispatch({ type: "CHANGE_BUTTON", payload: "Changed" })}
      >
        Change button text
      </button>
    </div>
  );
};
