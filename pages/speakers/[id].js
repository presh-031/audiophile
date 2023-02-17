import AllProducts from "@/components/AllProducts";
import ItemCount from "@/components/ItemCount";
import Image from "next/image";
import { products } from "../../data";

import { useRouter } from "next/router";
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
  // console.log(speaker);
  const router = useRouter();
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <button
          onClick={() => router.back()}
          className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-[#000000] opacity-50"
        >
          Go Back
        </button>
        <div className="mb-[8.80rem]">
          <div>{/* <Image src={} alt=''/> */}</div>
          <div>
            {speaker[0].new && (
              <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[10px] text-[#d87d4a]">
                new product
              </p>
            )}
            <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[1px]">
              {speaker[0].name}
            </p>
            <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
              {speaker[0].description}
            </p>
            <p className="mb-[3.1rem] text-[1.80rem] font-bold leading-[2.459rem] tracking-[1.29px]">
              ${speaker[0].price}
            </p>
            <ItemCount item={speaker[0]} />
          </div>
        </div>

        <div>
          <div>
            <p className="mb-[2.4rem] text-[2.4rem] font-medium leading-[3.6rem] tracking-[0.86px]">
              FEATURES
            </p>
            <p className="text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
              {speaker[0].features}
            </p>
          </div>
          <div className="mt-[8.8rem]">
            <p className="mb-[2.4rem] text-[2.4rem] font-bold leading-[3.6rem] tracking-[0.88px]">
              IN THE BOX
            </p>
            <ul>
              {speaker[0].includes.map((item) => {
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
