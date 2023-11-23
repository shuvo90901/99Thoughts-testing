"use server";

import getCategoryBlogs from "@/lib/Dynamodb/getCategoryBlogs";
import SlidingBlogSlider from "../../CSR/SlidingBlog/SlidingBlogSlider";
import { Suspense } from "react";

const SlidingBlog = async () => {
  const blogsData = await getCategoryBlogs();

  const { newBlogsArr } = await blogsData;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="my-20">
        <div className="my-20 text-3xl underline text-[#94b52f] font-bold grid justify-center">
          <h1 className="mx-auto">Blogtastic Showcase</h1>
        </div>
        <SlidingBlogSlider newBlogsArr={newBlogsArr} />
      </div>
    </Suspense>
  );
};

export default SlidingBlog;
