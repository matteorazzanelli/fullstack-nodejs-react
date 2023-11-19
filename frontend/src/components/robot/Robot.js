import React from 'react'

import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa6";

export default function Robot({robot, deleteRobot, editRobot, toggleFavorite}) {
  return (
    <div className='robot'>
      <p>{robot.robot}</p>
      <div className='robot-icons'>
        <span className='favorite-icon' onClick={() => toggleFavorite(robot.id)}>
          {robot.favorite ? <FaHeart size={25}/> : <FaRegHeart size={25}/>}
        </span>
        <span className='edit-icon' onClick={() => editRobot(robot.id)}>
          <FaRegEdit size={25}/>
        </span>
        <span className='delete-icon' onClick={() => deleteRobot(robot.id)}>
          <RiDeleteBin6Line size={25}/>
        </span>
      </div>  
    </div>
  )
}
