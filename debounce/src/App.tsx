import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  // const { debounce } = useDebounce();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  // debounce(() => console.log(e.target.value));
  // };

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{debouncedValue}</p>
    </>
  );
}

export default App;
