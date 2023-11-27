"use client";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Loader from "../../Common/Loader/Loader";

const BlogCard = lazy(() => import("../../Common/BlogCard/BlogCard"));

interface params {
  EvalutedKey: {
    BlogId: string;
    publishedDate: string;
    CategoryName: string;
  };
  RestBlogs: [];
}

interface Blog {
  BlogId: string;
  title: string;
  imageUrl: string;
  CategoryName: string;
  publishedDate: string;
}
interface FetchedEvaluted {
  [EvalutedKey: string]: {
    BlogId: string;
    publishedDate: string;
    CategoryName: string;
  };
}
const BASE_URL = `https://www.99thoughts.com`;

const LoadMoreButton = ({ EvalutedKey, RestBlogs }: params) => {
  const { BlogId, publishedDate, CategoryName } = EvalutedKey;
  const [AllBlogs, setAllBlogs] = useState([]);
  const [Count, setCount] = useState(0);
  const [Blogs, setBlogs] = useState([]);
  const [Clicked, setClicked] = useState(false);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    setAllBlogs([...RestBlogs]);
  }, [RestBlogs]);

  const [FetchedEvaluted, setFetchedEvaluted] = useState<FetchedEvaluted>({});
  const { FetchBlogId, FetchpublishedDate, FetchCategoryName } =
    FetchedEvaluted;
  const LoadMoreBlogs = () => {
    setAllBlogs([...AllBlogs, ...Blogs]);
    setBlogs([]);
    setCount(Count + 8);
    setClicked(true);
    setLoading(true);
    // useEffect(() => {
    fetch(
      `https://www.api.99thoughts.com/handleGetCategoryBlogs?category=${CategoryName}&BlogId=${
        Clicked ? FetchBlogId : BlogId
      }&publishedDate=${
        Clicked ? FetchpublishedDate : publishedDate
      }&BlogLimit=8`
    )
      .then((res) => res.json())
      .then((data) => {
        const convertedData = data?.items?.map((item: any) => {
          const plainObject = {
            BlogId: item?.BlogId?.S,
            CategoryName: item?.CategoryName?.S,
            comments: item?.comments?.L?.map((commentItem: any) => ({
              commentDate: commentItem?.M?.commentDate?.N,
              commentId: commentItem?.M?.commentId?.S,
              text: commentItem?.M?.text?.S,
              userName: commentItem?.M?.userName?.S,
              userProfile: {
                key: commentItem?.M?.userProfile?.M?.key?.S,
                type: commentItem?.M?.userProfile?.M?.type?.S,
              },
            })),
            content: item?.content?.S,
            publishedDate: item?.publishedDate?.S,
            title: item?.title?.S,
            image: {
              imageKey: item?.image?.M?.imageKey?.S,
              imageType: item?.image?.M?.imageType?.S,
            },
          };
          return plainObject;
        });

        const newBlogsArr: [] = convertedData?.map((item: any) => ({
          ...item,
          imageUrl: `${BASE_URL}/${item?.image?.imageKey}`,
        }));
        setBlogs(newBlogsArr);

        if (data?.LastEvaluatedKey) {
          const Key = {
            FetchBlogId: data?.LastEvaluatedKey?.BlogId?.S,
            FetchpublishedDate: data?.LastEvaluatedKey?.publishedDate?.S,
            FetchCategoryName: data?.LastEvaluatedKey?.CategoryName?.S,
          };
          setFetchedEvaluted(Key);
        }
      });
    setLoading(false);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="grid justify-center mb-20">
        {AllBlogs.length > 0 && Clicked && (
          <div className=" container mx-auto  grid grid-cols-2 gap-10 px-10 mb-20">
            {AllBlogs?.map((data: Blog, i: number) => (
              <BlogCard key={i} data={data} />
            ))}
          </div>
        )}
        {AllBlogs?.length < Count || RestBlogs?.length === 0 ? (
          <p className="italic text-gray-500 font-bold text-center">
            This may be the end of the blog, but {"it's"} just the beginning of
            your exploration. Check out our archives for more engaging content.
          </p>
        ) : (
          <span
            onClick={() => LoadMoreBlogs()}
            className="border-2 w-40 border-yellow-500 text-xl py-2  text-center rounded-2xl mx-auto cursor-pointer"
          >
            {Loading ? <Loader /> : "Load More"}
          </span>
        )}
      </div>
    </Suspense>
  );
};

export default LoadMoreButton;
