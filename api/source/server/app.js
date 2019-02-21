const graphqlHTTP = require("express-graphql");
const express = require("express");
const schema = require("./schema");

const dev = process.env.NODE_ENV !== "production";

const createApp = () =>
  new Promise((resolve, reject) => {
    const app = express();

    app.use(
      "/graphql",
      graphqlHTTP({
        schema,
        graphiql: true,
        context: {},
      })
    );

    return resolve(app);
  });

module.exports = createApp;
