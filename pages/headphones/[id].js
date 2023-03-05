import AboutProduct from "@/components/AboutProduct";
import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import { products } from "../../data";

export const getStaticPaths = () => {
  const paths = products
    .filter((product) => {
      return product.category === "headphones";
    })
    .map((headphone) => {
      return {
        params: { id: headphone.slug },
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
      headphone: products.filter((product) => {
        return product.slug === id;
      }),
    },
  };
};

const ProductDetail = ({ headphone }) => {
  const product = headphone[0];

  const image = product.image.mobile;

  const gallery = product.gallery;
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <BackBtn />
        <AboutProduct image={image} product={product} />
        <ProductFeatures product={product} />
        <ProductGallery gallery={gallery} />
        <div>
          <div>
            <div>{/* <img src="" alt="" /> */}</div>
            <div>{/* <img src="" alt="" /> */}</div>
          </div>
          <div>{/* img */}</div>
        </div>
      </div>
      <AllProducts />
    </>
  );
};

export default ProductDetail;
