import { useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon/ditto",
        );
        console.log(response.data);
      } catch (error) {
        console.error("There was a problem", error);
      }
    }

    fetchData();
  }, []);

  return <div>Home</div>;
}

export default App;
