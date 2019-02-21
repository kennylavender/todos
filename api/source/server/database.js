import omit from "ramda/src/omit";

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let todosById = {};

export const dbFetchTodos = () =>
  delay(300).then(() => {
    return Object.keys(todosById)
      .map(id => todosById[id])
      .sort((a, b) => b.time - a.time);
  });

export const dbGetTodo = id =>
  delay(300).then(() => {
    return todosById[id];
  });

export const dbCreateTodo = todo =>
  delay(300).then(() => {
    const prevTodo = todosById[todo.id];
    if (prevTodo) throw new Error("todo already exists");
    todosById[todo.id] = todo;
    return todo;
  });

export const dbDeleteTodo = id =>
  delay(300).then(() => {
    const todo = todosById[id];
    if (!todo) throw new Error("todo does not exist");
    todosById = omit([id], todosById);
    return todo;
  });

export const dbUpdateTodo = todo =>
  delay(300).then(() => {
    const prevTodo = todosById[todo.id];
    if (!prevTodo) throw new Error("todo does not exist");
    todosById[todo.id] = todo;
    return todo;
  });
