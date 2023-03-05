import AboutProduct from "@/components/AboutProduct";
import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
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
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <BackBtn />
        <AboutProduct image={image} product={product} />

        <div>
          <div>
            <p className="mb-[2.4rem] text-[2.4rem] font-medium leading-[3.6rem] tracking-[0.86px]">
              FEATURES
            </p>
            <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
              {product.features}
            </p>
          </div>
          <div className="mt-[8.8rem]">
            <p className="mb-[2.4rem] text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.88px]">
              IN THE BOX
            </p>
            <ul>
              {product.includes.map((item) => {
                return (
                  <li
                    key={item.item}
                    className=" mb-[0.80rem] text-[1.5rem] leading-[2.5rem] opacity-50"
                  >
                    <span className="mr-[2.4rem] font-bold text-[#d87d4a] ">
                      {item.quantity}x
                    </span>
                    <span>{item.item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

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
