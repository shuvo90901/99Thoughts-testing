"use client";
import React, { lazy, Suspense } from "react";

import { SwiperSlide } from "swiper/react";
const Swiper = lazy(() =>
  import("swiper/react").then((module) => ({ default: module.Swiper }))
);
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Navigation, Autoplay } from "swiper/modules";

const Slider1 = lazy(() => import("./Slider1"));
const Slider2 = lazy(() => import("./Slider2"));

const HomeSlider = () => {
  return (
    <div className="max-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
          grabCursor={true}
        >
          <SwiperSlide>
            <Slider1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slider2 />
          </SwiperSlide>
        </Swiper>
      </Suspense>
    </div>
  );
};

export default HomeSlider;
