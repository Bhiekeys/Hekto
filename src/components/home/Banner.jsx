/** @format */

import React from 'react';
import Light from '../../assets/light.png';
import Dot from '../../assets/dot.png';
import sofa from '../../assets/sofa.png';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={true}>
        <SwiperSlide>
          <div className="pt-[100px] bg-[#F2F0FF] flex justify-center flex-col md:flex-row md:items-start pb-16 items-center">
            <div className="">
              <img src={Light} alt="" />
              <img src={Dot} className="md:ml-[95px] ml-[100px] mt-20" />
            </div>
            <div className="xl:mt-32 mt-10 w-[80%] text-[16px] lg:w-[60%] text-center md:text-left">
              <h6 className="text-[#FB2E86] font-semibold">
                Best Furniture For Your Castle....
              </h6>
              <h2 className="text-[#000000] font-semibold sm:text-[28px] lg:text-[50px]">
                New Furniture Collection Trends in 2020
              </h2>
              <p className="text-[#8A8FB9] text-[16px] sm:pb-1 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-[#FB2E86] hover:bg-[#ff4495] text-[17px] mt-4 px-4 py-2 rounded-sm text-[#fff]">
                Shop Now
              </button>
            </div>
            <div className="mt-20 mx-8 lg:mx-0 lg:mr-16">
              <img src={sofa} className="w-[70vw] lg:w-[35vw]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-[100px] bg-[#F2F0FF] flex justify-center flex-col md:flex-row md:items-start pb-16 items-center">
            <div className="">
              <img src={Light} alt="" />
              <img src={Dot} className="md:ml-[95px] ml-[100px] mt-20" />
            </div>
            <div className="xl:mt-32 mt-10 w-[80%] text-[16px] lg:w-[60%] text-center md:text-left">
              <h6 className="text-[#FB2E86] font-semibold">
                Best Furniture For Your Castle....
              </h6>
              <h2 className="text-[#000000] font-semibold sm:text-[28px] lg:text-[50px]">
                New Furniture Collection Trends in 2020
              </h2>
              <p className="text-[#8A8FB9] text-[16px] sm:pb-1 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-[#FB2E86] hover:bg-[#ff4495] text-[17px] mt-4 px-4 py-2 rounded-sm text-[#fff]">
                Shop Now
              </button>
            </div>
            <div className="mt-20 mx-8 lg:mx-0 lg:mr-16">
              <img src={sofa} className="w-[70vw] lg:w-[35vw]" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pt-[100px] bg-[#F2F0FF] flex justify-center flex-col md:flex-row md:items-start pb-16 items-center">
            <div className="">
              <img src={Light} alt="" />
              <img src={Dot} className="md:ml-[95px] ml-[100px] mt-20" />
            </div>
            <div className="xl:mt-32 mt-10 w-[80%] text-[16px] lg:w-[60%] text-center md:text-left">
              <h6 className="text-[#FB2E86] font-semibold">
                Best Furniture For Your Castle....
              </h6>
              <h2 className="text-[#000000] font-semibold sm:text-[28px] lg:text-[50px]">
                New Furniture Collection Trends in 2020
              </h2>
              <p className="text-[#8A8FB9] text-[16px] sm:pb-1 pt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                in est adipiscing in phasellus non in justo.
              </p>
              <button className="bg-[#FB2E86] hover:bg-[#ff4495] text-[17px] mt-4 px-4 py-2 rounded-sm text-[#fff]">
                Shop Now
              </button>
            </div>
            <div className="mt-20 mx-8 lg:mx-0 lg:mr-16">
              <img src={sofa} className="w-[70vw] lg:w-[35vw]" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
