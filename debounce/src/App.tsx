import { ChangeEvent } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const { debounce } = useDebounce();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => console.log(e.target.value));
  };

  return (
    <>
      <input type="text" placeholder="enter text" onChange={onChange} />
    </>
  );
}

export default App;
