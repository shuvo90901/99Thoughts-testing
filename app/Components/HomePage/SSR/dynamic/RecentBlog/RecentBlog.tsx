"use server";
/* eslint-disable @next/next/no-img-element */
import getRecentBlogs from "@/lib/Dynamodb/getRecentBlogs";
import React, { Suspense, lazy } from "react";
const ShareUrlButton = lazy(
  () => import("../../../CSR/RecentBlog/ShareUrlButton")
);
interface Blog {
  BlogId: string;
  title: string;
  imageUrl: string;
  CategoryName: string;
  publishedDate: string;
}

const RecentBlog = async (blogs: any) => {
  const blogsData: Promise<any> = await getRecentBlogs();

  const newBlogsArr = await blogsData;
  return (
    <div className="my-40">
      <div className="mb-20 text-3xl underline text-[#94b52f] font-bold grid justify-center">
        <h1 className="mx-auto">RECENT BLOGS</h1>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className=" container mx-auto  grid grid-cols-2 gap-10 px-10">
          {newBlogsArr?.map((e: Blog, i: number) => (
            <div
              key={e?.BlogId}
              className="grid grid-cols-12 mx-auto rounded-lg h-[300px]  shadow-2xl w-[580px] bg-white"
            >
              <img
                className="h-[300px] object-cover w-[470px] col-span-5 rounded-s-xl shadow-2xl"
                src={e?.imageUrl}
                alt=""
                loading="lazy"
              />

              <div className=" col-span-7 rounded-e-xl z-[80] pt-6">
                <p className="text-xl mr-3 h-[110px]">{e?.title}</p>
                <div className="me-[90px]">
                  <span className="txt-[#94b52f]">{e?.CategoryName}</span>
                  <br />
                  <span className="txt-[#94b52f]">
                    {e?.publishedDate?.slice(0, 10)}
                  </span>
                  {" at "}
                  <span className="txt-[#94b52f]">
                    {e?.publishedDate?.slice(11, 19)}
                  </span>
                  <div className="h-[2px] w-full bg-orange-600 mt-5"></div>
                  <ShareUrlButton id={e?.BlogId} />
                </div>
                {/* <RecenBlogDetailCompo e={e} /> */}
              </div>
              <img
                className="h-[300px] object-cover w-[470px] col-span-5 rounded-e-xl shadow-2xl relative bottom-[300px] left-[338px] z-[60]"
                src={e?.imageUrl}
                alt=""
                loading="lazy"
              />

              <div className={`triangle right-[80px] `}></div>
              <div className={`triangle1 right-[59px] `}></div>
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default RecentBlog;
