"use server";
import Image from "next/image";
import React, { Suspense, lazy } from "react";
// import SubscribeButton from "./SubscribeButton";
const SubscribeButton = lazy(() => import("./SubscribeButton"));

const NewsletterSubscribe = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-2 mb-10 ">
        <div className="grid justify-end">
          <Image
            className="rounded-s-3xl"
            src="/mail.jpg"
            width={550}
            height={200}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-[550px] h-[309px] bg-[#49e761] rounded-e-3xl ">
          <p className="text-gray-600 text-3xl font-bold text-center mt-16 mb-5">
            Join 99 Thoughts Insider!
          </p>
          <p className="mx-5 text-[18px] italic text-gray-700">
            Discover exclusive deals and fresh ideas. Subscribe now for a
            journey of inspiration!
          </p>
          <SubscribeButton />
        </div>
      </div>
    </Suspense>
  );
};

export default NewsletterSubscribe;
