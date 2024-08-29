"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Image1 from "/public/images/other1.png";
import Image2 from "/public/images/other2.png";
import Image3 from "/public/images/other3.png";

export default function projSlider() {
  const breakpoints = {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  };
  return (
    <>
      <Swiper
        centeredSlides={false}
        autoplay={{
          delay: 1500,
          disableOnInteraction:false,
        }}
        modules={[Autoplay]}
        breakpoints={breakpoints}
      >
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 lg:mt-20">
            <Image src={Image1} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={Image2} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={Image3} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="-mb-8 sm:mb-[135px] sm:uppercase mt-10 lg:mt-20">
            <Image src={Image1} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={Image2} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:uppercase mt-10 lg:mt-20">
            <Image src={Image3} alt="blog" width={700} height={500} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
