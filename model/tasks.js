const { DataTypes } = require("sequelize");
// tasks can have one status

module.exports = (sequelize) => {
  return (Tasks = sequelize.define("tasks", {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  }));
};
