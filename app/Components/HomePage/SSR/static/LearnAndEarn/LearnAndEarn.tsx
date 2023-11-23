"use server";
import TypeWriterCompo from "@/app/Components/Common/TypeWriter/TypeWriterCompo";
import Image from "next/image";
import React, { Suspense, lazy } from "react";
import { LearnEarnContent } from "../Content/Content";

const LearnAndEarn = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid grid-cols-2 mb-20 text-justify container mx-auto">
        <div className="mt-40 mx-20">
          <h1 className="text-xl text-[#2E903C] font-bold">
            {LearnEarnContent?.title}
          </h1>
          <br />
          <div className="text-gray-500 w-10/12">
            <TypeWriterCompo content={LearnEarnContent?.details} />
          </div>
        </div>
        <div className="">
          <Image
            className="relative top-[29%] left-[0%]  rounded-[30%]"
            height={252}
            width={378}
            src="/bank.jpg"
            alt=""
            loading="lazy"
          />
          <Image
            className="rounded-[30%]  mx-auto"
            height={252}
            width={378}
            src="/cup.jpg"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
    </Suspense>
  );
};

export default LearnAndEarn;
