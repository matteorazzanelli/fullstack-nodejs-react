
// load user model
const {dbConfig} = require('../config');
const { RobotModel } = require('../models/robotModel');
// pass db connection as constructor parameter
const rm = new RobotModel(dbConfig);

const { GeneralController } = require('./generalController');

class RobotController extends GeneralController{

  listRobots = async (content, res) => {
    const result = await rm.select(content, 'robots');
    console.log('RobotController LIST : ', result)
    this.setCode(result.rows.length > 0 ? 200 : 404);
    this.setSuccess(result.rows.length > 0);
    this.setContent(result.rows.length > 0 ? result.rows : 'User has no robots');
    return this.renderApi(res);
  }

  insertRobot = async (content, res) => {
    const result = await rm.insert(content, 'robots');
    console.log('RobotController INSERT : ', result)
    this.setCode(result.rows.affectedRows > 0 ? 201 : 400);
    this.setSuccess(result.rows.affectedRows > 0);
    this.setContent(result.rows.affectedRows > 0 ? result.rows : 'Robot already exists');
    return this.renderApi(res);
  }

  modifyRobot = async (id, content, res) => {
    console.log('RobotController MODIFY : ', id);
    const result = await rm.update(id, content, 'robots');
    this.setCode(result.rows.affectedRows>0 ? 200 : 404);
    this.setSuccess(result.rows.affectedRows>0);
    this.setContent(result.rows.affectedRows>0 ? result.rows : "Robot not found");
    return this.renderApi(res);
  }

  deleteRobot = async (id, res) => {
    console.log('RobotController DELETE : ', id);
    const result = await rm.delete(id, 'robots');
    this.setCode(result.rows.affectedRows>0 ? 200 : 404);
    this.setSuccess(result.rows.affectedRows>0);
    this.setContent(result.rows.affectedRows>0 ? result.rows : "Robot not found");
    return this.renderApi(res);
  }

}


const robotController = new RobotController();
module.exports = {robotController};