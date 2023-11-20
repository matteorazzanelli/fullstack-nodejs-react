import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import RobotWrapper from '../components/robot/RobotWrapper';

export default function Home() {

  const navigate = useNavigate();

  const [user, setUser] = useState(undefined);

  useEffect(()=>{
    const userName = (localStorage.getItem('user-info'));
    if(userName===null){
      alert('Session expired')
      navigate('/')
    }
    else{
      setUser(userName
        .replaceAll('"', '')
        .split("@")[0]
        .toUpperCase()
      );
    }
    // eslint-disable-next-line
  },[])

  const logout = () => {
    localStorage.removeItem("user-info");
    navigate('/');
  };

  return (
    <>
      {user && <div className='welcome'>Hi, {user}</div>}
      <RobotWrapper/>
      <div className='submit-btn' onClick={logout}>
        Logout
      </div>
    </>
  )
}
