import { ChangeEvent, useState } from "react";
import "./App.css";
import { useDebounceCallback } from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState("");
  const [debounced] = useDebounceCallback((str: string) => {
    setValue(str);
  }, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounced(e.currentTarget.value);
  };

  return (
    <>
      <input type="text" placeholder="enter text" onChange={onChange} />
      <p>{value}</p>
    </>
  );
}

export default App;
