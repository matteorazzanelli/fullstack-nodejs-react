const express = require('express');
const router = express.Router();
const cors = require('cors') // to handle the fact that request comes from different port
router.use(cors());

const userRoutes = require('./userRoutes');
const robotRoutes = require('./robotRoutes');
const testRoutes = require('./testRoutes');

// using specific routes middleware for products and users
router
  .use('/', userRoutes)
  .use('/robots', robotRoutes)
  .get('/test', testRoutes);

module.exports = router;