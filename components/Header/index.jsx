import "react-sliding-side-panel/lib/index.css";
import "reactjs-popup/dist/index.css";

import { useDispatch, useSelector } from "react-redux";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import CartModal from "./CartModal";
import MenuItems from "./MenuItems";

import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import useModal from "@/hooks/useModal";
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

  // Modal logic
  const { isVisible, toggleModal } = useModal();

  // const [cartIsOpen, setCartIsOpen] = useState(false);
  return (
    <>
      <header className="flex items-center justify-between  bg-[#101010]  py-[2.2rem]  px-[2.4rem]  sm:justify-start sm:gap-[4.2rem] sm:py-[3.2rem] sm:px-[4rem] lg:justify-between lg:py-[3.5rem]  xl:px-[16.5rem] ">
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

        <div onClick={toggleModal} className="relative">
          <Image src={cartIcon} alt="cart" />
          <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
            {getTotalQuantity() || 0}
          </p>
        </div>

        <CartModal isVisible={isVisible} hideModal={toggleModal} />
      </header>
    </>
  );
};

export default Header;
