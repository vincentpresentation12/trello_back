const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../data/index");

const Statuses = sequelize.define("statuses", {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  }
});


module.exports = Statuses;
