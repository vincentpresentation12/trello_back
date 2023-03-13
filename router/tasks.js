const express = require("express");
const tasksCtrl = require("../controller/tasks");

const tasksRouter = express.Router();

tasksRouter.get("/", tasksCtrl.getTasks);
tasksRouter.post("/", tasksCtrl.createTask);
tasksRouter.put("/:id", tasksCtrl.updateTaskById);
tasksRouter.put("/status/:id", tasksCtrl.updateStatusById);
tasksRouter.delete("/:id", tasksCtrl.deleteTaskById);

module.exports = tasksRouter;
