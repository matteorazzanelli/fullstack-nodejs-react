// create express instance
const express = require('express');
const app = express();

// load routes
const routes = require('./routes');
app.use(routes);

// start listen to port 5000
require('dotenv').config({ path: '.env' });
const port = process.env.MYSQLPORT || 5000;
const server = app.listen(port, '0.0.0.0');
