import { useContext } from "react";
import { MessageContext } from "../App";

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
        Change message
      </button>
    </div>
  );
};
