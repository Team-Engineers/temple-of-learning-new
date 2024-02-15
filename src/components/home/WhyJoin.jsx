import WhyJoinCard from "./WhyJoinCard";
import { whyJoinData } from "../../constants/WhyJoinData";
function WhyJoin() {
    return (
        <section className="relative z-10 text-black py-14">
            <div className="mx-[50px]">

                <h2 className="text-[33px] text-center uppercase font-bold ">
                    Why you should join <span className="font-comic-sans text-[38px] text-blue-600">Temple of Learning?</span>
                </h2>

                <div className="text-center mx-[100px] font-bold my-8 text-3xl">
                    <p>Team instrumental in maximum selections at BMS / BBA / LAW / HM & other undergraduate entrance exams over the last two decades.
                    </p>
                </div>

                <div className="grid mx-[60px] grid-cols-2 md:grid-cols-5 gap-4 text-center">
                    {whyJoinData.map((data, index) => (
                        <WhyJoinCard
                            key={index}
                            num={data.num}
                            img={data.img}
                            text={data.text}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}

export default WhyJoin;