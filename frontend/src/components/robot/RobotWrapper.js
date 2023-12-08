import React, { useEffect, useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import Request from "../../app/ClientApi";

import RobotForm from './RobotForm'
import EditRobotForm from './EditRobotForm'
import Robot from './Robot'

import './Robot.css'
import { useNavigate } from "react-router-dom";

export default function RobotWrapper({userName}) {

  //TODO: retrieve user id by using user email stored in local storage
  const navigate = useNavigate();

  const [robots, setRobots] = useState([]);

  useEffect(()=>{

    const fecthRobots = async (userName) => {
      const result = await Request.getRobots(userName);
      console.log(result);
      if(result)
        setRobots(result.map((item)=>{
          return {
            id: item.id_robot,
            robot: item.name,
            favorite: item.favorite,
            isEditing: false
          }
        }))
    }

    if(userName){
      console.log(userName)
      fecthRobots(userName)
    }
  },[userName]) // only once


  const addRobot = async (robot) => {
    if(userName===null){
      alert('Session expired')
      navigate('/')
    }
    else{
      const newRobot = { 
        id: nanoid(), 
        robot: robot, 
        favorite: false, 
        isEditing: false 
      };
      setRobots([
        ...robots,
        newRobot
      ]);
      // write in the DB in robots table and associate it with the user
      Request.addRobot(newRobot, userName);
    }
    
  }

  const deleteRobot = async (id) => {
    setRobots(robots.filter((robot) => robot.id !== id));
    Request.deleteRobot(id);
  }

  const editRobot = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ? { ...robot, isEditing: !robot.isEditing } : robot
      )
    );
  }

  const editTask = (value, id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ?
          {...robot, robot: value, isEditing: !robot.isEditing } : robot
      )
    );
    Request.editRobot(id, value);
  };

  const toggleFavorite = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ? { ...robot, favorite: !robot.favorite } : robot
      )
    );
    Request.toggleFavorite(id, userName);
  }

  return (
    <>
      <div className='robot-wrapper'>
      <h1>List all you robots !</h1>
        <RobotForm  addRobot={addRobot} />
        {robots.map((robot) =>
          robot.isEditing ? (
            <EditRobotForm key={robot.id} editRobot={editTask} robot={robot} />
          ) :
          <Robot
            key={robot.id}
            robot={robot}
            deleteRobot={deleteRobot}
            editRobot={editRobot}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </>
  )
}
