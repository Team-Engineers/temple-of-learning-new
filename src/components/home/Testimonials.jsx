import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Testimonialsdatas } from "../../constants/testimonialdata";

import { Navigation, Pagination } from 'swiper/modules';

export default function Testimonials() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}

                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {Testimonialsdatas.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='h-[400px] m-10 relative'>
                            <div className="bg-[#77D3FF] rounded-lg h-[350px] p-5 duration-100">
                                <img className='absolute w-[25px]' src={require("../../assets/images/home/icon.png")} alt="" />
                                <p className='flex justify-center leading-6 mt-[10%] font-medium items-center'>
                                    {item.text}
                                </p>
                                <div className='h-[130px] rounded-lg absolute bottom-0 left-0 right-0 bg-black flex flex-col justify-center items-center'>
                                    <img className='mx-autu relative top-[-55px]' src={require("../../assets/images/home/testimonial.png")} alt="" />
                                    <p className="text-white relative text-[30px] font-medium top-[-30px]">{item.name}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
