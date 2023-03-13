const express = require("express");
const statusesCtrl = require("../controller/statuses");

const statusesRouter = express.Router();

statusesRouter.get("/", statusesCtrl.getAllStatuses);
statusesRouter.get("/tasks", statusesCtrl.getAllStatusesWithTasks);
statusesRouter.post("/", statusesCtrl.createStatus);
statusesRouter.put("/:id", statusesCtrl.updateStatusById);
statusesRouter.delete("/:id", statusesCtrl.deleteStatusByIdAndTasks);

module.exports = statusesRouter;
