const gql = require("graphql");
const cuid = require("cuid");
const omit = require("ramda/src/omit");

const {
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
  GraphQLString,
  GraphQLObjectType,
  GraphQLBoolean,
} = gql;

const Todo = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    isComplete: {
      type: GraphQLBoolean,
    },
  }),
});

let fakeDatabase = {
  todos: {},
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fetchTodos = () =>
  delay(300).then(() => {
    return Object.keys(fakeDatabase.todos)
      .map(id => fakeDatabase.todos[id])
      .sort((a, b) => b.time - a.time);
  });

const createTodo = (obj, args) =>
  delay(300).then(() => {
    const todo = Object.assign(
      {},
      { text: args.text, isComplete: false },
      { id: cuid(), time: new Date().getTime() }
    );
    fakeDatabase.todos[todo.id] = todo;
    return todo;
  });

const deleteTodo = (obj, args) =>
  delay(300).then(() => {
    fakeDatabase.todos = omit([args.id], fakeDatabase.todos);
  });

const updateTodo = (obj, todo) =>
  delay(300).then(() => {
    const prevTodo = fakeDatabase.todos[todo.id];
    if (!prevTodo) throw new Error("todo does not exist");
    const newTodo = (fakeDatabase.todos[todo.id] = { ...prevTodo, ...todo });
    return newTodo;
  });

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      todos: {
        type: GraphQLList(Todo),
        resolve: fetchTodos,
      },
    },
  }),
  mutation: new GraphQLObjectType({
    name: "RootMutationType",
    fields: {
      todoCreate: {
        type: GraphQLNonNull(Todo),
        args: {
          text: {
            type: GraphQLString,
          },
        },
        resolve: createTodo,
      },
      todoDelete: {
        type: GraphQLNonNull(Todo),
        args: {
          id: {
            type: GraphQLString,
          },
        },
        resolve: deleteTodo,
      },
      todoUpdate: {
        type: GraphQLNonNull(Todo),
        args: {
          id: {
            type: GraphQLString,
          },
          text: {
            type: GraphQLString,
          },
          isComplete: {
            type: GraphQLBoolean,
          },
        },
        resolve: updateTodo,
      },
    },
  }),
  types: [Todo],
});

module.exports = schema;
