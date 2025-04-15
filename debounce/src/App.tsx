// import { useState } from "react";
// import { useDebounce } from "./hooks/useDebounce";

import { ChangeEvent, useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState("");
  // const debouncedValue = useDebounce(value, 500);

  const debounce = useDebounce();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => setValue(e.target.value));
  };

  return (
    <>
      <input
        type="text"
        placeholder="enter text"
        // onChange={(e) => setValue(e.target.value)}
        onChange={onChange}
      />
      <p>{value}</p>
    </>
  );
}

export default App;
