const pgp = require("pg-promise")();
const connectionString = "postgres://localhost:5432/good_habit_progress_app_database";
const db = pgp(connectionString);

module.exports = db;