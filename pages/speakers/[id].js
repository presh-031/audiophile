import AboutProduct from "@/components/AboutProduct";
import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
import Comparables from "@/components/Comparables";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import { products } from "../../data";

export const getStaticPaths = () => {
  const paths = products
    .filter((product) => {
      return product.category === "speakers";
    })
    .map((speaker) => {
      return {
        params: { id: speaker.slug },
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
      speaker: products.filter((product) => {
        return product.slug === id;
      }),
    },
  };
};

const ProductDetail = ({ speaker }) => {
  const product = speaker[0];

  const image = product.image.mobile;

  const gallery = product.gallery;
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <BackBtn />
        <AboutProduct image={image} product={product} />
        <ProductFeatures product={product} />
        <ProductGallery gallery={gallery} />

        <Comparables comparables={product.others} />
      </div>
      <AllProducts />
    </>
  );
};

export default ProductDetail;
