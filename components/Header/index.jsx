import Image from "next/image";
import React, { useState } from "react";

import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import MenuItems from "./MenuItems";
import Link from "next/link";

// To show the number of items on cart btn
import { useSelector } from "react-redux";
import Cart from "./Cart/index";

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
      <header className=" flex items-center justify-between  py-[2.2rem] px-[2.4rem]">
        <Image src={hamburgerMenu} alt="menu" />
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
        <div className="hidden">
          <MenuItems />
        </div>
        <div
          onClick={() => {
            setIsOpen((prevIsOpen) => !prevIsOpen);
          }}
          className="relative"
        >
          <Image src={cartIcon} alt="cart" />
          <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
            {getTotalQuantity() || 0}
          </p>
        </div>
      </header>
      <div>{isOpen && <Cart setIsOpen={setIsOpen} />}</div>
    </div>
  );
};

export default Header;
