import React from 'react'
import logo from '../../Assets/images/Logo/tol-logo.png'
import moblogin from '../../Assets/images/loginImg/login.png'
import google from '../../Assets/images/Social-logo/google-logo.png'
import fb from '../../Assets/images/Social-logo/fb-logo.png'
// import SignFb from '../../Components/SignFb/SignFb'
// import Form from '../../Components/SignForm/Form'
import './login.css'
import Loginform from '../../Components/loginForm/Loginform'
// import SignInGoogle from '../../Components/SignGoogle/SignInGoogle'

function Login() {
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
      <img src={moblogin} alt=''></img>
    </div>
    <div className="second">
      <div className="account pt-8">
        <p>Login</p>
      </div>
      <div className="sign-box flex gap-16 m-10 overflow-hidden w-full">
        <div>
        <div className="google w-72 text-md h-14 text-center rounded-xl flex justify-center items-center gap-2">
      <img src={google} alt='' className="h-6 w-6 cursor-pointer"></img>
      <a href="/" className="text-black text-center">Sign in with Google</a>
    </div>
        </div>
       <div>
       <div className="fb w-72 text-md h-14 text-center rounded-xl flex justify-center items-center gap-2">
        <img src={fb} alt='' className="h-6 w-6 cursor-pointer"></img>
        <a href="/" className="text-black text-center">Sign in with Facebook</a>
      </div>
       </div>
      </div>
      <div className="divider ">
        <h2>- OR -</h2>
      </div>
      <div>
       <Loginform/>
      </div>
    </div>
  </div>
  )
}

export default Login
