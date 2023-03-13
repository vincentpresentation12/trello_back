const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../data/index");
const Statuses = require("./statuses");

const Tasks = sequelize.define("tasks", {
  // Model attributes are defined here
  title: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  description: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  id_status: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});
//relation with status
Tasks.belongsTo(Statuses, {
  foreignKey: "id_status",
  as: "status",
});

module.exports = Tasks;
