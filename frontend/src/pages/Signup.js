import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Validation from '../components/SignupValidation'

import axios from 'axios'

export default function Signup() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({})

  const handleChange = (e)  => {
    setValues(prev => ({...prev, [e.target.name]: e.target.value}));
  }

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values))
    if(errors.name === '' && errors.email === '' && errors.password === ''){
      const res = (await axios.post('http://localhost:5000/signup', {"content": values})).data;

      navigate('/');
    }
  }

  return (
    <div className=''>
      <div className=''>
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className=''>
            <label htmlFor='name'>Name</label>
            <input 
              type="text" 
              placeholder='Enter name' 
              name='name'
              value={values.name}
              onChange={handleChange}
              className=''
            />
            {errors.name && <span className=''>{errors.name}</span>}
          </div>
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
            Sign up
          </button>
          <p>You are agree to our terms and policies.</p>
          <Link to='/' className=''>Login</Link>
        </form>
      </div>
    </div>
  )
}
