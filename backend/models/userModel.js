const {GeneralModel} = require("./generalModel");

class UserModel extends GeneralModel {

  constructor(connection){
    super(connection);
    console.log('user model')
  }

  async insert(content, table){
    // check if a user with the same email already exist
    const key = Object.keys(content).filter(key => content[key]===content.email);
    const result = await super.select({[key]:content.email}, table);
    if(result.rows.length === 0){
      console.log('aggiungi')
      return await super.insert(content, table)
    }
    else{
      console.log('esiste già')
      return  {...result, rows: {...result.rows, affectedRows:[]}}
    }
  }
  
}

module.exports = {UserModel};