"use client";
import React, { Suspense, lazy } from "react";
import { SwiperSlide } from "swiper/react";
const Swiper = lazy(() =>
  import("swiper/react").then((module) => ({ default: module.Swiper }))
);

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  BlogId: string;
  title: string;
  imageUrl: string;
}

const SlidingBlogSlider = (params: any) => {
  const blogs = params?.newBlogsArr;
  //   console.log(abc);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Swiper
          slidesPerView={4}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {blogs?.map((e: Blog) => (
            <SwiperSlide key={e?.BlogId}>
              <div className="">
                <Image
                  src={e?.imageUrl}
                  alt=""
                  height={500}
                  width={330}
                  loading="lazy"
                />
                <Link href="/">
                  <div className="text-[#94b52f]  relative bottom-[200px] bg-[#000000aa] px-5 hover:text-[#779a20] hover:underline">
                    {e?.title?.slice(0, 80)}...
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
};

export default SlidingBlogSlider;
