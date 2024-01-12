"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { redeemMenu } from "@/data";
import Image from "next/image";

export default function Redeem() {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-[2px]">
            <h1 className="text-xl md:text-2xl font-bold">Redeem Your Rewards</h1>
            <p className="text-xs md:text-base">Earn more to get your rewards</p>
          </div>
          <div className="font-bold text-sm md:text-xl text-amber-500 uppercase">
            <Link href="/">See All</Link>
          </div>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {redeemMenu.map((redeem) => (
              <SwiperSlide key={redeem.id}>
                <div className="flex flex-col items-center gap-5">
                  <Image src={redeem.imgUrl} alt={redeem.title} width={50} height={50} className="rounded-[10px] shadow-lg" />
                  <div>
                    <p className="font-bold text-sm md:text-xl">{redeem.title}</p>
                    <p className="font-bold text-xs md:text-lg text-amber-500">{redeem.point} Pts</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
