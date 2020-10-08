// import React from "react";
// import { Provider } from "react-redux";
// import "./App.css";
// import store from "./store.js";
// import TodoApp from "./components/TodoApp";

import React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilter from "./components/VisibilityFilter";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo 📒</h1>
        <div id="filter">
          <VisibilityFilter />
        </div>
        <div id="new">
          <AddTodo />
        </div>
        <div id="list">
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}

// function App() {
//   return (
//     <Provider store={store}>
//       <TodoApp />
//     </Provider>
//   )
// }

export default App;
