require('./env');
const express = require("express");
const todosAPI = require("./todos-api");

const app = express();

app.use(express.json())

app.get("/api/todos", (req, res) => {
  todosAPI.getUserTodos().then(todos => {
    res.json(
      todos.reduce((acc, cur) => {
        acc[cur.id];
        return acc;
      }, {}),
    );
  });
});

// app.post("/api/todos", (req, res) => {
//   const { todoProperties: { text, isCompleted } } = req.body;
//   const todo = Object.assign({}, { text, isCompleted, id: cuid() })
//   todosAPI.addUserTodo(todo).then(todo => {
//     res.json(todo);
//   })
// });

module.exports = app;