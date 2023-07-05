const todoItemRouter = require("express").Router();
const moment = require("moment");

const TodoItem = require("../models/todoItem");

todoItemRouter.post("/", async (request, response) => {
  const body = request.body;
  console.log(body);

  const deadline = moment(body.deadline, "DD/MM/YYYY").toDate();

  const todoItem = new TodoItem({
    title: body.title,
    deadline: deadline,
    status: body.status,
  });

  const saved = await todoItem.save();
  response.json(saved);
});

todoItemRouter.get("/", (req, res) => {
  TodoItem.find({}).then((todoItem) => {
    res.json(todoItem);
  });
});

module.exports = todoItemRouter;
