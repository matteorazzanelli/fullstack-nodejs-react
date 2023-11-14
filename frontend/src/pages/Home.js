import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem('user-info'));

  const logout = () => {
    localStorage.removeItem("user-info");
    navigate('/');
  };

  return (
    <>
      <div>Hi, {user}</div>
      <div className='submit-btn' onClick={logout}>
        Logout
      </div>
    </>
  )
}
