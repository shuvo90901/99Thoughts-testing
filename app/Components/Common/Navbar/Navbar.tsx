"use server";
import Link from "next/link";
import React, { lazy, Suspense } from "react";
import LogoCompo from "./LogoCompo";
import getCategoryName from "@/lib/Dynamodb/getCategoryName";

const CgArrowsV = lazy(() =>
  import("react-icons/cg").then((module) => ({ default: module.CgArrowsV }))
);
const CgDetailsMore = lazy(() =>
  import("react-icons/cg").then((module) => ({ default: module.CgDetailsMore }))
);

interface Category {
  Id: string;
  CategoryName: string;
}

const Navbar = async () => {
  const Categories: Promise<any> = await getCategoryName();
  const Category = await Categories;
  return (
    <div>
      <div className="navbar bg-transparent fixed top-0 z-50 backdrop-filter backdrop-blur-sm text-[#ced2d8] text-[16px]">
        <div className="navbar-start">
          <Suspense fallback={<div>Loading...</div>}>
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden text-3xl">
                <Suspense fallback={<div>Loading...</div>}>
                  <CgDetailsMore />
                </Suspense>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <details className="dropdown">
                    <summary className="">
                      <Link href="/blogs">Blogs</Link>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <span>Item 1</span>
                      </li>
                      <li>
                        <span>Item 2</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <details className="dropdown">
                    <summary className="">
                      <Link href="/qna">Q&A</Link>
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li>
                        <span>Item 1</span>
                      </li>
                      <li>
                        <span>Item 2</span>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </div>
          </Suspense>

          <LogoCompo big={false} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <Link
                    href="/blogs"
                    tabIndex={0}
                    className="flex items-center"
                  >
                    Blogs
                    <Suspense fallback={<div>Loading...</div>}>
                      <CgArrowsV />
                    </Suspense>
                    {/* <CgArrowsV /> */}
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[30vw]  absolute left-[-180px] top-[35px] grid grid-cols-2"
                  >
                    {Category?.map((data: Category) => (
                      <li key={data?.Id} className="mx-auto">
                        <Link href={`/blogs/${data?.CategoryName}`}>
                          {data?.CategoryName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <Link href="/qna" tabIndex={0} className="flex items-center">
                    Q&A
                    <Suspense fallback={<div>Loading...</div>}>
                      <CgArrowsV />
                    </Suspense>
                    {/* <CgArrowsV /> */}
                  </Link>
                  <ul
                    tabIndex={1}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-[30vw]  absolute left-[-180px] top-[35px] grid grid-cols-2"
                  >
                    {Category?.map((data: Category) => (
                      <li key={data?.Id} className="mx-auto">
                        {/* <Link href={`/qna/${data?.CategoryName}`}> */}
                        {data?.CategoryName}
                        {/* </Link> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="navbar-end">
            <div className="md:mr-32 mr-10">
              <Link className="text-[#94b52f]  font-bold " href="/login">
                Log In/Sign Up
              </Link>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default Navbar;
