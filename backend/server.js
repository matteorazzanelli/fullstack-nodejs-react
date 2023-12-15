// create express instance
const express = require('express');
const app = express();

// load routes
const routes = require('./routes');
app.use(routes);

// start listen to port 5000
// require('dotenv').config({ path: '.env' });
const port = process.env.MYSQLPORT || process.env.PORT || 5000;
console.log(port)
const server = app.listen(5000);
