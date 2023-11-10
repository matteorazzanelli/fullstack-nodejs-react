const {GeneralModel} = require("./generalModel");

class UserModel extends GeneralModel {

  constructor(connection){
    super(connection);
    console.log('user model')
  }

  // async insert(content, table){
  //   // check if a user with the same email already exist in DB
  //   super.insert(content, table);
  // }
  
}

module.exports = {UserModel};