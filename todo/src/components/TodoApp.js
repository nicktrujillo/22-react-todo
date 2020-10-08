import React from "react";
import { useExample } from "../hooks";

export default () => {
  const { example, setExample, exampleAsync, list } = useExample();
  const { filter, setTodo, togTodo, setFilter, todos } = useTodoApp();
  return (
    <div>
      <h2>{example}</h2>
      <button onClick={() => setExample("foo")}>Example sync</button>
      <button onClick={exampleAsync}>Example async</button>

      <button onClick={() => setTodo("text")}>Add Todo</button>
      <h2>{todos}</h2>
      <button onClick={exampleAsync}>Example async</button>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
