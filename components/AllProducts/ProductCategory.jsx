import Image from "next/image";
import Link from "next/link";
import React from "react";

import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const ProductCategory = ({ categoryImg, categoryTitle }) => {
  return (
    <div className=" mt-[6.8rem] flex flex-col items-center bg-[#f1f1f1] text-center">
      <Image
        className="relative top-[-5.2rem] mb-[-5.2rem]  "
        src={categoryImg}
        alt="category-image"
        height={133}
        width={147}
      />
      <p className="text-[1.5rem] font-bold leading-[2rem] tracking-[0.01rem]">
        {categoryTitle}
      </p>
      <Link
        href={`/${categoryTitle.toLowerCase()}`}
        className="mt-[1.7rem] mb-[2.2rem] flex justify-center gap-[1.3rem] "
      >
        <p className="text-[1.3rem] font-bold leading-[1.776rem] tracking-[1px]">
          SHOP
        </p>
        <Image src={arrowRight} alt="shop" />
      </Link>
    </div>
  );
};

export default ProductCategory;
