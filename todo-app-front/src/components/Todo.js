import React from "react";
import styles from "../styles/Todo.module.css";
import {
  Button,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import EditModal from "./editmodal";
import DeleteModal from "./deletemodal";

const ToDoNotStarted = (props) => {
  return (
    <ListItem className={`${styles.listitem} ${styles.listitemNstarted}`}>
      <div className={styles.textDivider}>
        <ListItemText
          primary={props.todo.title}
          secondary={new Date(props.todo.deadline).toLocaleDateString()}
        />

        <Divider className={styles.divider} />
      </div>

      <ListItemIcon>
        <EditModal todo={props.todo} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo} />
      </ListItemIcon>
      <ListItemIcon>
        <DeleteModal todo={props.todo} deleteToDo={props.deleteToDo} />
      </ListItemIcon>
    </ListItem>
  );
};

const ToDoOnProgress = (props) => {
  return (
    <ListItem className={`${styles.listitem} ${styles.listitemOprogress}`}>
      <div className={styles.textDivider}>
        <ListItemText
          primary={props.todo.title}
          secondary={new Date(props.todo.deadline).toLocaleDateString()}
        />

        <Divider className={styles.divider} />
      </div>

      <ListItemIcon>
        <EditModal todo={props.todo} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      </ListItemIcon>
      <ListItemIcon>
        <DeleteModal todo={props.todo} deleteToDo={props.deleteToDo} />
      </ListItemIcon>
    </ListItem>
  );
};

const ToDoCompleted = (props) => {
  return (

    <ListItem className={`${styles.listitem} ${styles.listitemCompleted}`}>
      <div className={styles.textDivider}>
        <ListItemText
          primary={props.todo.title}
          secondary={new Date(props.todo.deadline).toLocaleDateString()}
        />

        <Divider className={styles.divider} />
      </div>

      <ListItemIcon>
        <EditModal todo={props.todo} updateToDo={props.updateToDo} deleteToDo={props.deleteToDo}/>
      </ListItemIcon>
      <ListItemIcon>
        <DeleteModal todo={props.todo} deleteToDo={props.deleteToDo} />
      </ListItemIcon>
    </ListItem>
  );
};

export { ToDoNotStarted, ToDoOnProgress, ToDoCompleted };
