import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import Cart from "./Cart/index";
import MenuItems from "./MenuItems";
// To show the number of items on cart btn
import { useState } from "react";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  //state management for cart
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#101010]">
      <header className="flex items-center justify-between border border-red-800 py-[2.2rem]  px-[2.4rem] sm:justify-start sm:gap-[4.2rem] sm:py-[3.2rem] sm:px-[4rem]">
        <Image src={hamburgerMenu} alt="menu" />
        <div className="flex items-center border border-red-800 sm:flex-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden">
          <MenuItems />
        </div>
        <div
          onClick={() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
          className="relative border border-red-800 "
        >
          <Image src={cartIcon} alt="cart" />
          <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
            {getTotalQuantity() || 0}
          </p>
        </div>
      </header>

      {isOpen && (
        <div className="relative  border border-red-800">
          <Cart setIsOpen={setIsOpen} />
        </div>
      )}
    </div>
  );
};

export default Header;
