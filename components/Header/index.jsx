import "react-sliding-side-panel/lib/index.css";
import "reactjs-popup/dist/index.css";

import { useDispatch, useSelector } from "react-redux";

import { emptyCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import Popup from "reactjs-popup";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import CartItem from "./Cart/CartItem";
import MenuItems from "./MenuItems";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  // Logic to get total items and price in cart
  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  // const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between bg-[#101010]  py-[2.2rem]  px-[2.4rem]  sm:justify-start sm:gap-[4.2rem] sm:py-[3.2rem] sm:px-[4rem] lg:justify-between lg:py-[3.5rem]  xl:px-[16.5rem] ">
        <Image
          className=" lg:hidden"
          src={hamburgerMenu}
          alt="menu"
          onClick={() => {}}
        />

        <div className="flex items-center  sm:flex-1 lg:flex-none">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className="hidden lg:block lg:text-white ">
          <MenuItems />
        </div>

        <Popup
          trigger={
            <div className="relative">
              <Image src={cartIcon} alt="cart" />
              <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
                {getTotalQuantity() || 0}
              </p>
            </div>
          }
          modal
          nested
        >
          {(close) => (
            <div className="w-fit rounded-xl bg-white px-[2.8rem] py-[3.2rem] outline">
              <div className="mb-[3.1rem] flex justify-between outline">
                <p className="text-[1.8rem] font-bold leading-[2.4590rem] tracking-[.129rem]">
                  CART <span>({getTotal().totalQuantity})</span>
                </p>
                <p
                  onClick={() => {
                    dispatch(emptyCart());
                    // setCartIsOpen((prevCartIsOpen) => !prevCartIsOpen);
                  }}
                  className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50 hover:underline"
                >
                  Remove all
                </p>
              </div>
              {cart?.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
              <div className="mt-[3.2rem] mb-[2.4rem] flex justify-between ">
                <p className="text-[1.5rem] font-medium leading-[2.5rem] text-black opacity-50">
                  TOTAL
                </p>
                <p className="text-[1.80rem] font-bold leading-[2.4rem]">
                  ${getTotal().totalPrice}
                </p>
              </div>
              <button className="w-full bg-[#D87D4A] bg-[] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline">
                CHECKOUT
              </button>
            </div>
          )}
        </Popup>
      </header>
    </>
  );
};

export default Header;
