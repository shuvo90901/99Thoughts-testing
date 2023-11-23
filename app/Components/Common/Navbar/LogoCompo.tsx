"use server";
import Image from "next/image";
import React, { Suspense } from "react";
interface params {
  big: boolean;
}
const LogoCompo = ({ big }: params) => {
  return (
    <div
      className={` justify-center items-center grid ${
        big ? "mx-auto" : "ml-32"
      }`}
    >
      <Image
        height={big ? 120 : 65}
        width={big ? 120 : 65}
        src="/2l.png"
        alt="Logo"
        loading="eager"
      />
    </div>
  );
};

export default LogoCompo;
