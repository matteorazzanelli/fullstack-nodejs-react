const express = require('express');
const router = express.Router();

// load product controller
const { userController } = require('../controllers/userController');

//middleware to handle req.body
router.use(express.json());

// custom middleware
const {signupMiddleware, signinMiddleware} = require('../middleware/userMiddleware')

router.post('/signin', [signinMiddleware], (req, res) => {
  const {content} = req.body;
  console.log(content)
  return userController.signinUser(content, res);
})

router.post('/signup', [signupMiddleware], (req, res) => {
  const {content} = req.body;
  console.log(content)
  return userController.signupUser(content, res);
})

module.exports = router;