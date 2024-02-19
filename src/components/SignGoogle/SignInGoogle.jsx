import React from 'react'
import logo from '../../assets/images/Social-logo/google-logo.png'
import './SignInGoogle.css'
export default function SignInGoogle() {
  return (
    <div className="google w-72 text-md h-14 text-center rounded-xl flex justify-center items-center gap-2">
      <img src={logo} alt='' className="h-6 w-6 cursor-pointer"></img>
      <a href="/" className="text-black text-center">Sign in with Google</a>
    </div>
  )
}
