const DB = require("../data/index");
const Statuses = DB.statuses;

const getAllStatuses = async (req, res) => {
  const statuses = await Statuses.findAll();
  res.json(statuses);
};

const getAllStatusesWithTasks = async (req, res) => {
  const statuses = await Statuses.findAll({
    include: "tasks",
    order: [["id", "ASC"]],
  });
  res.json(statuses);
};

const getAllStatusesByIdWithTasks = async (req, res) => {
  const { id } = req.params;
  const statuses = await Statuses.findAll({
    where: { id },
    include: "tasks",
    order: [["id", "ASC"]],
  });
  res.json(statuses);
};

const createStatus = async (req, res) => {
  const { name } = req.body;
  const status = await Statuses.create({ name });
  res.json(status);
};

const updateStatusById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const status = await Statuses.update({ name }, { where: { id } });
  res.json(status);
};
const deleteStatusByIdAndTasks = async (req, res) => {
  const { id } = req.params;
  const status = await Statuses.destroy({ where: { id } });
  res.json(status);
};

module.exports = {
  getAllStatuses,
  getAllStatusesWithTasks,
  createStatus,
  updateStatusById,
  deleteStatusByIdAndTasks,
  getAllStatusesByIdWithTasks,
};
