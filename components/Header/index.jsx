import { useDispatch, useSelector } from "react-redux";

import { Cart, MenuItems, HamburgerMenu } from "../../index";

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/shared/desktop/logo.svg";

import cartIcon from "../../assets/shared/desktop/icon-cart.svg";
import useModal from "@/hooks/useModal";
import Modal from "@/ui/Modal";
import { useState } from "react";

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

  //  Logic for HamburgerMenu
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between  bg-[#101010]  py-[2.2rem]  px-[2.4rem]  sm:justify-start sm:gap-[4.2rem] sm:py-[3.2rem] sm:px-[4rem] lg:justify-between lg:py-[3.5rem]  xl:px-[16.5rem] ">
      <HamburgerMenu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <div
        onClick={() => {
          setMenuIsOpen(false);
        }}
        className="flex items-center  sm:flex-1 lg:flex-none"
      >
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <div className="hidden lg:block lg:text-white ">
        <MenuItems />
      </div>

      <div
        onClick={() => {
          toggleModal();
          setMenuIsOpen(false);
        }}
        className="group relative cursor-pointer  "
      >
        <Image src={cartIcon} alt="cart" />
        <p className="absolute top-4 left-[-2px] flex h-6  w-6 items-center justify-center rounded-full bg-white  text-black transition-all duration-200 group-hover:scale-150">
          {getTotalQuantity() || 0}
        </p>
      </div>

      <Modal isVisible={isVisible} hideModal={toggleModal}>
        <Cart hideModal={toggleModal} />
      </Modal>
    </header>
  );
};

export default Header;
