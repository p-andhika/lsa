// import { useState } from "react";
// import { useDebounce } from "./hooks/useDebounce";

import { ChangeEvent, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounce((input: string) => {
    console.log(input);
  }, 500);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedValue(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        // onChange={(e) => setValue(e.target.value)}
        onChange={onChange}
      />
      <p>{query}</p>
    </>
  );
}

export default App;
