import { useState } from "react";
import CartIcon from "../../icons/CartIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import ShippingIcon from "../../icons/ShippingIcon";
import TransparentIcon from "../../icons/TransparentIcon";
import Flex from "../commonLayouts/Flex.jsx";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../commonLayouts/Button.jsx";

const FacilityWithAddToCart = () => {
     let [quantity, setQuantity] = useState(1);
       let handleQuantity = (type) => {
    if (type == "minus") {
      if (quantity > 1) {
        quantity--;
        setQuantity(quantity);
      }
    } else {
      quantity++;
      setQuantity(quantity);
    }
  };
  return (
    <div className="flex justify-between items-center gap-x-[110px] mb-25">
        {/* Facility Part */}
        <div className="w-[49%]">
          <Flex className={"justify-between items-center"}>
            <Flex className={"items-center gap-x-6"}>
              <div className="flex items-center">
                <ShippingIcon />
              </div>
              <div>
                <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
                  Free Shipping
                </h6>
                <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
                  Worldwide available
                </p>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-6"}>
              <div className="flex items-center">
                <SecurityIcon />
              </div>
              <div>
                <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
                  100% Guaranteed
                </h6>
                <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
                  Receive product first
                </p>
              </div>
            </Flex>
            <Flex className={"items-center gap-x-6"}>
              <div className="flex items-center">
                <TransparentIcon />
              </div>
              <div>
                <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
                  Return Available
                </h6>
                <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
                  See return policy
                </p>
              </div>
            </Flex>
          </Flex>
        </div>
        {/* Add to Cart Part */}
        <div className="w-[49%] flex items-center gap-x-21">
          <div className="flex items-center">
            <button
              onClick={() => handleQuantity("minus")}
              className="size-14 rounded-full hover:bg-[#F4F4F4] text-2xl flex items-center justify-center cursor-pointer"
            >
              <FiMinus />
            </button>
            <input
              type="text"
              value={quantity}
              className="w-[184px] font-['Poppins'] font-semibold text-4xl leading-11 text-[#303030] text-center"
            />
            <button
              onClick={() => handleQuantity("plus")}
              className="size-14 rounded-full hover:bg-[#F4F4F4] text-2xl flex items-center justify-center cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>
          <div className="flex items-center gap-x-4">
            <Button text="Buy Now" />
            <div className="p-4 border rounded-[10px] border-[#FF624c] cursor-pointer">
              <CartIcon className="size-7" color="#FF624c" subColor="white" />
            </div>
          </div>
        </div>
      </div>
  )
}

export default FacilityWithAddToCart