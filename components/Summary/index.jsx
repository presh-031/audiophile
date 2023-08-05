import { useDispatch, useSelector } from "react-redux";
import Modal from "@/ui/Modal";
import useModal from "@/hooks/useModal";

import { Cart, CartItem, Item, ThankYou } from "../../../index";

import { cartIsEmpty } from "@/helpers/toasts";

const Summary = () => {
  const cart = useSelector((state) => state.cart);

  const getTotal = () => {
    let totalQuantity = 0;
    let totalPrice = 0;
    cart.forEach((item) => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  // demo shipping and vat values
  const shipping = getTotal().totalPrice ? 50 : 0;
  const VAT = getTotal().totalPrice ? 1079 : 0;

  // grand total (includes shipping)
  const grandTotal = getTotal().totalPrice + shipping;

  // Modal logic
  const { isVisible, toggleModal } = useModal();

  return (
    <div className="mt-[3.2rem] rounded-[8px] bg-[#FFFFFF] px-[3.2rem] pb-[3.1rem] pt-[2.4rem]">
      <p className="mb-[3.1rem] text-[1.8rem] font-bold text-black">SUMMARY</p>

      {cart?.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      ))}

      <div className="mt-[3.2rem] flex items-center justify-between text-black">
        <span className="text-[1.5rem] font-medium leading-[2.5rem]  opacity-50">
          TOTAL
        </span>
        <span className="text-[1.8rem] font-bold  ">
          ${getTotal().totalPrice}
        </span>
      </div>
      <div className="mt-[.8rem] flex items-center justify-between">
        <span className="text-[1.5rem] font-medium leading-[2.5rem]  opacity-50">
          SHIPPING
        </span>
        <span className="text-[1.8rem] font-bold  ">${shipping}</span>
      </div>
      <div className="mt-[.8rem] flex items-center justify-between">
        <span className="text-[1.5rem] font-medium leading-[2.5rem]  opacity-50">
          VAT (INCLUDED)
        </span>
        <span className="text-[1.8rem] font-bold  ">${VAT}</span>
      </div>
      <div className="mt-[2.4rem] flex items-center justify-between">
        <span className="text-[1.5rem] font-medium leading-[2.5rem]  opacity-50">
          GRAND TOTAL
        </span>
        <span className="text-[1.8rem] font-bold  ">${grandTotal}</span>
      </div>

      <button
        role="button"
        onClick={() => {
          cart.length ? toggleModal() : cartIsEmpty();
        }}
        className="mt-[3.2rem] w-full bg-[#D87D4A] py-[1.5rem] text-[1.3rem] font-bold leading-[1.776rem] tracking-[0.1rem] text-white outline hover:bg-[#FBAF85]"
      >
        CONTINUE & PAY
      </button>

      <Modal isVisible={isVisible} hideModal={toggleModal}>
        <ThankYou hideModal={toggleModal} grandTotal={grandTotal} />
      </Modal>
    </div>
  );
};

export default Summary;
