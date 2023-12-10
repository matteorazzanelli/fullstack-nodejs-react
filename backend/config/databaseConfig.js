require('dotenv').config({ path: '.env' });

const mysql = require('mysql2');

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PSSWORD,
//   database: process.env.DB_DATABASE
// })

const connection = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT
});

module.exports = connection;