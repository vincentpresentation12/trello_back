const { Sequelize } = require("sequelize");
console.log(process.env.DB_NAME);
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.tasks = require("../model/tasks")(sequelize, Sequelize);
db.statuses = require("../model/statuses")(sequelize, Sequelize);

db.statuses.hasMany(db.tasks, {
  foreignKey: "statusId",
  as: "tasks",
  onDelete: "CASCADE",
});
db.tasks.belongsTo(db.statuses, {
  foreignKey: "statusId",
  as: "status",
});
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.log("Connection error.");
    console.error("Unable to connect to the database:", error);
  });

module.exports = db;
