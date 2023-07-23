import React, { useState, useEffect } from "react";
import toDoService from "./services/toDos";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
// Import other components as needed

const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    toDoService.getAll().then((toDos) => setToDos(toDos));
  }, []);
  return (
    <>
      <TodoForm />
      {toDos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default App;
