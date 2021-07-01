import React from "react";
import "../App.css";

const Display = (props) => {
  const { todoArray, setTodoArray } = props;
  const handleChangeCompleted = (e, index) => {
    e.preventDefault();
    let todoArrayCopy = [...todoArray];
    if (todoArrayCopy[index].completed) {
      todoArrayCopy[index].completed = false;
    } else {
      todoArrayCopy[index].completed = true;
    }
    setTodoArray(todoArrayCopy);
  };
  const handleDeleteTodo = (e, index) => {
    e.preventDefault();
    let todoArrayCopy = [...todoArray];
    const newTodoArray = todoArrayCopy.filter((todo, idx) => idx !== index);
    setTodoArray(newTodoArray);
  };
  return (
    <div>
      {todoArray.map((todo, index) => (
        <div key={index}>
          {todo.completed ? (
            <span className="completed-text">{todo.text}</span>
          ) : (
            <span>{todo.text}</span>
          )}
          <input
            type="checkbox"
            onClick={(e) => handleChangeCompleted(e, index)}
          />
          <button
            className="delete-btn"
            onClick={(e) => handleDeleteTodo(e, index)}
          >
            DELETE
          </button>
        </div>
      ))}
    </div>
  );
};

export default Display;
