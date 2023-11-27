"use server";
import BlogCard from "@/app/Components/Common/BlogCard/BlogCard";
/* eslint-disable @next/next/no-img-element */
import getRecentBlogs from "@/lib/Dynamodb/getRecentBlogs";
import React, { Suspense, lazy } from "react";

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
          {newBlogsArr?.map((data: Blog, i: number) => (
            <BlogCard key={i} data={data} i={i} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default RecentBlog;
