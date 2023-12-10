// create express instance
const express = require('express');
const app = express();

// load routes
const routes = require('./routes');
app.use(routes);

// start listen to port 5000
require('dotenv').config({ path: '.env' });
console.log(process.env.MYSQLPORT)
const server = app.listen(process.env.MYSQLPORT, '0.0.0.0');
