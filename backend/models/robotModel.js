const {GeneralModel} = require("./generalModel");

class RobotModel extends GeneralModel {

  constructor(connection){
    super(connection);
    console.log('robot model')
  }
  
  // 

}

module.exports = {RobotModel};