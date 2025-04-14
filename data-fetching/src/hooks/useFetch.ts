import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { queryClient } from "../main";

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
      placeholderData: [
        { id: "placeholder1", title: "Fetching...", completed: false },
        { id: "placeholder2", title: "Fetching...", completed: false },
      ],
    });

  const { mutate } = useMutation({
    mutationFn: createTodo,
    onSuccess: (data) => {
      // fetch current todos from cache
      const currentTodos: any = queryClient.getQueryData(["todos"]);

      // update todos cache with new todo
      queryClient.setQueryData(["todos"], [...currentTodos, data]);
    },
  });

  const addTodo = () => {
    mutate({
      title: "Groceries",
      description: "Complete the weekly grocry run",
    });
  };

  return { getTodos, addTodo };
};
