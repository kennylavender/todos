const gql = require("graphql");
import { fetchTodos, createTodo, deleteTodo, updateTodo } from "./database";

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
