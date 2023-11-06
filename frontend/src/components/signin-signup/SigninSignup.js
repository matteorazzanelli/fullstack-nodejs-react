import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './SigninSignup.css'
import Validation from './FormValidation'
import axios from 'axios'


import user_icon from '../../images/person.png'
import email_icon from '../../images/email.png'
import password_icon from '../../images/password.png'

export default function Login() {

  const [action, setAction] = useState('Sign Up');
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e)  => {
    setValues({...values, [e.target.name]: e.target.value});
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tmpErrors = Validation(values);
    setErrors(tmpErrors);
    console.log('premutttoooooo')
    console.log(tmpErrors)
    console.log(values)
    if(tmpErrors.name === '' && tmpErrors.email === '' && tmpErrors.password === ''){ //FIXME: this 
      console.log('inviaaa')
      const res = (await axios.post('http://localhost:5000/login', {"content": values}));
      console.log('rispostaaaaa', res.data)
      if(res.data.content.length > 0)
        navigate('/home');
      else
        alert('no record exist')
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==='Login'?<div></div>:
        <div className='input'>
          <img src={user_icon} alt='' />
          <input type='text' 
            placeholder='Name' 
            name='name' 
            value={values.name} 
            onChange={handleChange}/>
        </div>}
        {errors.name && <span className='error-msg'>{errors.name}</span>}
        <div className='input'>
          <img src={email_icon} alt='' />
          <input type='email' 
            placeholder='Email' 
            name='email' 
            value={values.email} 
            onChange={handleChange}/>
        </div>
        {errors.email && <span className='error-msg'>{errors.email}</span>}
        <div className='input'>
          <img src={password_icon} alt='' />
          <input type='password' 
            placeholder='Password' 
            name='password' 
            value={values.password} 
            onChange={handleChange}/>
        </div>
        {errors.password && <span className='error-msg'>{errors.password}</span>}
      </div>
      <div className='terms-policy'>
        <input type='checkbox' id='terms' name='terms' />
        <label htmlFor='terms'>You agree to our terms and policies.</label>
      </div>
      <div className='switch-btns-container'>
        <div className={action==='Login'?'switch-btn gray':'switch-btn'}
          onClick={()=>{setAction('Sign Up')}}>
            Sign Up
        </div>
        <div className={action==='Sign Up'?'switch-btn gray':'switch-btn'} 
          onClick={()=>{setAction('Login')}}>
            Login
        </div>
      </div>
      <div className='submit-btn' onClick={handleSubmit}>
        Submit
      </div>
    </div>
  )
}
