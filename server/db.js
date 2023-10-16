const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.DBPORT,
  database: "todoapp",
});

module.exports = pool;
