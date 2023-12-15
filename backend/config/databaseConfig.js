require('dotenv').config({ path: '.env' });

const mysql = require('mysql2');

const connection = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.DB_HOST,
  user: process.env.MYSQLUSER || process.env.DB_USER,
  password: process.env.MYSQLPASSWORD || process.env.DB_PSSWORD,
  database: process.env.MYSQLDATABASE || process.env.DB_DATABASE,
  port: process.env.MYSQLPORT
});

module.exports = connection;