// create express instance
const express = require('express');
const app = express();

// load routes
const routes = require('./routes');
app.use(routes);

// start listen to port 5000
require('dotenv').config({ path: '.env' });
const server = app.listen(MYSQLPORT, 'https://cheery-mermaid-5c4862.netlify.app/');
