const firebaseAdmin = require('./firebase-admin');

const firestore = firebaseAdmin.firestore();
const todoCollection = firestore.collection("todos");

const getUserTodos = () => todoCollection
  .get()
  .then(snapshot => snapshot.docs.map(doc => doc.data()));

const addUserTodo = todo => todoCollection
  .doc(todo.id).set(data);

module.exports = {
  getUserTodos,
  addUserTodo
};
