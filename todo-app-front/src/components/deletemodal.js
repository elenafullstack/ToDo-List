import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import toDoService from "../services/toDos";
import styles from "../styles/todoform.module.css";
import {
  Box,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Container,
  Typography,
  MenuItem,
} from "@mui/material";

const DeleteModal = (props) => {
  const [open, setOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsSuccess(false);
  };

  const deleteTask = (event) => {


    toDoService.deleteToDo(props.todo).then((response) => {
      setIsSuccess(true);
      props.deleteToDo(props.todo);
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <DeleteIcon />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            boxShadow: 24,
            padding: 16,
            minWidth: 500,
            borderRadius: 4,
          }}
        >
          {isSuccess ? (
            <div className="success-message">
              ToDo-item deleted succesfully!
            </div>
          ) : (
            <Container className={styles.container}>
              <div className={styles.deleteform}>
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                className={styles.title}
              >
                Delete ToDo-task
              </Typography>
              <Typography
                variant="body1"
                component="p"
                className={styles.subtitle}
              >
                Delete task "{props.todo.title}"
              </Typography>
              <Button type="submit" variant="contained"
                      color="primary" onClick={deleteTask}>Delete task</Button>
              </div>
            </Container>
          )}
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
