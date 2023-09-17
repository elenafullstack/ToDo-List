const todoItemRouter = require("express").Router();
const moment = require("moment");

const TodoItem = require("../models/todoItem");
const User = require('../models/user')

todoItemRouter.post("/", async (request, response) => {
  const body = request.body;
  console.log(body.deadline);

  // const user = await User.findById(body.userId)

  const deadline = moment(body.deadline, [
    "DD/MM/YYYY",
    moment.ISO_8601,
  ]).toDate();

  const todoItem = new TodoItem({
    title: body.title,
    deadline: deadline,
    status: body.status,
    // user: user ? user._id : null 
  });

   const saved = await todoItem.save();

  // if (user) {
  // user.todoItems = user.todoItems.concat(saved._id)
  // await user.save()
response.json(saved);
  // }
});


todoItemRouter.get("/", (req, res) => {
  TodoItem.find({}).then((todoItem) => {
    res.json(todoItem);
  });
});

todoItemRouter.put("/:id", async (request, response) => {
  const body = request.body;
  console.log(body.deadline);
  const deadline = moment(body.deadline, [
    "DD/MM/YYYY",
    moment.ISO_8601,
  ]).toDate();

  const updated = {
    title: body.title,
    deadline: deadline,
    status: body.status,
  };

  const newTodoItem = await TodoItem.findByIdAndUpdate(
    request.params.id,
    updated,
    {
      new: true,
    }
  );
  response.json(newTodoItem);
});

todoItemRouter.delete("/:id", async (request, response) => {
  await TodoItem.findByIdAndRemove(request.params.id);
  response.status(204).end();
});

module.exports = todoItemRouter;
