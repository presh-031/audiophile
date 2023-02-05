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
  console.log(headphone);
  return <div></div>;
};

export default ProductDetail;
