import React from 'react';
import './loginForm.css';

const Loginform = () => {
  return (
    <div className="container mx-auto py-8">
      <form className="max-w-lg mx-auto bg-white  rounded  pt-6 pb-8 mb-4">
        {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="full-name">
          </label>
          <input className=" border-b border-gray-500  w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="full-name" type="text" placeholder="Your Full Name" />
        </div> */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          </label>
          <input className="  border-b border-gray-500 w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email Address" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          </label>
          <input className="  border-b border-gray-500 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
        </div>
        <div className="mb-6">
          <button className="bg-[#77D3FF] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline shadow-md rounded-lg" id="btn"> Create Account </button>
        </div>
        <div className="mb-4">
          <p> Already have an account? <a href="/signup" className="text-[#77D3FF]" >Signup</a></p>
        </div>
      </form>
    </div>
  );
}

export default Loginform;
