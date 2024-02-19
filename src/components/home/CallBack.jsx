import React from 'react'
import gradient3 from "../../Assets/images/book.png";
import contactfront from '../../Assets/images/home/contactfront.png';
import contactback from '../../Assets/images/home/contactback.png';
import contact2 from '../../Assets/images/home/contact2.png';

const CallBack = () => {
    return (
        <div>
            <img className='absolute' src={gradient3} alt="" />
            <div className='bg-[#DCFFFC] grid grid-cols-2 rounded-[80px] m-28'>
            <div className='relative' >
            <img className='absolute right-0  ' src={contactfront} alt="" />
                <div className='p-10 relative z-20'>
                    <h1 className='text-[45px]'>
                        Request a call  <span className='font-bold text-red-700'>Back</span>
                    </h1>
                    <h1 className='font-bold my-10 w-[70%]'>
                        Have a question or need assistance? Reach out to us via email,
                        phone, or the contact form below. We're eager to assist you.
                    </h1>
                    <h1 className='text-blue-500 font-bold'>
                        Nice hearing from you!
                    </h1>
                </div>
                <img className='absolute right-0 ' src={contactback} alt="" />
                <img className="absolute bottom-0 right-[90px] " src={contact2} alt="" />
            </div>
            
            <div>
                <form className='flex flex-col w-[70%] ml-8 py-7' action="
            ">
                    <label className='my-4 font-medium' htmlFor="name"> Full Name</label>
                    <input className='border h-10 p-5  font-medium  border-blue-700 rounded-3xl' type="text" />
                    <label className='my-4 font-medium' htmlFor="email"> Email</label>
                    <input className='border  font-medium p-5 h-10 border-blue-700 rounded-3xl' type="text" />
                    <label className='my-4 font-medium' htmlFor="message">Reason</label>
                    <textarea className='border font-medium px-5 pt-3   border-blue-700 rounded-3xl' name="" id="" cols="30" rows="10"></textarea>
                    <button className='p-4 text-white rounded-3xl my-5  relative bg-blue-700 max-w-[50%]'>
                        Submit
                    </button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default CallBack