const cuid = require("cuid");
const omit = require("ramda/src/omit");

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

let fakeDatabase = {
  todos: {},
};

export const fetchTodos = () =>
  delay(300).then(() => {
    return Object.keys(fakeDatabase.todos)
      .map(id => fakeDatabase.todos[id])
      .sort((a, b) => b.time - a.time);
  });

export const createTodo = (obj, args) =>
  delay(300).then(() => {
    const todo = Object.assign(
      {},
      { text: args.text, isComplete: false },
      { id: cuid(), time: new Date().getTime() }
    );
    fakeDatabase.todos[todo.id] = todo;
    return todo;
  });

export const deleteTodo = (obj, args) =>
  delay(300).then(() => {
    const todo = fakeDatabase.todos[args.id];
    if (todo) {
      fakeDatabase.todos = omit([args.id], fakeDatabase.todos);
      return todo;
    }
  });

export const updateTodo = (obj, todo) =>
  delay(300).then(() => {
    const prevTodo = fakeDatabase.todos[todo.id];
    if (!prevTodo) throw new Error("todo does not exist");
    const newTodo = (fakeDatabase.todos[todo.id] = { ...prevTodo, ...todo });
    return newTodo;
  });
