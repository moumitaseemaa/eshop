import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container";
import CartItem from "../components/cartComponent/CartItem";
import Button from "../components/commonLayouts/Button";
import Facility from "../components/Facility";

const CartPage = () => {
  return (
    <>
      <Container>
        <div className="flex font-['Montserrat'] font-normal text-base text-[#303030] leading-6 gap-x-7.5 mt-16 mb-12">
          <Link className="relative before:absolute before:content-[''] before:bg-[#303030] before:w-[1px] before:h-[15px] before:right-[-16px] before:top-[50%] before:-translate-y-1/2">
            Home
          </Link>
          <Link className="font-bold">Cart</Link>
        </div>
        <h2 className='font-["Poppins"] font-bold text-[56px] leading-17 text-[#303030] mb-7'>
          Your Cart
        </h2>
        <div className="flex py-8 pl-14 bg-[#F4F4F4] font-['Montserrat'] font-bold text-base leading-6 uppercase text-[#303030] rounded-2xl mb-8">
          <h6 className="w-[40%]">PRODUCT</h6>
          <h6 className="w-[20%]">PRICE</h6>
          <h6 className="w-[20%]">QTY</h6>
          <h6 className="w-[20%]">TOTAL</h6>
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <div className="text-end">
          <Button text={"Update Cart"} />
        </div>
      </Container>
      <hr className="text-[#CBCBCB] mt-25 mb-20"/>
      <Container>
        <Facility />
      </Container>
    </>
  );
};

export default CartPage;
