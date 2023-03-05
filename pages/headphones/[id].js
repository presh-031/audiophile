import AllProducts from "@/components/AllProducts";
import BackBtn from "@/components/BackBtn";
import ItemCount from "@/components/ItemCount";
import Image from "next/image";
import { useRouter } from "next/router";
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
  // console.log(headphone);
  const router = useRouter();

  const product = headphone[0];

  const image = product.image.mobile;
  return (
    <>
      <div className="px-[2.4rem] pt-[1.90rem]">
        <BackBtn />
        <div className="mb-[8.80rem]">
          <div>
            <Image
              src={image.slice(1)}
              alt="product-image"
              height={327}
              width={327}
            />
          </div>
          <div>
            {product.new && (
              <p className="mb-[2.4rem] text-[1.4rem] font-normal uppercase leading-[1.91rem] tracking-[10px] text-[#d87d4a]">
                new product
              </p>
            )}
            <p className="mb-[2.4rem] text-[2.80rem] font-bold uppercase leading-[3.83rem] tracking-[1px]">
              {product.name}
            </p>
            <p className=" mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] opacity-50">
              {product.description}
            </p>
            <p className="mb-[3.1rem] text-[1.80rem] font-bold leading-[2.459rem] tracking-[1.29px]">
              ${product.price}
            </p>
            <ItemCount item={product} />
          </div>
        </div>

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
