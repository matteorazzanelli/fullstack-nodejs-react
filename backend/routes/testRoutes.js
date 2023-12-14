const express = require('express');
const router = express.Router();

//middleware to handle req.body
router.use(express.json());

router.get('/', (req, res) => {
  return res.status(200).json({success: true, content: 'OK'});
})

module.exports = router;