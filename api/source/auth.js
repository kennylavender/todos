const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-ssdxe9d5.auth0.com/.well-known/jwks.json",
  }),
  audience: "https://quickstarts/api",
  issuer: "https://dev-ssdxe9d5.auth0.com/",
  algorithms: ["RS256"],
});

module.exports = {
  jwtCheck,
};
