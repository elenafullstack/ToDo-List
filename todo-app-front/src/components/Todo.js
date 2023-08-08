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
        <EditModal todo={props.todo} updateToDo={props.updateToDo} />
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
        <Button>
          <EditIcon />
        </Button>
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
        <Button>
          <EditIcon />
        </Button>
      </ListItemIcon>
    </ListItem>
  );
};

export { ToDoNotStarted, ToDoOnProgress, ToDoCompleted };
