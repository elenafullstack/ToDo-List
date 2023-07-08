require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const todoItemRouter = require("./controllers/todoItem");
app.use(express.static("build"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/todoItems", todoItemRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} `);
});
