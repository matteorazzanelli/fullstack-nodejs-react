import axios from "axios"; 

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

class ClientApi {
  constructor(){
    /*axios base*/
    this.api = axios.create({
      baseURL: `${BASE_URL}`,
    });
  }

  async testBackend(){
    console.log('TEST START')
    const result = await this.api.get('/');
    console.log(result);
    console.log('TEST END');
    return;
  }

  async getRobots(user){
    console.log(user)
    return (await this.api.get(
      `robots/${user}`)
      .then(function(response){alert('robots loaded!'); return response.data.content})
      .catch(function(error){alert(error.response.data.content)})
    )
  }

  async addRobot(robot, user){
    return (await this.api.post(
      `robots`,{
        content: {
          robot: {id:robot.id, name:robot.robot},
          user: {email: user}
        }
      })
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

  async toggleFavorite(id, user){
    return (await this.api.patch(
      `robots/toggle_${id}`,{
        content:{
          user: {email: user}
        }
      })
      .then(function(response){alert('robot toggled favorite!')})
      .catch(function(error){alert(error.response.data.content)})
    )
  }
}

const Request = new ClientApi();
export default Request;