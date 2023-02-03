import React from "react";
import Product from "./Product";

import headPhones from "../../assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "../../assets/shared/desktop/image-category-thumbnail-speakers.png";
import earPhones from "../../assets/shared/desktop/image-category-thumbnail-earphones.png";

const AllProducts = () => {
  return (
    <div>
      <Product categoryImg={headPhones} categoryTitle="HEADPHONES" />
      <Product categoryImg={speakers} categoryTitle="SPEAKERS" />
      <Product categoryImg={earPhones} categoryTitle="EARPHONES" />
    </div>
  );
};

export default AllProducts;
