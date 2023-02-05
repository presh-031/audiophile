import Image from "next/image";
import React from "react";
import ButtonOne from "./ButtonOne";

const ProductItem = ({ item }) => {
  console.log(item);
  return (
    <div className="outline outline-red-800">
      <div>
        <Image src={require("." + "./." + item?.image.mobile)} alt="product-image" height={352} width={327} />
      </div>
      <div>
        {item.new && <p>new product</p>}
        <p>{item.name}</p>
        <p>{item.description}</p>
        <ButtonOne />
      </div>
    </div>
  );
};

export default ProductItem;
