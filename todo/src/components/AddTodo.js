import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };
  const handleAdd = () => {
    setValue("");
    addTodo(value);
  };
  const handleClear = () => {
    window.location.reload();
  };

  return (
    <>
      <input
        id="new-todo"
        type="text"
        onChange={handleOnChange}
        value={value}
        placeholder="new todo"
      />
      <button id="add-todo" onClick={handleAdd}>
        add
      </button>
      <button id="clear" onClick={handleClear}>
        clear all
      </button>
    </>
  );
}

export default connect(null, { addTodo })(AddTodo);
