import React from 'react'
import { Link } from 'react-router-dom'
import { default as book, default as image2 } from "../../assets/images/book.png"
import image1 from "../../assets/images/home/about1.png"
import about2 from "../../assets/images/home/about2.png"
import gradient from "../../assets/images/home/gradient.png"
import { default as gradient1, default as gradient2 } from "../../assets/images/home/gradient1.png"
const AboutUs = () => {
    return (
        <div className='relative'>
            <div>
                <img className='absolute' src={gradient1} alt="" />
            </div>
            <div>
                <img className='absolute' src={gradient2} alt="" />
            </div>

            <div className='w-screen mt-10 lg:h-screen z-20 relative max-w-[1280px] mx-auto overflow-hidden'>
                <div className='md:mx-[100px] mx-[20px] '>
                    <div className='grid lg:grid-cols-2 grid-cols-1 '>
                        <div className='relative  max-md:mx-auto'>
                            <img className='max-w-[350px] max-md:mx-[10px] max-md:w-[250px]' src={about2} alt="" />
                            <img className='absolute  max-md:max-w-[250px] right-16 bottom-[-80px]' src={image1} alt="" />
                        </div>

                        <div className='flex max-md:mt-[100px] flex-col space-y-6  justify-center '>
                            <h1 className=' text-left text-[18px] font-bold'>
                                ABOUT US
                            </h1>
                            <h1 className='font-bold  text-[30px]'>
                                Fostering a Community of
                                Lifelong Learners.
                            </h1>
                            <h3 className='font-bold text-[14px] text-gray-600'>
                                Unite with us to nurture a community where learning knows no bounds.
                                Elevate your potential, evolve as a lifelong learner, and thrive in a world of
                                continuous growth.
                            </h3>
                            <div className='flex flex-col gap-5'>
                                <div className='flex gap-3 flex-row'>
                                    <div className='  bg-[#F86D04]   rounded-full'>
                                        <img className=' p-5 w-[100px] ' src={image2} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold mb-2 text-[14px]'>
                                            Flexible Classes
                                        </h1>
                                        <h1 className='font-bold text-[10px]'>
                                            Discover the freedom of learning on your terms with our flexible
                                            classes. Tailor your education to your schedule and unlock a
                                            world of possibilities.
                                        </h1>
                                    </div>
                                </div>
                                <div className='flex gap-3 flex-row'>
                                    <div className='  bg-[#F86D04]   rounded-full'>
                                        <img className=' p-5 w-[100px] ' src={book} alt="" />
                                    </div>
                                    <div>
                                        <h1 className='font-bold mb-2 text-[14px]'>
                                            Flexible Classes
                                        </h1>
                                        <h1 className='font-bold text-[10px]'>
                                            Discover the freedom of learning on your terms with our flexible
                                            classes. Tailor your education to your schedule and unlock a
                                            world of possibilities.
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <Link className='font-bold  mb rounded-3xl px-5 mt-10 py-5 shadow-2xl flex max-w-[40%] justify-center items-center bg-[#C8F031] whitespace-nowrap' to={'/about'}>
                                    Know About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className='absolute' src={gradient} alt="" />
            </div>
        </div>
    )
}

export default AboutUs