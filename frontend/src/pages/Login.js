import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Validation from '../components/LoginValidation'

export default function Login() {
  
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e)  => {
    setValues(prev => ({...prev, [e.target.name]: [e.target.value]}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))
  }

  return (
    <div className=''>
      <div className=''>
        <h2>Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor='email'>Email</label>
            <input 
              type="email" 
              placeholder='Enter email' 
              name='email'
              value={values.email}
              onChange={handleChange} 
              className=''
            />
            {errors.email && <span className=''>{errors.email}</span>}
          </div>
          <div className=''>
            <label htmlFor='password'>Password</label>
            <input 
              type="password" 
              placeholder='Enter password' 
              name='password'
              value={values.password}
              onChange={handleChange}
              className=''
            />
            {errors.password && <span className=''>{errors.password}</span>}
          </div>
          <button 
            type='submit' 
            className=''
          >
            Login
          </button>
          <p>You are agree to our terms and policies.</p>
          <Link to='/signup' className=''>Create Account</Link>
        </form>
      </div>
    </div>
  )
}
