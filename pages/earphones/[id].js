import AboutProduct from "@/components/AboutProduct";
import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
import Comparables from "@/components/Comparables";
import ProductFeatures from "@/components/ProductFeatures";
import ProductGallery from "@/components/ProductGallery";
import ProductPage from "@/ui/ProductPage";
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

  const gallery = product.gallery;

  console.log(product);
  return (
    <>
      <ProductPage>
        <BackBtn />
        <AboutProduct image={image} product={product} />
        <ProductFeatures product={product} />
        <ProductGallery gallery={gallery} />
        <Comparables comparables={product.others} />
      </ProductPage>
      <AllProducts />
    </>
  );
};

export default ProductDetail;
