import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
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

const statuses = [
  {
    value: "Not started",
  },
  {
    value: "On progress",
  },
  {
    value: "Completed",
  },
];

// const TodoForm = () => {
//   return <></>;
// };

const MyModal = (props) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("Not started");
  const [deadline, setDeadline] = useState(null);
  const [name, setName] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleDateChange = (date) => {
    setDeadline(date);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(deadline);
    console.log(status);
    const newToDo = {
      title: name,
      deadline: deadline,
      status: status,
    };
    toDoService.postToDo(newToDo).then((response) => {
      console.log("new todoItem added");
      setIsSuccess(true);
      props.addNewToDo(response.data); // Update state with the new ToDo item
    });
    // Perform further processing or submit the form data
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsSuccess(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpen}>
        <AddCircleIcon fontSize="large" />
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
            <div className="success-message">Form submitted successfully!</div>
          ) : (
            <Container className={styles.container}>
              <Typography variant="h4" component="h4" color="primary">
                Create a ToDo-item
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
                    label="Name"
                    variant="outlined"
                    helperText="Name of the task"
                    value={name}
                    onChange={handleNameChange}
                  />
                  <TextField
                    sx={{ width: "80%" }}
                    id="Status"
                    variant="outlined"
                    select
                    defaultValue="Not started"
                    helperText="Select status"
                    value={status}
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
                  <div>
                    <Button type="submit" variant="contained" color="primary">
                      Submit
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

export default MyModal;
