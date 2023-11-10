const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
console.log(salt);
const signupMiddleware = (req, res, next) => {
  const {content} = req.body;
  const hash = bcrypt.hashSync(content.password, salt);
  req.body.content.password = hash;
  console.log(content.password, req.body.password);
  next();
}

const signinMiddleware = (req, res, next) => {
  const {content} = req.body;
  const hash = bcrypt.hashSync(content.password, salt);
  req.body.content.password = hash;
  console.log(content.password, req.body.password);
  next();
}

module.exports = {signupMiddleware, signinMiddleware};