const {GeneralModel} = require("./generalModel");

class RobotModel extends GeneralModel {

  constructor(connection){
    super(connection);
    console.log('robot model')
  }
  

  async insert(content){
    // first, add the robot in robots table
    // then, add the relation robot-user
    try{
      const res_user = (await super.select(content.user, 'users')).rows[0].id;
      const res_robot = (await super.insert(content.robot, 'robots')).rows.affectedRows;
      console.log('-------------------->',res_robot)
      console.log('-------------------->',res_user)
      if(res_user && res_robot > 0){
        const result = (await super.insert({
          'id_user': res_user,
          'id_robot': content.robot.id
        }, 'users_robots'));
        console.log('-------------------->',result.rows.affectedRows)
        return result;
      }
    }
    catch(error){
      return {rows:{affectedRows:0}};
    }
  }

  async toggle(id, content){
    console.log(content.user, id)
    try{
      const res_user = (await super.select(content.user, 'users')).rows[0];
      console.log('-------------------->',res_user)
      const res_robot_user = (await super.select({
        'id_user': res_user.id, 
        'id_robot': id
      }, 'users_robots')).rows[0];
      console.log('-------------------->', res_robot_user)
      if(res_user && res_robot_user){
        const result = (await super.update(res_robot_user.id, {
          'favorite': !res_robot_user.favorite
        }, 'users_robots'))
        console.log('-------------------->',result.rows.affectedRows);
        return result;
      }
    }
    catch(error){
      return {rows:{affectedRows:0}};
    }
  }

  async select(content){
    console.log('robotModel : ', content)
    try{
      [this.queryResult.rows, this.queryResult.fields] = 
      (await this.connection.execute(
        `SELECT * FROM (
          robots INNER JOIN users_robots ON users_robots.id_robot = robots.id 
          AND users_robots.id_user = (SELECT id FROM users WHERE email=?))`, [content]
      ));
      console.log('------------------>',this.queryResult)
    }
    catch(error){
      this.queryResult.error = error.sqlMessage;
    }
    return this.queryResult;
  }
}

module.exports = {RobotModel};