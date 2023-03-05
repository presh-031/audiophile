import AboutProduct from "@/components/AboutProduct";
import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
import ProductFeatures from "@/components/ProductFeatures";
import { products } from "../../data";

export const getStaticPaths = () => {
  const paths = products
    .filter((product) => {
      return product.category === "earphones";
    })
    .map((earphone) => {
      return {
        params: { id: earphone.slug },
      };
    });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = (context) => {
  const id = context.params.id;

  return {
    props: {
      earphone: products.filter((product) => {
        return product.slug === id;
      }),
    },
  };
};

const ProductDetail = ({ earphone }) => {
  const product = earphone[0];

  const image = product.image.mobile;
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <BackBtn />
        <AboutProduct image={image} product={product} />
        <ProductFeatures product={product} />

        <div>
          <div>
            <div>{/* <img src="" alt="" /> */}</div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
          <div>{/* img */}</div>
        </div>

        {/* Gallery Images go here */}
        {/* <Comparables /> */}
      </div>
      <AllProducts />
    </>
  );
};

export default ProductDetail;
