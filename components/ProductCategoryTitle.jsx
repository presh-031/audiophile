import React from "react";

const ProductCategoryTitle = ({ title }) => {
  return (
    <div className="bg-[#101010] py-[3.2rem] px-[8.4rem] text-center text-[2.80rem] font-bold leading-[3.82rem] tracking-[2px] text-white">
      <p>{title}</p>
    </div>
  );
};

export default ProductCategoryTitle;
