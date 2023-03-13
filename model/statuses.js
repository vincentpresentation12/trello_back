const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return (Statuses = sequelize.define("statuses", {
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
    },
  }));
};
