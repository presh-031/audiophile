import Header from "@/components/Hero/Header";
import ProductTitle from "@/components/ProductTitle";
import React from "react";

import Link from "next/link";
import { products } from "../data";

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
      <Header />
      {/* <ProductTitle title="HEADPHONES" /> */}
    </div>
  );
};

export default headphones;
