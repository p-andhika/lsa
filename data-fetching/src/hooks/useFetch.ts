import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
};

export const useFetch = () => {
  const getTodos = () =>
    useQuery({
      queryKey: ["todos"],
      queryFn: fetchTodos,
    });

  return { getTodos };
};
