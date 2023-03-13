const express = require("express");
const {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

const tasksRouter = express.Router();

tasksRouter.get("/", getTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.post("/", addTask);
tasksRouter.put("/:id", updateTask);
tasksRouter.delete("/:id", deleteTask);

module.exports = tasksRouter;
