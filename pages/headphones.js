import Header from "@/components/Header";
import ProductTitle from "@/components/ProductCategoryTitle";
import React from "react";

import Link from "next/link";
import { products } from "../data";
import BestAudioGear from "@/components/BestAudioGear";
import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";

export const getStaticProps = () => {
  const headphones = [];
  products.forEach((product) => {
    if (product.category === "headphones") {
      headphones.push(product);
    }
  });
  return {
    props: {
      headphones,
    },
  };
};

const headphones = ({ headphones }) => {
  return (
    <div>
      <ProductCategoryTitle title="HEADPHONES" />
      <div className="outline outline-red-800">
        {headphones
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

export default headphones;
