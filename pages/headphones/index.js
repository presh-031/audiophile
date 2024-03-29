import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";
import { products } from "../../data";

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
      <div className="mb-[12rem] flex flex-col gap-[12rem] px-[2.4rem] sm:px-[4rem] lg:mb-[16rem] lg:gap-[16.5rem] xl:px-[16.5rem]">
        {headphones
          // methods to reverse array, and map through in that reverse order.
          .slice(0)
          .reverse()
          .map((headphone, index) => {
            return (
              <ProductItem
                key={headphone.id}
                item={headphone}
                reverse={index % 2 !== 0}
              />
            );
          })}
      </div>
      <AllProducts />
    </div>
  );
};

export default headphones;
