const Statuses = require("../model/statuses");

const getStatus = async (req, res) => {
  const status = await Statuses.findAll();
  res.json(status);
};

const getStatusById = async (req, res) => {
  const status = await Statuses.findByPk(req.params.id);
  res.json(status);
};

const addStatus = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ mess: "Champs obligatoires : nom" });
    return;
  }
  const { name } = req.body;
  const status = await Statuses.create({
    name,
  });
  res.json(status);
};

const updateStatus = async (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ mess: "Champs obligatoires : nom" });
    return;
  }
  const status = await Statuses.findByPk(req.params.id);
  status.name = req.body.name;
  await status.save();
  res.json(status);
};

const deleteStatus = async (req, res) => {
  const status = await Statuses.findByPk(req.params.id);
  await status.destroy();
  res.json({ mess: "status supprimé" });
};

module.exports = {
  getStatus,
  getStatusById,
  addStatus,
  updateStatus,
  deleteStatus,
};
