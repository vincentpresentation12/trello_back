const Todo = require("../model/tasks");

const getTasks = async (req, res) => {
  const tasks = await Todo.findAll();
  res.json(tasks);
};

const getTaskById = async (req, res) => {
  const task = await Todo.findByPk(req.params.id);
  res.json(task);
};

const addTask = async (req, res) => {
  if (!req.body.title || !req.body.description) {
    res
        .status(400)
        .json({ mess: "Champs obligatoires : titre et description" });
    return;
  }
  const { title, description, id_status } = req.body;
  const task = await Todo.create({
    title,
    description,
    id_status,
  });
  res.json(task);
};

const updateTask = async (req, res) => {
  if (!req.body.title || !req.body.description || !req.body.id_status) {
    res
        .status(400)
        .json({ mess: "Champs obligatoires : titre et description" });
    return;
  }
  const task = await Todo.findByPk(req.params.id);
  task.title = req.body.title;
  task.description = req.body.description;
  task.id_status = req.body.id_status;
  await task.save();
  res.json(task);
};

const deleteTask = async (req, res) => {
  const task = await Todo.findByPk(req.params.id);
  await task.destroy();
  res.json({ mess: "tache supprimée" });
};

module.exports = {
  getTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
};
