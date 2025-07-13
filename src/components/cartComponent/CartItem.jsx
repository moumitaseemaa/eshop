import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import ShareIcon from "../../icons/ShareIcon";
import DeleteIcon from "../../icons/cart/DeleteIcon";

const CartItem = () => {
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
    <div className="flex pt-6 pb-14 pl-[36px] pr-12 font-['Montserrat'] font-bold text-base leading-6 uppercase text-[#303030] rounded-2xl mb-20 group hover:border hover:border-[#CBCBCB] transition-all duration-700">
      <img className="mr-[62px]" src="images/grayImg.png" alt="grayImg" />
      <div className="flex items-center">
        <div className="mr-24.5">
          <p className="font-['Montserrat'] font-normal text-sm uppercase leading-5 tracking-[5px] mb-4">
            LAPTOP
          </p>
          <Link
            to={"#"}
            className="w-[325px] inline-block font-['Poppins'] font-semibold text-xl leading-7.5 group-hover:text-[#FF624C] group-hover:underline duration-300"
          >
            2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD
          </Link>
          <p className="mt-11.5 font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
            <span className="mr-2 font-bold">Variant:</span>Space Gray
          </p>
        </div>
        <div>
          <p className='font-["Poppins"] font-semibold text-[#303030] text-xl leading-7.5'>
            $1,659.00
          </p>
        </div>
        <div>
          <div className="flex items-center ml-37 mr-31">
            <button
              onClick={() => handleQuantity("minus")}
              className="size-4 cursor-pointer"
            >
              <FiMinus />
            </button>
            <input
              type="text"
              value={quantity}
              className="size-10 rounded-full bg-[#F4F4F4] font-['Montserrat'] font-bold text-xl leading-6 text-[#303030] flex items-center justify-center text-center cursor-pointer mx-4"
            />
            <button
              onClick={() => handleQuantity("plus")}
              className="size-4 cursor-pointer"
            >
              <FiPlus />
            </button>
          </div>
        </div>
        <div>
          <p className='font-["Poppins"] font-semibold text-[#303030] text-xl leading-7.5'>
            $1,659.00
          </p>
        </div>
        <ul className="flex flex-col gap-y-9.5 justify-end ml-24.5">
          <div className="icon size-16 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white border border-[#FF624C] rounded-full flex items-center justify-center duration-300 cursor-pointer hover:bg-[#FF624C] hover:text-white">
            <DeleteIcon />
          </div>
          <div className="icon size-16 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white border border-[#FF624C] rounded-full flex items-center justify-center duration-300 cursor-pointer hover:bg-[#FF624C] hover:text-white">
            <ShareIcon />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CartItem;
