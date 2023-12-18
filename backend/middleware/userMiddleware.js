// require('dotenv').config({ path: '.env' });
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
const salt = process.env.CRYPTO_SALT;
// TODO: store in DB to have always the same salt and hashing string

const userMiddleware = (req, res, next) => {
  const {content} = req.body;
  console.log(req.body, salt, process.env.CRYPTO_SALT)
  const hash = bcrypt.hashSync(content.password, salt);
  req.body.content.password = hash;
  next();
}

module.exports = {userMiddleware};