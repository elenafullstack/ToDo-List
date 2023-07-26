import React, { useState, useEffect } from "react";
import toDoService from "./services/toDos";
import TodoForm from "./components/TodoForm";
import {
  ToDoNotStarted,
  ToDoOnProgress,
  ToDoCompleted,
} from "./components/ToDo";

import { Typography } from "@mui/material";

// Import other components as needed

const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    toDoService.getAll().then((toDos) => setToDos(toDos));
  }, []);

  const notStarted = toDos.filter(
    (task) => task.status === "Not started" || task.status === "Not Started"
  );
  const onProgress = toDos.filter((task) => task.status === "On progress");
  const completed = toDos.filter((task) => task.status === "Completed");

  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        My ToDo - tasks
      </Typography>

      {notStarted.map((todo, index) => (
        <ToDoNotStarted
          key={index}
          todo={todo}
          index={index}
          notStarted={notStarted}
        />
      ))}

      {onProgress.map((todo, index) => (
        <ToDoOnProgress key={index} todo={todo} />
      ))}

      {completed.map((todo, index) => (
        <ToDoCompleted key={index} todo={todo} />
      ))}

      {/* <TodoForm /> */}
    </>
  );
};

export default App;
