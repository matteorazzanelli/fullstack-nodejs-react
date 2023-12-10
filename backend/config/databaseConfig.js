require('dotenv').config({ path: '.env' });

const mysql = require('mysql2');

// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PSSWORD,
//   database: process.env.DB_DATABASE
// })

const connection = mysql.createPool({
  host: MYSQLHOST,
  user: MYSQLUSER,
  password: MYSQLPASSWORD,
  database: MYSQLDATABASE,
  port: MYSQLPORT
});

module.exports = connection;