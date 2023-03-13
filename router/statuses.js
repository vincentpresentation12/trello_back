const express = require("express");
const {
  getStatus,
  getStatusById,
  addStatus,
  updateStatus,
  deleteStatus,
} = require("../controller/statuses");

const statusesRouter = express.Router();

statusesRouter.get("/:id", getStatusById);
statusesRouter.get("/",  getStatus);
statusesRouter.post("/",  addStatus);
statusesRouter.put("/:id",  updateStatus);
statusesRouter.delete("/:id",  deleteStatus);

module.exports = statusesRouter;
