import Abstract_Design from "../../assets/Abstract_Design.png"; 
import { Faqs } from "../../data/homeData/Faq"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import SwiperNavbutton from "../../../SwiperNavbutton"; 

function Faq() {
    return (
        <div className="font-Lexend sm:my-3">
            <section className="mx-4 mt-2 text-white">
                <img src={Abstract_Design} alt="" />
                <div className="flex justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-2xl mt-2">Frequently Asked Question</h1>
                        <p className="max-w-[800px] text-[#999999] text-sm mt-2 xll:max-w-[700px]">
                            Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.
                        </p>
                    </div>
                    <a
                        href=""
                        className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[1px] p-[14px] rounded-lg text-sm sm:hidden lg:hidden"
                    >
                        View All FAQ’s
                    </a>
                </div>
            </section>

            <Swiper
                spaceBetween={1}
                slidesPerView={1}
                breakpoints={{
                    540: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                }}
            >
                <section className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-2">
                    {Faqs.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="border-[#262626] border-[solid] border-[2px] rounded-xl px-5 py-4 m-3 sm:mx-3 sm:mt-5">
                                    <h1 className="text-[#FFFFFF] text-[17px] my-6 ">{item.question}</h1>
                                    <p className="text-[#999999] text-sm my-6 ">{item.paragraph}</p>
                                  

                                    <div className=" my-6 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[1px] p-[10px] rounded-lg text-sm text-center w-[8vw] sm:w-[85vw] sm:p-[14px] ">
                                         <a href="">{item.readMore}</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </section>
                <div className="flex items-center justify-end">
                    <a
                        href=""
                        className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[3px] p-[12px] rounded-lg text-sm  anchor"
                    >
                        View All Testimonials
                    </a>
                    <SwiperNavbutton />
                </div>
            </Swiper>


        </div>
    )
}

export default Faq
