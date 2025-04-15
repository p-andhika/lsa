import { useContext } from "react";
import { MessageContext } from "../App";

export const Child = () => {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div>
      <h1>{message}</h1>

      <button onClick={() => setMessage("Hello React!")}>Change message</button>
    </div>
  );
};
