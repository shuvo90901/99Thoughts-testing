/* eslint-disable @next/next/no-img-element */
import React, { Suspense, lazy } from "react";
import Loader from "../Loader/Loader";

const ShareUrlButton = lazy(
  () => import("../../../Components/HomePage/CSR/RecentBlog/ShareUrlButton")
);
const BlogCard = (params: any) => {
  const data = params.data;
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }
    >
      <div
        key={data?.BlogId}
        className="grid grid-cols-12 mx-auto rounded-lg h-[300px]  shadow-2xl w-[580px] bg-white"
      >
        <img
          className="h-[300px] object-cover w-[470px] col-span-5 rounded-s-xl shadow-2xl"
          src={data?.imageUrl}
          alt=""
          loading="lazy"
        />

        <div className=" col-span-7 rounded-e-xl z-[80] pt-6">
          <p className="text-xl mr-3 h-[110px]">{data?.title}</p>
          <div className="me-[90px]">
            <span className="txt-[#94b52f]">{data?.CategoryName}</span>
            <br />
            <span className="txt-[#94b52f]">
              {data?.publishedDate?.slice(0, 10)}
            </span>
            {" at "}
            <span className="txt-[#94b52f]">
              {data?.publishedDate?.slice(11, 19)}
            </span>
            <div className="h-[2px] w-full bg-orange-600 mt-5"></div>
            <ShareUrlButton id={data?.BlogId} />
          </div>
          {/* <RecenBlogDetailCompo e={e} /> */}
        </div>
        <img
          className="h-[300px] object-cover w-[470px] col-span-5 rounded-e-xl shadow-2xl relative bottom-[300px] left-[338px] z-[60]"
          src={data?.imageUrl}
          alt=""
          loading="lazy"
        />

        <div className={`triangle right-[80px] `}></div>
        <div className={`triangle1 right-[59px] `}></div>
      </div>
    </Suspense>
  );
};

export default BlogCard;
