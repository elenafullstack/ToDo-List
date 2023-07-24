import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import toDoService from "../services/toDos";
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

const TodoForm = () => {
  const [status, setStatus] = useState("Not started");
  const [deadline, setDeadline] = useState(null);
  const [name, setName] = useState("");

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
    toDoService.postToDo(newToDo);
    console.log("new todoItem added");
    // Perform further processing or submit the form data
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h3" component="h3" color="primary">
        Create a ToDo-item
      </Typography>

      <form
        onSubmit={handleSubmit}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
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
  );
};

export default TodoForm;
