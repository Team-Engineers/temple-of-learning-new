import React from 'react'
import './signup.css'
import SignInGoogle from '../../Component/SignGoogle/SignInGoogle'
import SignFb from '../../Component/SignFb/SignFb'
import Form from '../../Component/SignForm/Form'
import mobSign from '../../Assets/signupImg/mobSign.png'
import logo from '../../Assets/Logo/tol-logo.png'
// import CreateButton from '../../Component/SignButton/CreateButton'
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
             <SignInGoogle/>
             <SignFb/>
          </div>
            <div className="divider ">
              <h2>- OR -</h2>
            </div>
            <div>
            <Form/>
            </div>
            {/* <div className="flex justify-center">
              <CreateButton/>
            </div> */}
         </div>
    </div>
  )
}

export default Signup
