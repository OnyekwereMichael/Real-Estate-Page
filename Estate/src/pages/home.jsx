import React from "react";
import building from "../assets/building1.png";
import sublogo from "../assets/sublogo.png";
import arrow from "../assets/arrow.png";
import icon1 from "../assets/Icon1.png";
import icon2 from "../assets/Icon2.png";
import icon3 from "../assets/Icon3.png";
import icon4 from "../assets/Icon4.png";
import Abstract_Design from "../assets/Abstract_Design.png";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import "swiper/css";
import "./home.css";
import SwiperNavbutton from "../../SwiperNavbutton";
import Properties from '../Component/homeComp/properties';
import Client from '../Component/homeComp/Client';
import Faq from '../Component/homeComp/Faq'

const home = () => {
  return (
    <div className="pt-[52px] font-Lexend">
      <img src={sublogo} alt="" className="sublogo" />
      {/* Hero Section */}
      <section className="grid grid-cols-2 items-center mx-4 mt-4 mb-0 sm:grid-cols-1 sm:m-4">
        <div className="max-w-[600px]">
          <h1 className="font-semibold text-white text-[52px] Property xll:text-[35px] xsmm:text-[28px]">Discover Your Dream Property with Estatein</h1>
          <p className="text-[#999999] text-[15px] journey font-[500] xll:text-[12px]">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
          <div className="my-6 sm:flex sm:flex-col">
            <a href="" className="font-semibold text-[#FFFFFF] border-[#262626] border-[3px] p-[8px] rounded-lg text-center">Learn More</a>
            <button className="bg-[#703BF7] text-white p-[9px] rounded-lg mx-4 sm:mx-0 sm:mt-4">Browse Property</button>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-2">
            <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] p-[6px] rounded-lg xll:mx-1">
              <h1 className="font-semibold text-2xl mx-3 my-2 sm:text-center sm:text-3xl lg:text-center xsmm:text-2xl">200+</h1>
              <p className="text-[#999999] mx-3 my-2 text-sm sm:text-sm xsmm:text-xs sm:text-center xll:text-xs lg:text-center">Happy Customers</p>
            </div>
            <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] p-[8px] rounded-lg xll:mx-1">
              <h1 className="font-semibold text-2xl mx-3 my-2 sm:text-center sm:text-3xl xsmm:text-2xl">10k+</h1>
              <p className="text-[#999999] mx-3 my-2 text-sm sm:text-sm xsmm:text-xs sm:text-center xll:text-xs lg:text-xs">Properties For Clients</p>
            </div>
            <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] p-[8px] rounded-lg sm:w-[92vw] xsmm:w-[90vw] xll:mx-2">
              <h1 className="font-semibold text-2xl mx-3 my-2 sm:text-center sm:text-3xl lg:text-center">16+</h1>
              <p className="text-[#999999] mx-3 my-2 text-sm sm:text-sm sm:text-center xll:text-xs lg:text-xs lg:text-center">Years of Experience</p>
            </div>
          </div>
        </div>
        <img src={building} alt="building" className="Abstarct sm:my-10" />
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-4 gap-6 border-[5px] border-[#262626] p-3 border-solid sm:m-4 sm:grid-cols-2 xmm:grid-cols-1">
        <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] rounded-lg">
          <div className="flex justify-end mx-auto p-2">
            <img src={arrow} alt="" className="w-[20px]" />
          </div>
          <div className="">
            <img src={icon1} alt="" className="mx-auto flex" />
            <p className="my-4 text-center text-[16px] sm:text-sm sm:mb-2 lg:text-xs">Find Your Dream Home</p>
          </div>
        </div>
        <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] rounded-lg">
          <div className="flex justify-end mx-auto p-2">
            <img src={arrow} alt="" className="w-[20px]" />
          </div>
          <div className="">
            <img src={icon2} alt="" className="mx-auto flex" />
            <p className="my-4 text-center text-[16px]sm:text-sm sm:mb-2 lg:text-xs">Unlock Property Value</p>
          </div>
        </div>
        <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] p-[6px] rounded-lg">
          <div className="flex justify-end mx-auto p-2">
            <img src={arrow} alt="" className="w-[20px]" />
          </div>
          <div className="">
            <img src={icon3} alt="" className="mx-auto flex" />
            <p className="mt-3 text-center text-[16px] sm:text-sm lg:text-xs">Property Management</p>
          </div>
        </div>
        <div className="text-white border-[#262626] bg-[#1A1A1A] border-[2px] p-[6px] rounded-lg">
          <div className="flex justify-end mx-auto p-2">
            <img src={arrow} alt="" className="w-[20px]" />
          </div>
          <div className="">
            <img src={icon4} alt="" className="mx-auto flex" />
            <p className="mt-3 text-center text-[16px] sm:text-sm lg:text-xs">Smart Investments.</p>
          </div>
        </div>
      </section>

      <Properties />

      <Client />

      <Faq />

      <div className="mx-4 flex justify-between items-center sm:flex-wrap sm:my-10 sm:space-y-3 ">
        <div>
        <img src={Abstract_Design} alt="" />
          <h1 className="text-2xl mt-2 text-white">Start Your Real Estate Journey Today</h1>
          <p className="text-[#999999] text-sm mt-2 ">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is<br className="sm:hidden lg:hidden" /> here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch<br className="sm:hidden lg:hidden" /> with our team for personalized assistance.</p>
        </div>

        <div className="mx-5 font-semibold text-[#FFFFFF] border-[#262626] bg-[#703BF7] border-[1px] p-[14px] rounded-lg text-sm  font-Urbanist sm:w-[95vw] text-center sm:mx-auto">
          <a href="" >Explore Properties</a>
        </div>
      </div>

    </div>
  );
};

export default home;
