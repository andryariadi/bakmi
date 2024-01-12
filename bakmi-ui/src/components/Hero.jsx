"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 1,
            spaceBetween: 50,
          },
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="relative bg-center bg-no-repeat bg-cover bg-[url('/images/hero.png')] h-[25dvh] md:h-[80dvh] w-screen rounded-[10px] flex justify-center items-center cursor-pointer"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-center bg-no-repeat bg-cover bg-[url('/images/hero2.png')] h-[25dvh] md:h-[80dvh] w-screen rounded-[10px] flex justify-center items-center cursor-pointer"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
