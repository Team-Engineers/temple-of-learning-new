import React from 'react'
import logo from '../../Assets/images/Logo/tol-logo.png'
import mobSign from '../../Assets/images/signupImg/mobSign.png'
import SignFb from '../../Components/SignFb/SignFb'
import Form from '../../Components/SignForm/Form'
import SignInGoogle from '../../Components/SignGoogle/SignInGoogle'
import './signup.css'


function Signup() {
  return (
    <div className="signup flex">
      <div className='logo'>
        <img src={logo} alt='logo'></img>
      </div>
      <div className="discover">
        <p>Discover Courses and Career
          Paths at Your Fingertips</p>
      </div>
      <div className='img-sec'>
        <img src={mobSign} alt=''></img>
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
        {/* <div className="flex justify-center">
              <CreateButton/>
            </div> */}
      </div>
    </div>
  )
}

export default Signup
