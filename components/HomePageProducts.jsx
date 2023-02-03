import Image from "next/image";
import React from "react";
import ButtonTwo from "./ButtonTwo";

import zx9Speaker from "../assets/home/desktop/image-speaker-zx9.png";
import circlesPattern from "../assets/home/desktop/pattern-circles.svg";

const HomePageProducts = () => {
  return (
    <>
      <div className="bg-pattern-circles bg-[#d87d4a]">
        <div>
          <Image src={zx9Speaker} alt="zx9-speaker" />
        </div>
        <div>
          <p>ZX9 SPEAKER</p>
          <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
          <ButtonTwo />
        </div>
      </div>

      <div>
        <p>ZX7 SPEAKER</p>
        <ButtonTwo />
      </div>

      <div>
        <div></div>
        <div>
          <p>YX1 EARPHONES</p>
          <ButtonTwo />
        </div>
      </div>
    </>
  );
};

export default HomePageProducts;
