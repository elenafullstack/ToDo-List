import axios from "axios";
const toDoUrl = "/api/todoItems";

const getAll = () => {
  const request = axios.get(toDoUrl);
  return request.then((response) => response.data);
};

const postToDo = (toDo) => {
  return axios.post(toDoUrl, toDo);
};

const toDoService = { getAll, postToDo };

export default toDoService;
