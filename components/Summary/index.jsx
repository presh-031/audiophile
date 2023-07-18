import { useDispatch, useSelector } from "react-redux";
import Item from "./Item";

const Summary = () => {
  const cart = useSelector((state) => state.cart);

  console.log(cart);

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
  const shipping = 50;
  const VAT = 1079;

  // grand total (includes shipping)
  const grandTotal = getTotal().totalPrice + shipping;

  return (
    <div className="mt-[3.2rem] rounded-[8px] bg-[#FFFFFF] px-[3.2rem] pb-[3.1rem] pt-[2.4rem] ">
      <p className="text-[1.8rem] font-bold text-black ">SUMMARY</p>

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

      <div className="mt-[3.2rem]">
        <span>TOTAL</span>
        <span>${getTotal().totalPrice}</span>
      </div>
      <div>
        <span>SHIPPING</span>
        <span>${shipping}</span>
      </div>
      <div>
        <span>VAT (INCLUDED)</span>
        <span>${VAT}</span>
      </div>
      <div>
        <span>GRAND TOTAL</span>
        <span>${grandTotal}</span>
      </div>
    </div>
  );
};

export default Summary;
