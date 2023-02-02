import Image from "next/image";
import React from "react";

import logo from "../../assets/shared/desktop/logo.svg";
import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";

const Header = () => {
  return (
    <>
      <header className="flex items-center py-[2.2rem] px-[2.4rem] justify-between">
        <Image src={hamburgerMenu} alt="menu" />
        <Image src={logo} alt="logo" />
        <ul className="hidden">
          <li>HOME</li>
          <li>HEADPHONES</li>
          <li>SPEAKERS</li>
          <li>EARPHONES</li>
        </ul>{" "}
        <Image src={cartIcon} alt="cart" />
      </header>
      <div className="opacity-10 h-[1px] bg-white"></div>
    </>
  );
};

export default Header;
