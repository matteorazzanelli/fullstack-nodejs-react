import React, {useState} from 'react'

export default function RobotForm({addRobot}) {

  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addRobot(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="robot-form">
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="robot-input" 
        placeholder='What is the name of the robot?' 
      />
      <button type="submit" className='robot-btn'>Add Robot</button>
    </form>
  )
}
