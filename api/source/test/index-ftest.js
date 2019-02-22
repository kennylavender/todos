import describe from "tape";
import supertest from "supertest";
import createApp from "../app";

const createTodo = (agent, { text = "Foo" } = {}) =>
  agent
    .post("/graphql")
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .send(
      JSON.stringify({
        query: `
        mutation {
          todoCreate(text: "${text}") {
            id,
            text,
            isComplete
          }
        }
      `,
      })
    );

const fetchTodos = agent =>
  agent
    .post("/graphql")
    .set("Accept", "application/json")
    .set("Content-Type", "application/json")
    .send(
      JSON.stringify({
        query: `
        query {
          todos {
            id,
            text,
            isComplete
          }
        }
      `,
      })
    );

describe("Todos", ({ test }) => {
  test("start with no todos", ({ end, deepEqual }) => {
    createApp()
      .then(supertest.agent)
      .then(agent => {
        fetchTodos(agent).then(res => {
          deepEqual(
            res.body.data.todos.length,
            0,
            "todos should be an empty array when no todos have been added yet"
          );
          end();
        });
      });
  });

  describe("can add todos", ({ end, deepEqual }) => {
    createApp()
      .then(supertest.agent)
      .then(agent => {
        Promise.all([
          createTodo(agent),
          createTodo(agent),
          createTodo(agent),
        ]).then(() => {
          fetchTodos(agent).then(res => {
            deepEqual(
              res.status,
              200,
              "res status should be 200 when there is a successful reqeust"
            );

            deepEqual(
              res.body.data.todos.length,
              3,
              "todos should contain the correct number of todos when todos have been added"
            );
            end();
          });
        });
      });
  });
});
