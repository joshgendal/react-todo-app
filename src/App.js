import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  // const [todoText, setTodoText] = useState("");
  return (
    <div className="App">
      <h1>TODO app</h1>
      <Form setTodoArray={setTodoArray} />
      <Display todoArray={todoArray} setTodoArray={setTodoArray} />
    </div>
  );
}

export default App;
