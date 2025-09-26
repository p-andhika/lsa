import { JSX, Suspense, lazy, useState } from "react";
import "./App.css";

const LazyPost = lazy(() => import("./components/Post"));

function App() {
  const [Comment, setComment] = useState<null | (() => JSX.Element)>(null);

  const onClick = () => {
    import("./components/Comment").then((module) => {
      setComment(() => module.default);
    });
  };

  return (
    <>
      <button onClick={onClick}>Show Comment</button>
      <Suspense fallback="Loading...">
        <Suspense fallback={<div>Lazy loading...</div>}>
          <LazyPost />
        </Suspense>
      </Suspense>
      {Comment && <Comment />}
    </>
  );
}

export default App;
