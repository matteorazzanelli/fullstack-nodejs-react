const express = require('express');
const router = express.Router();

// load product controller
const { userController } = require('../controllers/userController');

//middleware to handle req.body
router.use(express.json());

// custom middleware
const {userMiddleware} = require('../middleware/userMiddleware')

router.use(userMiddleware);

router.post('/signin', (req, res) => {
  const {content} = req.body;
  console.log('UserRoutes : ', content)
  return userController.signinUser(content, res);
})

router.post('/signup', (req, res) => {
  const {content} = req.body;
  console.log('UserRoutes : ', content)
  return userController.signupUser(content, res);
})

module.exports = router;