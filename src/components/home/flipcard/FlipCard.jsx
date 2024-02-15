import React, { useState } from "react";
import './flipcard.css'
import { Tilt } from "react-tilt";

const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.05,
    speed: 500,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
};

function FlipCard({ card }) {
    const [showDetails, setDetails] = useState(false);

    const showDetailsHandler = () => {
        setDetails(true);
    };
    const hideDetailsHandler = () => {
        setDetails(false);
    };


    return (
        <Tilt options={defaultOptions} className="my-[100px] relative flip-card">
            <div
                className={`flip-card-inner relative  h-[100%]  shadow-2xl ${showDetails ? "flip-card-active" : ""}`}
            >
                <div className=" shadow-2xl  flex flex-col justify-center items-center bg-gradient-to-r  p-10 from-yellow-200 to-green-500 flip-card-front">
                    <div
                        className="card-item-header"
                    >
                        <div className="card-item-photo">
                            <img src={card?.image} alt="produc error" />
                        </div>
                    </div>
                    <div className="">
                        <p className=" font-medium leading-[70px] mb-8 text-center text-white text-[60px]">
                            {card?.course_name}
                        </p>
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <p className="font-medium text-[20px] flex justify-center text-center">Tap the Plus to get more information</p>
                            <p
                                className=""
                                onClick={showDetailsHandler}
                            >
                                <i class="fa-solid text-[40px] hover:text-white transition-colors duration-300   text-black fa-circle-plus"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative shadow-2xl mx-auto h-[500px] flex flex-col justify-center items-center p-10 flip-card-back">
    <div className="overflow-y-auto h-full">
        <div className="card-item-photo">
            <p className="font-medium w-[80%] mx-auto leading-[70px] mb-8 text-center text-black text-[60px]">
                {card?.course_name}
            </p>
        </div>
        <div className="text-[15px] w-[80%] mx-auto">
            <p>{card?.Course_details}</p>
        </div>
    </div>
    <div className="go-back" onClick={hideDetailsHandler}>
        <i className="fa-solid hover:text-green-400 text-[40px] relative  transition-colors duration-300 text-black fa-circle-minus"></i>
    </div>
</div>

            </div>
        </Tilt>
    );
}

export default FlipCard;
