const TypeWriterCompo = lazy(
  () => import("../../../Common/TypeWriter/TypeWriterCompo")
);
import React, { Suspense, lazy } from "react";

const Slider1 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className=" bg-[url('/moneytree.jpg')] bg-cover bg-no-repeat h-screen w-full grid  items-center">
          <div className="text-white md:text-[40px]  text-[20px] ml-[20%]">
            <TypeWriterCompo content={"Guardian of Knowledge at 99Thoughts."} />
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Slider1;
