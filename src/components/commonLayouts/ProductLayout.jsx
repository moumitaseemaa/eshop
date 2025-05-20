import { useState } from "react";
import CartIcon from "../../icons/CartIcon";
import HeartIcon from "../../icons/HeartIcon";
import ShareIcon from "../../icons/ShareIcon";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa";

const ProductLayout = ({
  percentTag = "50%",
  category = "Laptop",
  title = "Orange Watch 12 High Quality Health Sensor...",
  rating = "5",
  ratingAmount = "120",
  price = "$1,499.99",
  border,
  bg = "transparent",
  stock,
  stockAmount = "50 AVAILABLE",
}) => {
  const [ratingVal, setRatingVal] = useState(new Array(+rating).fill(rating));
  console.log(ratingVal);

  return (
    <div
    style={{background:bg}}
      className={
        "border border-transparent p-6 hover:border-[#CBCBCB] duration-300 rounded-[10px] group"
      }
    >
      <div className="relative">
        <img
          className="w-full"
          src="images/productImg.png"
          alt="productImg.png"
        />
        {percentTag && (
          <div className="bg-[#FF624C] py-[7px] px-[20px] rounded-[5px] font-['Montserrat'] font-bold text-base text-white leading-6 absolute top-[-8px] right-0">
            50%
          </div>
        )}
        <Flex
          className={
            " flex items-center justify-center gap-x-[18px] absolute bottom-[6px] left-[47%] -translate-x-1/2 scale-0 group-hover:scale-100"
          }
        >
          <div className="size-[50px] bg-white border border-[#FF624C] rounded-full flex items-center justify-center hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer ">
            <CartIcon
              width={28}
              height={28}
              color="#FF624C"
              subColor="transparent"
            />
          </div>
          <div className="size-[50px] bg-white border border-[#FF624C] rounded-full flex items-center justify-center hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer ">
            <HeartIcon />
          </div>
          <div className="size-[50px] bg-white border border-[#FF624C] rounded-full flex items-center justify-center hover:bg-[#FF624C] hover:text-white duration-300 cursor-pointer ">
            <ShareIcon />
          </div>
        </Flex>
      </div>
      <div>
        <p className="font-['Montserrat'] font-normal text-sm uppercase tracking-[5px] mt-10">
          {category}
        </p>
        <h3 className="font-['Poppins'] font-semibold text-xl leading-[30px] group-hover:text-[#FF624C] duration-300 group-hover:underline mt-4 mb-2">
          {title}
        </h3>
        <Flex className={"items-center gap-x-2 text-[#FED550]"}>
          {ratingVal.map((item, index) => (
            <FaStar key={index} />
          ))}

          <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
            ( {ratingAmount} )
          </span>
        </Flex>
        <p className="font-['Poppins'] font-semibold text-2xl leading-[30px] mt-[20px] group-hover:text-[#FF624C] duration-300 ">
          ${price}
        </p>
        {stock && (
          <div className="w-full h-[30px] bg-[#dddd] rounded-[25px] relative mt-[32px]">
            <div className="w-1/2 h-[30px] bg-[#303030] rounded-[25px]">
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Montserrat'] font-bold text-sm text-[#fff] leading-6">
                $ {stockAmount} AVAILABLE
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLayout;
