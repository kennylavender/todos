import {
  dbFetchTodos,
  dbCreateTodo,
  dbDeleteTodo,
  dbUpdateTodo,
  dbGetTodo,
} from "./database";
import cuid from "cuid";

const gql = require("graphql");

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

const fetchTodos = () => dbFetchTodos();

const createTodo = (obj, args) => {
  const todo = {
    text: args.text,
    isComplete: false,
    id: cuid(),
    time: new Date().getTime(),
  };
  return dbCreateTodo(todo);
};

const deleteTodo = (obj, args) => {
  return dbDeleteTodo(args.id);
};

const updateTodo = (obj, args) => {
  return dbGetTodo(args.id).then(todo =>
    dbUpdateTodo(Object.assign(todo, args))
  );
};

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
