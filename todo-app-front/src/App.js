import React, { useState, useEffect } from "react";
import toDoService from "./services/toDos";
import MyModal from "./components/mymodal";
import Instructions from "./components/Instructions";
import {
  ToDoNotStarted,
  ToDoOnProgress,
  ToDoCompleted,
} from "./components/ToDo";

import { Typography, List, ListItem, ListItemIcon } from "@mui/material";
import styles from "./styles/Todo.module.css";

// Import other components as needed

const App = () => {
  const [toDos, setToDos] = useState([]);

  const addNewToDo = (newToDo) => {
    setToDos((prevToDos) => [...prevToDos, newToDo]);
  };

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

      <Instructions />

      <List>
        <ListItem className={styles.firstItem}>
          <ListItemIcon>
            <MyModal addNewToDo={addNewToDo} />
          </ListItemIcon>
        </ListItem>
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
      </List>

      {/* <TodoForm /> */}
    </>
  );
};

export default App;
