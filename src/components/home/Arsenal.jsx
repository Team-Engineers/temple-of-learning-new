import React from "react";
import { datas } from "../../constants/Arsenal";
import FlipCard from "./flipcard/FlipCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';

function Arsenal() {
    return (
        <div className="my-[100px]">
            <div>
                <h1 className="text-[40px] my-16 font-bold text-center">
                    Courses In Our Arsenal
                </h1>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                keyboard={true}
                direction="horizontal"
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Keyboard ,Mousewheel]}
                className="mySwiper"
            >
                {datas?.map((card, i) => (
                    <SwiperSlide key={i}>
                        <FlipCard card={card} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default Arsenal;
