import Link from "next/link";
import React, { Suspense, lazy } from "react";
const FaChevronRight = lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaChevronRight,
  }))
);
const FaFacebookF = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaFacebookF }))
);
const FaGoogle = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaGoogle }))
);
const FaLocationCrosshairs = lazy(() =>
  import("react-icons/fa6").then((module) => ({
    default: module.FaLocationCrosshairs,
  }))
);
const FaTwitter = lazy(() =>
  import("react-icons/fa6").then((module) => ({ default: module.FaTwitter }))
);
const TbPhoneCalling = lazy(() =>
  import("react-icons/tb").then((module) => ({
    default: module.TbPhoneCalling,
  }))
);

import LogoCompo from "../Navbar/LogoCompo";

const Footer = () => {
  return (
    <div className=" py-10 tracking-wide leading-8 grid grid-cols-4 bg-[#161519] text-white">
      <div className="grid justify-center items-start">
        <LogoCompo big={true} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="">
          <Link className="flex items-center gap-2" href="/">
            <FaFacebookF />
            Facebook
          </Link>
          <Link className="flex items-center gap-2" href="/">
            <FaTwitter />
            Twitter
          </Link>
        </div>
        <div className="">
          <Link className="flex items-center gap-2" href="/">
            <FaChevronRight />
            Home
          </Link>
          <Link className="flex items-center gap-2" href="/blogs">
            <FaChevronRight />
            Blogs
          </Link>
          <Link className="flex items-center gap-2" href="/qna">
            <FaChevronRight />
            Q&A
          </Link>
          <Link className="flex items-center gap-2" href="/contact">
            <FaChevronRight />
            Contact Us
          </Link>
          <Link className="flex items-center gap-2" href="/about">
            <FaChevronRight />
            About Us
          </Link>
        </div>

        <div className="">
          <Link
            className="flex items-center gap-2"
            href="mailto:your-email@gmail.com"
          >
            <FaGoogle />
            Gmail
          </Link>
          <Link className="flex items-center gap-2" href="tel:+1234567890">
            <TbPhoneCalling />
            Phone
          </Link>
          <Link className="flex items gap-2 items-start" href="tel:+1234567890">
            <div className="mt-[6px]">
              <FaLocationCrosshairs />
            </div>
            <span className="text-[14px]">
              Corporate Headquarters Tesseract Clothings Ltd 190 Adelaide Street
              Saint John, NB, Canada
            </span>
          </Link>
        </div>
      </Suspense>
    </div>
  );
};

export default Footer;
