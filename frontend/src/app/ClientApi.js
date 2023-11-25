import axios from "axios"; 

class ClientApi {
  constructor(){
    /*axios base*/
    this.api = axios.create({
      baseURL: "http://localhost:5000/",
    });
  }

  async addRobot(robot){
    return (await this.api.post(`robots`,{content: {id:robot.id, name:robot.robot}})
      .then(function(response){alert('robot added!')})
      .catch(function(error){alert(error.response.data.content)})
    )
  }

  async deleteRobot(id){
    console.log(id)
    return (await this.api.delete(`robots/${id}`)
      .then(function(response){alert('robot deleted!')})
      .catch(function(error){alert(error.response.data.content)})
    )
  }

  async editRobot(id, name){
    return (await this.api.put(`robots/${id}`,{content: {name: name}})
    .then(function(response){alert('robot modified!')})
    .catch(function(error){alert(error.response.data.content)}))
  }
}

const Request = new ClientApi();
export default Request;