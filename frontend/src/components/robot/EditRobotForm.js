import React, {useState} from 'react'

export default function EditRobotForm({editRobot, robot}){
    
  const [value, setValue] = useState(robot.robot);

    const handleSubmit = (e) => {
        e.preventDefault();
        editRobot(value, robot.id);
      };
  return (
    <form onSubmit={handleSubmit} className="robot-form">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="robot-input" 
      placeholder='Update robot' 
    />
    <button type="submit" className='robot-btn'>Add Robot</button>
  </form>
  )
}
