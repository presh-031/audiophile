import { useEffect, useState } from "react";

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

  // Logic to handle window resizing
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // Image src will vary based on the device width
  let image = "";

  if (windowSize.innerWidth < 640) {
    // mobile
    image = product.image.mobile;
  } else if (windowSize.innerWidth < 1025) {
    // tablet;
    image = product.image.tablet;
  } else {
    // desktop
    image = product.image.desktop;
  }

  const gallery = product.gallery;

  return (
    <>
      <ProductPage>
        <BackBtn />
        {/* Check item count for tablet */}
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

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
