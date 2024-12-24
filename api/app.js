const BASE_URL = "https://jsonplaceholder.typicode.com/todos";

//get data
const getTodos = () => {
  axios
    .get(BASE_URL)
    .then((response) => {
      if (response.status === 200) {
        // console.log(response.data);

        const todosDiv = document.getElementById("todosDiv");
        todosDiv.innerHTML = response.data
          .map((todo) => {
            return `<div class="todo-item">
          <p class="todo-userId">UserId: ${todo.userId}</p>
          <p class="todo-title">Title: ${todo.title}</p>
          <p class="todo-completed">Completed: ${todo.completed}</p>
      </div>
        `;
          })
          .join("");
      } else {
        console.log("error", response.status);
      }
    })
    .catch((error) => console.log(error));
};

//create data
const createTodo = (data) => {
  // const data = {
  //   userId: 550,
  //   title: "teach API",
  //   completed: false,
  // };
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

const createTodoBtn = document.getElementById("createTodoBtn");
const formDiv = document.getElementById("formDiv");
formDiv.style.display = "none";

let isFormVisible = false;

createTodoBtn.addEventListener("click", () => {
  if (isFormVisible) {
    formDiv.style.display = "none";
  } else {
    formDiv.style.display = "block";
  }

  isFormVisible = !isFormVisible;
});

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  const userId = document.getElementById('userId').value;
  const title = document.getElementById('title').value;

  const data = {
    userId: userId,
    title: title,
    completed: false
  }

  createTodo(data);

})

// updateTodo(5);
// deleteTodo(5);
