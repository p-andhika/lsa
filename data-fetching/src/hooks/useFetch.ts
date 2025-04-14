import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchTodos = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos",
  );
  return response.data;
};

const createTodo = async (newTodo: any) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    newTodo,
  );

  return response.data;
};

export const useFetch = () => {
  const getTodos = () =>
    useQuery({
      queryKey: ["todos"],
      queryFn: fetchTodos,
      staleTime: 1000 * 60, // 1 minute
    });

  const { mutate } = useMutation({ mutationFn: createTodo });

  const addTodo = () => {
    mutate({
      title: "Groceries",
      description: "Complete the weekly grocry run",
    });
  };

  return { getTodos, addTodo };
};
