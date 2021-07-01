import React, { useState } from "react";

const Form = (props) => {
  const { setTodoArray } = props;
  const [todoText, setTodoText] = useState("");
  // const {todoText, setTodoText} = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      text: todoText,
      completed: false,
    };
    setTodoArray((oldArray) => [...oldArray, newTodo]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todoText">Todo:</label>
        <input
          type="text"
          name="todoText"
          onChange={(e) => setTodoText(e.target.value)}
        />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default Form;
