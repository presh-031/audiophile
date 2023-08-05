import React, { useState } from "react";
import { AllProducts } from "../../index";

import css from "./HamburgerMenu.module.css";
const HamburgerMenu = ({ menuIsOpen, setMenuIsOpen }) => {
  const handleMenu = () => {
    setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
  };

  return (
    <div className=" lg:hidden">
      <label htmlFor="burger" className={css.burger}>
        <input
          id="burger"
          type="checkbox"
          checked={menuIsOpen}
          onChange={handleMenu}
        />
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div
        onClick={handleMenu}
        className={`absolute ${
          menuIsOpen ? "right-0 " : "right-full"
        } bottom-0  top-[7rem] z-[1000] w-full  bg-black  bg-opacity-40  transition-all duration-300`}
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
