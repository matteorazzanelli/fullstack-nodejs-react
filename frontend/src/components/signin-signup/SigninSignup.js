import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './SigninSignup.css'
import Validation from './FormValidation'
import axios from 'axios'

import { MdMail, MdPerson2 } from "react-icons/md";
import { BiSolidLockAlt } from "react-icons/bi";

export default function Login() {

  const [action, setAction] = useState('Sign Up');
  
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    terms: false
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e)  => {
    if(e.target.name === 'terms')
      setValues({...values, [e.target.name]: e.target.checked});
    else
      setValues({...values, [e.target.name]: e.target.value});
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const tmpErrors = Validation(values, action);
    setErrors(tmpErrors);
    if(action === 'Sign Up'){
      if(tmpErrors.name==='' && tmpErrors.email==='' && tmpErrors.password==='' && tmpErrors.terms===''){ 
        const {terms, ...objToSend} = values;
        (await axios.post('http://localhost:5000/signup', {"content": objToSend})
          .then(function(response){setAction('Sign In');console.log('ok')})
          .catch(function(error){alert('email is already in use')})
          .finally(function(){setValues({...values, password: ''})}))
      }
    }
    else{
      if(tmpErrors.email === '' && tmpErrors.password === ''){
        const {terms, name, ...objToSend} = values;
        (await axios.post('http://localhost:5000/signin', {"content": objToSend})
          .then(function(response){navigate('/home');console.log('ok')})
          .catch(function(error){alert('no record exist')})
          .finally(function(){setValues({...values, password: ''})}))
      }
    }
  }

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action==='Sign In'?<div></div>:
        <div className='input'>
          <div className='img'><MdPerson2 size={30}></MdPerson2></div>
          <input 
            type='text' 
            placeholder='Name' 
            name='name' 
            value={values.name} 
            onChange={handleChange}/>
        </div>}
        {errors.name && <span className='error-msg'>{errors.name}</span>}
        <div className='input'>
          <div className='img'><MdMail size={30}></MdMail></div>
          <input 
            type='email' 
            placeholder='Email' 
            name='email' 
            value={values.email} 
            onChange={handleChange}/>
        </div>
        {errors.email && <span className='error-msg'>{errors.email}</span>}
        <div className='input'>
          <div className='img'><BiSolidLockAlt size={30}></BiSolidLockAlt></div>
          <input 
            type='password' 
            placeholder='Password' 
            name='password' 
            value={values.password} 
            onChange={handleChange}/>
        </div>
        {errors.password && <span className='error-msg'>{errors.password}</span>}
      </div>
      {action==='Sign In'?<div></div>:
      <div className='terms-policy'>
        <input 
          type='checkbox'
          id='terms'
          name='terms' 
          checked={values.terms}
          onChange={handleChange}/>
        <label htmlFor='terms'>You agree to our terms and policies.</label>
      </div>}
      {errors.terms && <span className='error-msg'>{errors.terms}</span>}
      <div className='switch-btns-container'>
        <div className={action==='Sign Up'?'switch-btn' : 'switch-btn gray'}
          onClick={()=>{setAction('Sign Up');setErrors({});}}>
            Sign Up
        </div>
        <div className={action==='Sign Up'?'switch-btn gray':'switch-btn'} 
          onClick={()=>{setAction('Sign In');setErrors({});}}>
            Sign In
        </div>
      </div>
      <div className='submit-btn' onClick={handleSubmit}>
        Submit
      </div>
    </div>
  )
}
