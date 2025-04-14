import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { getTodos, addTodo } = useFetch();
  const { isLoading, isError, data } = getTodos();

  if (isLoading) return <div>Request is loading!</div>;
  if (isError) return <div>Request has failed!</div>;

  return (
    <div>
      <h1>Todos</h1>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {data.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
