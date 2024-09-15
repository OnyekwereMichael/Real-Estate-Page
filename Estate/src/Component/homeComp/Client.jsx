import Abstract_Design from "../../assets/Abstract_Design.png"; 
import { Clients } from "../../data/homeData/Client"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; 
import SwiperNavbutton from "../../../SwiperNavbutton"; 

function Client() {
    return (
        <div className="font-Lexend sm:my-3">
            <section className="mx-4 text-white">
                <img src={Abstract_Design} alt="" />
                <div className="flex justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-2xl mt-2">What Our Clients Say</h1>
                        <p className="max-w-[800px] text-[#999999] text-sm mt-2 xll:max-w-[700px]">
                            Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.
                        </p>
                    </div>
                    <a href="" className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[1px] p-[14px] rounded-lg text-sm sm:hidden lg:hidden">
                        View All Testimonials</a>
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
                    {Clients.map((item, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <div className="border-[#262626] border-[solid] border-[2px] rounded-xl px-5 py-2 m-3 sm:mx-3 sm:mt-5 text-white">
                                    <div className="flex justify-between items-center gap-2 mt-4 w-[24px] h-[24px]">
                                        <img src={item.ratings} alt="" />
                                        <img src={item.ratings} alt="" />
                                        <img src={item.ratings} alt="" />
                                        <img src={item.ratings} alt="" />
                                        <img src={item.ratings} alt="" />
                                    </div>
                                    <h1 className="font-semibold my-3 text-[17px]">{item.heading}</h1>
                                    <p className="my-1 text-[13px] lg:mb-4 sm:my-0 text-[#999999]">
                                        {item.article}
                                    </p>
                                    <div className="flex items-center gap-3 my-4 mt-5">
                                        <img src={item.profile_img} alt="" className="w-[40px]" />
                                        <div className="block">
                                            <p className="font-semibold text-sm">{item.profile_name}</p>
                                            <p className="text-xs text-[#999999]">{item.profile_state}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </section>
                {/* mobile  */}
                <div className="flex items-center justify-end">
                    <a
                        href=""
                        className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[3px] p-[8px] rounded-lg text-sm mdd:hidden anchor"
                    >
                        View All Testimonials
                    </a>
                    <SwiperNavbutton />
                </div>
            </Swiper>

        </div>
    )
}

export default Client;
