import Header from "@/components/Header";
import ProductTitle from "@/components/ProductCategoryTitle";
import React from "react";

import Link from "next/link";
import { products } from "../data";
import BestAudioGear from "@/components/BestAudioGear";
import AllProducts from "@/components/AllProducts";

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
      {/* <ProductTitle title="HEADPHONES" /> */}
      {/* <BestAudioGear /> */}
      <AllProducts />
    </div>
  );
};

export default headphones;
