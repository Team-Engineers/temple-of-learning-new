import React from 'react'
import logo from '../../assets/images/Social-logo/fb-logo.png'
import './SignFb.css'
export default function SignFb() {
  return (
    <div>
      <div className="fb w-72 text-md h-14 text-center rounded-xl flex justify-center items-center gap-2">
        <img src={logo} alt='' className="h-6 w-6 cursor-pointer"></img>
        <a href="/" className="text-black text-center">Sign in with Facebook</a>
      </div>
    </div>
  )
}
