import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";
import { products } from "../../data";

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
      <div className="mb-[12rem] flex flex-col gap-[12rem] px-[2.4rem] sm:px-[4rem] lg:mb-[16rem] lg:gap-[16.5rem] xl:px-[16.5rem]">
        {earphones
          // methods to reverse array, and map through in that reverse order.
          .slice(0)
          .reverse()
          .map((earphone, index) => {
            return (
              <ProductItem
                key={earphone.id}
                item={earphone}
                reverse={index % 2 !== 0}
              />
            );
          })}
      </div>
      <AllProducts />
    </div>
  );
};

export default earphones;
