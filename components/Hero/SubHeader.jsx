import Image from "next/image";
import React from "react";
import ButtonOne from "../ButtonOne";

const SubHeader = () => {
  return (
    <div className="text-white bg-subheader-mobile bg-center bg-no-repeat ">
      <div>
        <p>NEW PRODUCT</p>
        <p>XX99 MARK II HEADPHONES</p>
        <p>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <ButtonOne />
      </div>
    </div>
  );
};

export default SubHeader;
