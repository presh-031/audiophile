import Header from "@/components/Header";
import React from "react";

import Link from "next/link";
import { products } from "../data";
import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";

export const getStaticProps = () => {
  const speakers = [];
  products.forEach((product) => {
    if (product.category === "speakers") {
      speakers.push(product);
    }
  });
  return {
    props: {
      speakers,
    },
  };
};

const speakers = ({ speakers }) => {
  return (
    <div>
      <ProductCategoryTitle title="SPEAKERS" />
      <div className="mb-[12rem] flex flex-col gap-[12rem] px-[2.4rem]">
        {speakers
          // methods to reverse array, and map through in that reverse order.
          .slice(0)
          .reverse()
          .map((headphone) => {
            return <ProductItem key={headphone.id} item={headphone} />;
          })}
      </div>
      <AllProducts />
    </div>
  );
};

export default speakers;
