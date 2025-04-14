import { Suspense, lazy } from "react";
import "./App.css";

const Post = lazy(() => import("./components/Post"));

function App() {
  return (
    <Suspense fallback="Loading...">
      <Post />
    </Suspense>
  );
}

export default App;
