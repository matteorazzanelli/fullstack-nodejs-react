
// load user model
const {dbConfig} = require('../config');
const {UserModel} = require('../models/userModel');
// pass db connection as constructor parameter
const um = new UserModel(dbConfig);

const { GeneralController } = require('./generalController');

class UserController extends GeneralController{

  loginUser = async (content, res) => {
    const result = await um.select(content, 'users');
    console.log(result)
    this.setCode(!result.error ? 200 : 404);
    this.setSuccess(!result.error);
    this.setContent(result.error ?? result.rows);
    return this.renderApi(res);
  }

  signupUser = async (content, res) => {
    const result = await um.insert(content, 'users');
    console.log(result)
    this.setCode(result.rows.affectedRows > 0 ? 201 : 400);
    this.setSuccess(result.rows.affectedRows > 0);
    this.setContent(result.rows.affectedRows > 0 ? result.rows : 'Failed to add user');
    return this.renderApi(res);
  }

}


const userController = new UserController();
module.exports = {userController};