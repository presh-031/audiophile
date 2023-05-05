import AllProducts from "@/components/AllProducts";
import ProductCategoryTitle from "@/components/ProductCategoryTitle";
import ProductItem from "@/components/ProductItem";
import { products } from "../../data";

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
    <>
      <ProductCategoryTitle title="SPEAKERS" />
      <div className="mb-[12rem] flex flex-col gap-[12rem] px-[2.4rem] sm:px-[4rem] lg:mb-[16.5rem] lg:gap-[16rem] xl:px-[16.5rem]">
        {speakers
          // methods to reverse array, and map through in that reverse order.
          .slice(0)
          .reverse()
          .map((speaker, index) => {
            return (
              <ProductItem
                key={speaker.id}
                item={speaker}
                reverse={index % 2 !== 0}
              />
            );
          })}
      </div>
      <AllProducts />
    </>
  );
};

export default speakers;
