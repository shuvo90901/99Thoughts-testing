"use server";
import React, { lazy } from "react";
const CategoryNameSection = lazy(
  () => import("../../Components/BlogsPage/SSR/dynamic/CategoryNameSection")
);

interface BlogLayoutProps {
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white">
      <header>
        <CategoryNameSection />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default BlogLayout;
