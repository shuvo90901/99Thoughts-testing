/* eslint-disable @next/next/no-img-element */
"use server";
import getCategoryName from "@/lib/Dynamodb/getCategoryName";
import Link from "next/link";
import React, { Suspense } from "react";
import CategoryButton from "../../CSR/CategoryButton";
import Image from "next/image";

interface Category {
  Id: string;
  CategoryName: string;
}

const CategoryNameSection = async () => {
  const Categories = await getCategoryName();
  return (
    <div className="">
      <img className="h-[50vh] w-full" src="/note.jpg" alt="" loading="eager" />
      {/* <Image src="/note.jpg" alt="" height={100} width={1298} loading="eager" /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="grid grid-cols-5 justify-center items-center gap-5 pt-20 mx-10">
          {Categories?.map((data: Category) => (
            <CategoryButton key={data?.Id} category={data?.CategoryName} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default CategoryNameSection;
