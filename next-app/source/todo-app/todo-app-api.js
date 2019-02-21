import cuid from "cuid";
import omit from "../helpers/omit";

let fakeDatabase = {
  todos: {},
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = () =>
  delay(300).then(() => {
    return Object.keys(fakeDatabase.todos)
      .map(id => fakeDatabase.todos[id])
      .sort((a, b) => b.time - a.time);
  });

export const createTodo = ({
  title = "No name given :(",
  isComplete = false,
}) =>
  delay(300).then(() => {
    const todo = Object.assign(
      {},
      { title, isComplete },
      { id: cuid(), time: new Date().getTime() }
    );
    fakeDatabase.todos[todo.id] = todo;
    return todo;
  });

export const deleteTodo = id =>
  delay(300).then(() => {
    fakeDatabase.todos = omit([id], fakeDatabase.todos);
  });

export const updateTodo = todo =>
  delay(300).then(() => {
    const prevTodo = fakeDatabase.todos[todo.id];
    if (!prevTodo) throw new Error("todo does not exist");
    const newTodo = (fakeDatabase.todos[todo.id] = { ...prevTodo, ...todo });
    return newTodo;
  });
