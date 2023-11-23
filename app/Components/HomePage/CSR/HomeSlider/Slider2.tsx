const TypeWriterCompo = lazy(
  () => import("../../../Common/TypeWriter/TypeWriterCompo")
);
import React, { Suspense, lazy } from "react";

const Slider2 = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className=" bg-[url('/worldmoney.jpg')] bg-cover bg-no-repeat h-screen w-full grid  ">
          <div className="text-white md:text-[40px]  text-[20px] ml-[20%] mt-[30%]">
            <div className="relative bottom-[45%]">
              <TypeWriterCompo
                content={"Keeper of Global Wealth at 99Thoughts."}
              />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Slider2;
