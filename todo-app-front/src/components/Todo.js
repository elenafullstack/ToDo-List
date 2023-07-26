import React from "react";
import styles from "../styles/Todo.module.css";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

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
        <EditIcon />
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
        <EditIcon />
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
        <EditIcon />
      </ListItemIcon>
    </ListItem>
  );
};

export { ToDoNotStarted, ToDoOnProgress, ToDoCompleted };
