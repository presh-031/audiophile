import Image from "next/image";
import React, { useState } from "react";
import hamburgerMenu from "../../assets/shared/tablet/icon-hamburger.svg";
import AllProducts from "../AllProducts";

import css from "./HamburgerMenu.module.css";
const HamburgerMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleMenu = () => {
    setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
  };

  console.log(menuIsOpen);
  return (
    <div className=" lg:hidden">
      {/* <Image src={hamburgerMenu} alt="menu" onClick={handleMenu} /> */}

      <label for="burger" className={css.burger}>
        <input id="burger" type="checkbox" onClick={handleMenu} />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div
        onClick={handleMenu}
        className={`absolute ${
          menuIsOpen ? "right-0 " : "right-full"
        } bottom-0  top-[7rem] z-[1000] w-full  bg-black  bg-opacity-40  transition-all duration-200`}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className=" h-fit w-full rounded-b-[8px] bg-white py-[3.5rem]  "
        >
          <AllProducts handleMenu={handleMenu} />
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
