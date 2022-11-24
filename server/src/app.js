const express = require("express");
const swaggerDoc = require("./swagger");
const swaggerUi = require("swagger-ui-express");
const database = require("./models/database");
const api = require("./controllers");

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.use("/api", api);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

database.sync().then((req) => {
  app.listen(port, async () => {
    console.log("Express app listen at port " + port);
  });
});

module.exports = app;
