import React, { useEffect } from 'react'

import SigninSignup from '../components/signin-signup/SigninSignup'
import Request from '../app/ClientApi';

export default function Login() {

  useEffect(()=>{
    const testBackend = async () => {
      await Request.testBackend();
    }
    testBackend()
  },[])

  return (
    <>
      <SigninSignup/>
    </>
  )
}
