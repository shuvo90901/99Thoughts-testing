"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Params {
  category: string;
}

const CategoryButton = ({ category }: Params) => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  return (
    <Link
      href={`/blogs/${category}`}
      className={`text-center border-[1px] border-orange-300 rounded-3xl  ${
        category === path && "bg-orange-300 text-white"
      }`}
    >
      {category?.slice(0, 25)} {category?.length > 25 && "..."}
    </Link>
  );
};

export default CategoryButton;
