import { Sequelize } from "sequelize";

const db = new Sequelize("task_teckno", "root", "****password*****", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
