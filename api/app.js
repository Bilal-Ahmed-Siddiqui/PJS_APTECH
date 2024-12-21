const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

//get data
const getTodos = () => {
  axios
    .get(BASE_URL)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("error", response.status);
      }
    })
    .catch((error) => console.log(error));
};


//create data
const createTodo = () => {
  const data = {
    userId: 550,
    title: "teach API",
    completed: false,
  };
  axios
    .post(BASE_URL, data)
    .then((response) => {
      if (response.status === 201) {
        console.log(response.data);
      } else {
        console.log("error", response.status);
      }
    })
    .catch((error) => console.log(error));
};


//update data
const updateTodo = (id) => {
  const data = {
    userId: 540,
    title: "teach API",
    completed: false,
  };
  axios
    .put(`${BASE_URL}/${id}`, data)
    .then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        console.log("error", response.status);
      }
    })
    .catch((error) => console.log(error));
};


//delete data
const deleteTodo = (id) => {
  axios
    .delete(`${BASE_URL}/${id}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("data deleted successfully");
      } else {
        console.log("error", response.status);
      }
    })
    .catch((error) => console.log(error));
};


//usage

getTodos();
createTodo();
updateTodo(5);
deleteTodo(5);
