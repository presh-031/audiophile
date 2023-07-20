import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Item from "./Summary/Item";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/router";

const ThankYou = ({ hideModal, grandTotal }) => {
  const cart = useSelector((state) => state.cart);

  const router = useRouter();
  return (
    <div
      onClick={hideModal}
      className="overlay fixed left-0 top-0 z-[500] h-screen w-full bg-black bg-opacity-50"
    >
      <div className="wrapper  fixed left-0 top-[114px] z-[1000] flex w-full justify-center overflow-y-auto overflow-x-hidden">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className=" modal relative z-[1000] mx-[2.4rem] rounded-[0.8rem] bg-white p-[3.2rem] "
        >
          <BsCheckCircleFill className="mb-[2.3rem] h-[6.4rem] w-[6.4rem] text-[#D87D4A]" />
          <p className="mb-[1.6rem] text-[2.4rem] font-bold leading-[2.8rem] tracking-[0.0086rem] text-black ">
            THANK YOU FOR YOUR ORDER
          </p>
          <p className="mb-[2.4rem] text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50">
            You will receive an email confirmation shortly.
          </p>
          <div className="overflow-hidden rounded-[.8rem]">
            {cart.length && (
              <div className="bg-[#F1F1F1] p-[2.4rem]">
                <div className="mb-[2.4rem] flex items-start gap-[1.6rem]">
                  <div>
                    <Image
                      src={cart[0]?.image.mobile.slice(1)}
                      alt="item"
                      width={64}
                      height={64}
                    />
                  </div>

                  <div className=" flex flex-1 flex-col font-bold leading-[2.5rem]">
                    <p className="w-[7.5rem] truncate text-[1.5rem] font-bold leading-[2.5rem]">
                      {cart[0]?.name}
                    </p>
                    <p className="text-[1.4rem] font-bold leading-[2.5rem] opacity-50 ">
                      ${cart[0]?.price}
                    </p>
                  </div>

                  <p className=" text-[1.5rem] font-bold leading-[2.5rem]  text-black  opacity-50 ">
                    x{cart[0]?.quantity}
                  </p>
                </div>
                <div className="border border-t-[1px]"></div>
                <p className="pt-[1.2rem] text-center text-[1.2rem] font-bold leading-normal tracking-[-0.0214rem] text-black opacity-50">
                  and {cart.length ? cart.length - 1 : 0} other item(s)
                </p>
              </div>
            )}

            <div className="bg-black px-[2.4rem] py-[1.5rem]">
              <p className="mb-[.8rem] text-[1.5rem] font-medium leading-[2.5rem]  text-white opacity-50">
                GRAND TOTAL
              </p>
              <p className="text-[1.8rem] font-bold text-white ">
                $ {grandTotal}
              </p>
            </div>
          </div>
          <button
            role="button"
            onClick={() => {
              hideModal();
              router.push("/");
            }}
            className="mt-[2.3rem] w-full bg-[#D87D4A] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline hover:bg-[#FBAF85]"
          >
            BACK TO HOME
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
