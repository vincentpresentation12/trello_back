const DB = require("../data/index");
const Tasks = DB.tasks;
const Statuses = DB.statuses;

const getTasks = async (req, res) => {
  const tasks = await Tasks.findAll();
  res.json(tasks);
};

const createTask = async (req, res) => {
  const { title, description } = req.body;
  const task = await Tasks.create({ title, description, statusId: 1 });
  res.json(task);
};

const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const task = await Tasks.update(
    {
      title,
      description,
    },
    { where: { id } }
  );
  res.json(task);
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  const task = await Tasks.destroy({ where: { id } });
  res.json(task);
};
const updateStatusById = async (req, res) => {
  if (!req.body.statusId) {
    res
      .status(400)
      .json({ mess: "Champs obligatoires : titre et description" });
    return;
  }
  const task = await Tasks.findByPk(req.params.id);
  task.statusId = req.body.statusId;
  await task.save();
  res.json(task);
};

module.exports = {
  getTasks,
  createTask,
  updateTaskById,
  updateStatusById,
  deleteTaskById,
};
