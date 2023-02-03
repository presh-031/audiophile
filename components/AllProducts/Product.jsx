import Image from "next/image";
import React from "react";

import arrowRight from "../../assets/shared/desktop/icon-arrow-right.svg";

const Product = ({ categoryImg, categoryTitle }) => {
  return (
    <div>
      <Image src={categoryImg} alt="category-image" />
      <p>{categoryTitle}</p>
      <div>
        <p>SHOP</p>
        <Image src={arrowRight} alt="shop" />
      </div>
    </div>
  );
};

export default Product;
