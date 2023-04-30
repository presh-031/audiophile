import "react-sliding-side-panel/lib/index.css";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import logo from "../../assets/shared/desktop/logo.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import Cart from "./Cart/index";
import MenuItems from "./MenuItems";

const Header = () => {
  const cart = useSelector((state) => state.cart);

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  const [cartIsOpen, setCartIsOpen] = useState(false);
  // const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  // const [openPanel, setOpenPanel] = useState(false);

  return (
    <div className="bg-[#101010]">
      <header className="flex items-center justify-between  py-[2.2rem]  px-[2.4rem] sm:justify-start sm:gap-[4.2rem] sm:py-[3.2rem] sm:px-[4rem]">
        <Image
          src={hamburgerMenu}
          alt="menu"
          onClick={() => {
            // setNavMenuIsOpen((prevNavMenuIsOpen) => !prevNavMenuIsOpen);
            // setOpenPanel((prev) => !prev);
          }}
        />

        {/* {navMenuIsOpen && <NavMenu />} */}
        {/* <NavMenu style={navMenuIsOpen ? visibleStyle : hiddenStyle} /> */}

        <div className="flex items-center sm:flex-1">
          <Link href={"/"}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>

        <div className="hidden">
          <MenuItems />
        </div>

        <div
          onClick={() => {
            setCartIsOpen((prevCartIsOpen) => !prevCartIsOpen);
          }}
          className="relative"
        >
          <Image src={cartIcon} alt="cart" />
          <p className="absolute top-4 left-[-2px] flex h-6 w-6 items-center  justify-center rounded-full bg-white text-black">
            {getTotalQuantity() || 0}
          </p>
        </div>
      </header>

      {cartIsOpen && (
        <div className="relative">
          <Cart setCartIsOpen={setCartIsOpen} />
        </div>
      )}
    </div>
  );
};

export default Header;
