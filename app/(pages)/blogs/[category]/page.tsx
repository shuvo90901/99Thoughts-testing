"use server";
// import LoadMoreButton from "@/app/Components/BlogsPage/CSR/LoadMoreButton";
import getCategoryBlogs from "@/lib/Dynamodb/getCategoryBlogs";
import getCategoryName from "@/lib/Dynamodb/getCategoryName";
import { Suspense, lazy } from "react";

const BlogLayout = lazy(() => import("../BlogLayout"));
const BlogCard = lazy(
  () => import("../../../Components/Common/BlogCard/BlogCard")
);
const LoadMoreButton = lazy(
  () => import("../../../Components/BlogsPage/CSR/LoadMoreButton")
);

export async function generateStaticParams() {
  const Categories: Promise<any> = await getCategoryName();
  const Category = await Categories;

  return Category?.map((data: any) => ({
    category: data?.CategoryName,
  }));
}

type Params = {
  params: {
    category: string;
  };
};

interface Blog {
  BlogId: string;
  title: string;
  imageUrl: string;
  CategoryName: string;
  publishedDate: string;
}

export default async function page({ params }: Params) {
  const { category } = params;
  const BlogLimit = 16;
  const blogData = await getCategoryBlogs(category, BlogLimit);

  const { newBlogsArr, EvalutedKey } = await blogData;
  const RestBlogs = newBlogsArr?.slice(8, 16);
  return (
    <BlogLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="mt-20 mb-10">
          <div className=" container mx-auto  grid grid-cols-2 gap-10 px-10">
            {newBlogsArr?.slice(0, 8)?.map((data: Blog, i: number) => (
              <BlogCard key={i} data={data} />
            ))}
          </div>
        </div>
        <LoadMoreButton EvalutedKey={EvalutedKey} RestBlogs={RestBlogs} />
      </Suspense>
    </BlogLayout>
  );
}
