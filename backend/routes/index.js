const express = require('express');
const router = express.Router();
const cors = require('cors') // to handle the fact that request comes from different port
router.use(cors());

const userRoutes = require('./userRoutes');

// using specific routes middleware for products and users
router
  .use('/', userRoutes)
  .get('/products', ()=>{console.log('not available')});

module.exports = router;