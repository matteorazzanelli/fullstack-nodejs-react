const express = require('express');
const router = express.Router();

// load product controller
const { userController } = require('../controllers/userController');

//middleware to handle req.body
router.use(express.json());

router.post('/login', (req, res) => {
  const {content} = req.body;
  return userController.loginUser(content, res);
})

router.post('/signup', (req, res) => {
  const {content} = req.body;
  return userController.signupUser(content, res);
})

module.exports = router;