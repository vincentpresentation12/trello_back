const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { sequelize } = require("./data/index");
const tasksRouter = require("./router/tasks");
const statusesRouter = require("./router/statuses");
const app = express();
const port = 3000;

(async () => {
  await sequelize.sync({ force: false });
  // Code here
})();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // autoriser toutes les sources
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE"); // autoriser ces méthodes HTTP
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // autoriser ces en-têtes de requête
  next();
});

app.use("/api/tasks", tasksRouter);
app.use("/api/statuses", statusesRouter);
app.get("/", (req, res) => {
  res.json({ mess: "hello world!" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
