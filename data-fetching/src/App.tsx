import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("There was a problem", error);
      }
    }

    fetchData();
  }, []);

  return <div>Home</div>;
}

export default App;
