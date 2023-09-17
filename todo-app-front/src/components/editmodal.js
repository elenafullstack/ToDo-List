import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import toDoService from "../services/toDos";
import styles from "../styles/todoform.module.css";
import dayjs from "dayjs";

import {
  Box,
  TextField,
  FormControl,
  FormHelperText,
  Button,
  Container,
  Typography,
  MenuItem

} from "@mui/material";

const statuses = [
  {
    value: "Not started",
  },
  {
    value: "In progress",
  },
  {
    value: "Completed",
  },
];

// const TodoForm = () => {
//   return <></>;
// };

const EditModal = (props) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState(props.todo.status);
  const [deadline, setDeadline] = useState(dayjs(props.todo.deadline));
  const [name, setName] = useState(props.todo.title);
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage]= useState("")

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (date) => {
    setDeadline(date);
  };



  const deleteTask = (event) => {
    event.preventDefault();

    toDoService.deleteToDo(props.todo).then((response) => {
      setIsSuccess(true);
      setMessage("ToDo-task deleted succesfully")
      console.log(message)
      props.deleteToDo(props.todo);
    });
  };

  const isFormFilled = name !== "" && deadline !== null && status !== "";
  const handleSubmit = (event) => {
    event.preventDefault();
    // Conditionally handle form submission or set the error
    toDoService
      .updateToDo(props.todo.id, {
        title: name,
        deadline: deadline,
        status: status,
      })
      .then((response) => {
        console.log(response.data)
        props.updateToDo(response.data); // Update the todo in the parent component
        setIsSuccess(true);
        setMessage("ToDo-task edited succesfully")
      });
    // Perform further processing or submit the form data
  };

  const handleOpen = () => {
    setName(props.todo.title)
    setDeadline(dayjs(props.todo.deadline))
    setStatus(props.todo.status)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsSuccess(false);
  };

  return (

    <div>
      <Button onClick={handleOpen}>
        <EditIcon />
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
            <div className="success-message">{message}</div>
          ) : (
            <Container className={styles.container}>
              <Typography
                variant="h4"
                component="h4"
                color="primary"
                className={styles.title}
              >
                Edit ToDo-task
              </Typography>

              <form
                onSubmit={handleSubmit}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 450,
                    bgcolor: "background.paper",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    margin: "1.5%",
                    height: "55vh",
                  }}
                >
                  <TextField
                    sx={{ width: "80%" }}
                    id="name"
                    variant="outlined"
                    helperText="Name of the task"
                    value={name}
                    onChange={handleNameChange}
                  />
                   <TextField
                    sx={{ width: "80%" }}
                    id="Status"
                    variant="outlined"
                    helperText="Select status"
                    
                    value={status}
                    select
                    onChange={handleStatusChange}
                  >  
 {statuses.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
                   </TextField>  

                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <FormControl sx={{ width: "80%" }} id="Deadline">
                      <DatePicker
                        disablePast
                        value={deadline}
                        onChange={handleDateChange}
                      />
                      <FormHelperText>Select a deadline</FormHelperText>
                    </FormControl>
                  </LocalizationProvider>
                  <div className={styles.buttons}>
                    <Button variant="contained" color="primary" onClick={deleteTask} >
                      Delete task
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={!isFormFilled}
                    >
                      Edit task
                    </Button>
                  </div>
                </Box>
              </form>
            </Container>
          )}
          <Button onClick={handleClose}>Close</Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
