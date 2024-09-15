import Abstract_Design from "../../assets/Abstract_Design.png"; 
import { property } from "../../data/homeData/Properties"; 
import { Swiper, SwiperSlide } from "swiper/react"; 
import 'swiper/css/pagination'; 
import "swiper/css"; 
import SwiperNavbutton from "../../../SwiperNavbutton"; 

function properties() {
    return (
        <div className="font-Lexend sm:my-3">
            <section className=" mx-4 mt-7 text-white">
                <img src={Abstract_Design} alt="" />

                <div className="flex justify-between items-center flex-wrap">
                    <div>
                        <h1 className="text-2xl mt-2">Featured Properties</h1>
                        <p className="max-w-[800px] text-[#999999] text-sm mt-2 xll:max-w-[700px]">
                            Explore our handpicked selection of featured properties. Each
                            listing offers a glimpse into exceptional homes and investments
                            available through Estatein. Click "View Details" for more
                            information.
                        </p>
                    </div>
                    <a
                        href=""
                        className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#1A1A1A] border-[1px] p-[14px] rounded-lg text-sm sm:hidden lg:hidden"
                    >
                        View All Properties
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
                    {property.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="border-[#262626] border-[2px] m-4 p-3 rounded-xl text-white ">
                                    <img
                                        src={item.img}
                                        alt=""
                                        className="w-[100%] rounded-lg object-cover"
                                    />
                                    <h1 className="text-xl font-semibold mt-2">{item.heading}</h1>
                                    <p className="mt-2 text-sm text-[#999999]">{item.description}</p>
                                    <section className="flex justify-between items-center mt-4">
                                        <div className="flex items-center gap-2 border-[#262626] border-[3px] p-[6px] rounded-xl">
                                            <img src={item.car} alt="" />
                                            <p className="text-sm">{item.Bedroom}</p>
                                        </div>
                                        <div className="flex items-center gap-2 border-[#262626] border-[3px] p-[6px] rounded-xl">
                                            <img src={item.tub} alt="" />
                                            <p className="text-sm">{item.Bathroom}</p>
                                        </div>
                                        <div className="flex items-center gap-2 border-[#262626] border-[3px] p-[6px] px-[15px] rounded-xl">
                                            <img src={item.subtract} alt="" />
                                            <p className="text-sm">{item.villa}</p>
                                        </div>
                                    </section>
                                    <div className="mt-4 flex items-center justify-between">
                                        <div>
                                            <p className="text-[#999999]">price</p>
                                            <h1 className="mt-2 font-semibold">{item.price}</h1>
                                        </div>
                                        <button className="bg-[#703BF7] text-white p-[9px] rounded-lg mx-4 text-sm">
                                            View Property Details
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </section>
                <div className="flex items-center justify-end">
                    <a
                        href=""
                        className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] border-[3px] p-[8px] rounded-lg text-sm mdd:hidden anchor"
                    >
                        View All Properties
                    </a>
                    <SwiperNavbutton />
                </div>
            </Swiper>

        </div>
    )
}

export default properties;
