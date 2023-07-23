import React from "react";

const Todo = (props) => {
  return (
    <>
      <h1>{props.todo.title}</h1>
      <h1>{props.todo.deadline}</h1>
      <h1>{props.todo.status}</h1>
    </>
  );
};

export default Todo;
