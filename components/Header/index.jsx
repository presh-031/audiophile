import Image from "next/image";
import React from "react";

import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <div className="bg-[#101010]">
      <header className="flex items-center justify-between py-[2.2rem] px-[2.4rem]">
        <Image src={hamburgerMenu} alt="menu" />
        <Image src={logo} alt="logo" />
        <div className="hidden">
          <MenuItems />
        </div>
        <Image src={cartIcon} alt="cart" />
      </header>
      <div className="h-[1px] bg-white opacity-10"></div>
    </div>
  );
};

export default Header;
