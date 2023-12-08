const express = require('express');
const router = express.Router();

// load product controller
const { robotController } = require('../controllers/robotController');

//middleware to handle req.body
router.use(express.json());

router.get('/:user', (req, res) => {
  // the variable 'content' also contains the user to which they belong
  const {user} = req.params; 
  console.log('RobotRoutes GET : ', user)
  return robotController.listRobots(user, res);
})

router.post('/', (req, res) => {
  // the variable 'content' also contains the user to which it belongs
  const {content} = req.body;
  console.log('RobotRoutes POST : ', content)
  return robotController.insertRobot(content, res);
})

router.put('/:id', (req, res) => {
  const {content} = req.body;
  const {id} = req.params;
  console.log('RobotRoutes PUT : ', id)
  return robotController.modifyRobot(id, content, res);
})

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  console.log('RobotRoutes DELETE : ', id)
  return robotController.deleteRobot(id, res);
})

router.patch('/toggle_:id', (req, res) => {
  const {content} = req.body;
  const {id} = req.params;
  console.log('RobotRoutes TOGGLE : ', id)
  return robotController.toggleRobot(id, content, res);
})

module.exports = router;