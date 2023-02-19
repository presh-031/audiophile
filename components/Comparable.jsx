import Image from "next/image";
import React from "react";
import ButtonOne from "./ButtonOne";

const Comparable = () => {
  return (
    <div className="outline">
      <p className="text-center text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.086rem]">
        YOU MAY ALSO LIKE
      </p>
      <div>
        <div className="mt-[4rem]  mb-[3.2rem] h-[12rem] outline ">
          <Image />
        </div>
        <p className="mb-[3.2rem]"></p>
        {/* <ButtonOne url={""} /> */}
      </div>
    </div>
  );
};

export default Comparable;
