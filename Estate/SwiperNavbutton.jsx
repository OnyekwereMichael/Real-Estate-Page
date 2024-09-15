import React from 'react'
import { useSwiper } from 'swiper/react'
import next from "../Estate/src/assets/next.png";
import prev from  "../Estate/src/assets/prev.png";

const SwiperNavbutton = () => {
    const swiper = useSwiper()
  return (
    <div>
      <div className="flex justify-end  gap-10 mx-4 ">
                <img src={prev} alt="" className="mx-3" onClick={() => swiper.slidePrev()}/>
                <img src={next} alt="" className="mx-3" onClick={() => swiper.slideNext()}/>
            </div>
    </div>
  )
}

export default SwiperNavbutton
