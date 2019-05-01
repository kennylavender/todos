const firebaseAdmin = require("./firebase-admin");

const database = firebaseAdmin.database();
const todoCollection = database.collection("todos");

const getUserTodos = todoCollection
  .get()
  .then(snapshot => snapshot.docs.map(doc => doc.data()));

const addUserTodo = todoCollection
  .doc(todo.id).set(data);

module.exports = {
  getUserTodos,
  addUserTodo
};
