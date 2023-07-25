import React, { useState, useEffect } from "react";
import toDoService from "./services/toDos";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";
import styles from "./styles/Todo.module.css";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ListItemIcon,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

// Import other components as needed

const App = () => {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
    toDoService.getAll().then((toDos) => setToDos(toDos));
  }, []);

  const ToDo = () => {
    return (
      <List className={styles.list}>
        <ListItem className={styles.listitem}>
          <div className={styles.textDivider}>
            <ListItemText
              primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              secondary="12/12/23"
            />
            <Divider className={styles.divider} />
          </div>

          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
        </ListItem>

        <ListItem className={styles.listitem}>
          <div className={styles.textDivider}>
            <ListItemText
              primary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              secondary="12/12/23"
            />
            <Divider className={styles.divider} />
          </div>

          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
        </ListItem>
      </List>
    );
  };

  return (
    <>
      <Typography variant="h4" fontWeight="bold">
        My ToDo - tasks
      </Typography>
      {/* <TodoForm /> */}
      <ToDo />
      {/* {toDos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))} */}
    </>
  );
};

export default App;
