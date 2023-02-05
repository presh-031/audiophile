import Header from "@/components/Header";
import React from "react";

import Link from "next/link";
import { products } from "../data";
import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";

export const getStaticProps = () => {
  const earphones = [];
  products.forEach((product) => {
    if (product.category === "earphones") {
      earphones.push(product);
    }
  });
  return {
    props: {
      earphones,
    },
  };
};

const earphones = ({ earphones }) => {
  return (
    <div>
      <ProductCategoryTitle title="EARPHONES" />
      <div className="mb-[12rem] flex flex-col gap-[12rem] px-[2.4rem]">
        {earphones
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

export default earphones;
