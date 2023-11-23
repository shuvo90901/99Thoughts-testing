"use client";
import React, { Suspense, lazy } from "react";
import toast from "react-hot-toast";
const BsShareFill = lazy(() =>
  import("react-icons/bs").then((module) => ({ default: module.BsShareFill }))
);
const Toaster = lazy(() =>
  import("react-hot-toast").then((module) => ({ default: module.Toaster }))
);

const ShareUrlButton = (id: any) => {
  const BlogId = id?.id;
  const handleCopyUrl = (BlogId: string) => {
    const urlToCopy = `https://www.savetheplanetinitiative.com/blog/${BlogId}`; // Replace with the URL you want to copy
    console.log(urlToCopy);
    // Attempt to copy the URL to the clipboard
    navigator.clipboard
      .writeText(urlToCopy)
      .then(() => {
        toast.success("URL copied to clipboard: " + urlToCopy);
      })
      .catch((error) => {
        toast.error("Failed to copy to clipboard: " + error);
      });
  };
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mt-3">
        <BsShareFill
          onClick={() => handleCopyUrl(BlogId)}
          className="text-[#98BF06] cursor-pointer text-xl"
        />
        <Toaster />
      </div>
    </Suspense>
  );
};

export default ShareUrlButton;
