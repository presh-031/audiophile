import Image from "next/image";
import React from "react";
import ButtonTwo from "./ButtonTwo";

import zx9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import circlesPattern from "../assets/home/desktop/pattern-circles.svg";

const HomePageProducts = () => {
  return (
    <div className="mt-[12rem] flex flex-col gap-[2.4rem] px-[2.4rem]">
      <div className="bg-[#d87d4a] bg-pattern-circles bg-contain bg-top bg-no-repeat px-[2.4rem]  py-[5.5rem]">
        <div>
          <Image
            className="mx-auto mb-[3.2rem]"
            width={172.25}
            height={207}
            src={zx9Speaker}
            alt="zx9-speaker"
          />
        </div>
        <div>
          <p className="text-center text-[3.6rem]  font-bold leading-[4rem] tracking-[1.29px] text-white ">
            ZX9 SPEAKER
          </p>
          <p className="mt-[2.2rem] mb-[2.4rem] text-center text-[1.5rem] font-medium leading-[2.5rem] text-white ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <div className="flex justify-center">
            <ButtonTwo url="/speakers/zx9-speaker" />
          </div>
        </div>
      </div>

      <div className="h-[32.99rem]  bg-zx7-speaker-mobile bg-cover  bg-right py-[10.1rem] px-[2.1rem]">
        <p className="mb-[3.2rem] text-[2.80rem] font-bold leading-[3.8rem] tracking-[2px]">
          ZX7 SPEAKER
        </p>
        <ButtonTwo url="/speakers/zx7-speaker" />
      </div>

      <div className="flex flex-col gap-[2.4rem]">
        <div className="h-[20rem] bg-yx1-earphones-mobile bg-contain "></div>
        <div className="outline-800-red bg-[#f1f1f1] py-[4.1rem] px-[2.4rem] ">
          <p className="mb-[3.2rem] text-[3.2rem] font-bold leading-[3.82rem] tracking-[2px]">
            YX1 EARPHONES
          </p>
          <ButtonTwo url="/earphones/yx1-earphones" />
        </div>
      </div>
    </div>
  );
};

export default HomePageProducts;
