import React, { useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import RobotForm from './RobotForm'
import EditRobotForm from './EditRobotForm'
import Robot from './Robot'

import './Robot.css'

export default function RobotWrapper() {

  const [robots, setRobots] = useState([]);

  const addRobot = (robot) => {
    setRobots([
      ...robots,
      { 
        id: nanoid(), 
        robot: robot, 
        favorite: false, 
        isEditing: false 
      },
    ]);
    // write in the DB
  }

  const deleteRobot = (id) => {
    setRobots(robots.filter((robot) => robot.id !== id));
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
  };

  const toggleFavorite = (id) => {
    setRobots(
      robots.map((robot) =>
        robot.id === id ? { ...robot, favorite: !robot.favorite } : robot
      )
    );
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
