require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path = require("path");

const todoItemRouter = require("./controllers/todoItem");
const usersRouter = require('./controllers/users')
app.use(express.static("build"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/todoItems", todoItemRouter);
app.use('/api/users', usersRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
