import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const [todoArray, setTodoArray] = useState([]);
  return (
    <div className="App">
      <h1>TODO app</h1>
      <Form setTodoArray={setTodoArray} />
    </div>
  );
}

export default App;
