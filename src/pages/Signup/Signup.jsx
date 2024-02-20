import React from 'react'
import Tollogo from '../../assets/images/Logo/tol-logo.png'
import mobSign from '../../assets/images/signupImg/mobSign.png'
import SignFb from '../../components/SignFb/SignFb'
import Form from '../../components/SignForm/Form'
import SignInGoogle from '../../components/SignGoogle/SignInGoogle'
import './signup.css'


function Signup() {
  return (
    <div className="signup flex">
      <div className='tol-logo'>
        <img src={Tollogo} alt='logo'></img>
      </div>
      <div>
      <div className="discover">
        <p>Discover Courses and Career
          Paths at Your Fingertips</p>
      </div>
      <div className='img-sec'>
        <img src={mobSign} alt=''></img>
      </div>
      </div>
      <div className="second">
        <div className="account pt-8">
          <p>Create Account</p>
        </div>
        <div className="sign-box flex gap-16 m-10 overflow-hidden w-full">
          <SignInGoogle />
          <SignFb />
        </div>
        <div className="divider ">
          <h2>- OR -</h2>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default Signup
