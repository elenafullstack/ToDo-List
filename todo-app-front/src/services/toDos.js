import axios from "axios";
// when using dev
// const toDoUrl = "http://localhost:3001/api/todoItems";
const toDoUrl = '/api/todoItems'

const getAll = () => {
  const request = axios.get(toDoUrl);
  return request.then((response) => response.data);
};

const postToDo = (toDo) => {
  return axios.post(toDoUrl, toDo);
};

const updateToDo = (id, newToDo) => {
  return axios.put(`${toDoUrl}/${id}`, newToDo);
};

const deleteToDo = (toDo) => {
  const toDoUrlWithId = `${toDoUrl}/${toDo.id}`;

  return axios.delete(toDoUrlWithId);
};

const toDoService = { getAll, postToDo, updateToDo, deleteToDo };

export default toDoService;
