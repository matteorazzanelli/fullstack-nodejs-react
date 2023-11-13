// require('dotenv').config({ path: '.env' });
const bcrypt = require('bcrypt');
// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);
const salt = process.env.CRYPTO_SALT;
console.log(salt); // FIXME: store in DB to have always the same salt and hashing string

const userMiddleware = (req, res, next) => {
  const {content} = req.body;
  const hash = bcrypt.hashSync(content.password, salt);
  req.body.content.password = hash;
  console.log(content.password, req.body.password);
  next();
}

module.exports = {userMiddleware};