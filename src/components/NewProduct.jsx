import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import Button from "../components/commonLayouts/Button";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const NewProduct = () => {
  let [isDropDown, setIsDropDown] = useState(false);
  let dropDownRef = useRef(null);

  let handleClick = () => {
    setIsDropDown(!isDropDown);
  };

  useEffect(() => {
    let handleClickOutSide = (event) => {
      // console.log(dropDownRef.current.contains(event.target));
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  return (
    <div className="mb-20">
      <Container>
        <Flex className="justify-between items-center mb-12">
          <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#303030]">
            New Products
          </h2>
          <div
            className=" flex justify-between items-center gap-x-4 relative"
            ref={dropDownRef}
          >
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Sort by
            </p>
            <button
              onClick={handleClick}
              className=" flex justify-between items-center gap-x-25 "
            >
              <p className="font-['Montserrat'] font-bold text-base text-[#FF624C] leading-6">
                All Categories
              </p>
              <FaAngleDown className="text-[#303030] opacity-45" />
              {isDropDown && (
                <div className="w-[250px] absolute mt-2 top-[20px] left-[58px] bg-white rounded z-10 shadow-lg ">
                  <ul className="font-['Montserrat'] font-normal text-base text-[#000000] leading-6 text-left">
                    <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                      Electronics
                    </li>
                    <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                      Home Appliances
                    </li>
                    <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                      Fashion & Clothing
                    </li>
                    <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                      Sports & Outdoors
                    </li>
                    <li className=" px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                      Health & Beauty
                    </li>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </Flex>

        <Flex className={"justify-between items-center gap-x-6"}>
          <div className="max-w-[284px]">
            <ProductLayout
              percentTag={true}
              discountPercentTag={false}
              discount="50"
              limitedStock={false}
              category="Watch"
              title="CamPro HERO10 Black Sleek Design 2023 4K ..."
              rating="5"
              ratingAmount="120"
              price="959.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              springBorder={true}
            />
          </div>
          <div className="max-w-[284px]">
            <ProductLayout
              percentTag={false}
              discountPercentTag={false}
              discount={false}
              limitedStock={false}
              category="Tablet"
              title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
              rating="4"
              ratingAmount="100"
              price="799.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              springBorder={true}
            />
          </div>
          <div className="max-w-[284px]">
            <ProductLayout
              percentTag={false}
              discountPercentTag={false}
              discount={false}
              limitedStock={false}
              category="Audio"
              title="QuietComfort 45 Wireless Headphone ..."
              rating="3"
              ratingAmount="120"
              price="329.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              springBorder={true}
            />
          </div>
          <div className="max-w-[284px]">
            <ProductLayout
              percentTag={true}
              discountPercentTag={false}
              discount="20"
              limitedStock={false}
              category="Laptop"
              title="Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."
              rating="5"
              ratingAmount="120"
              price="2,399.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              springBorder={true}
            />
          </div>
          <div className="max-w-[284px]">
            <ProductLayout
              percentTag={false}
              discountPercentTag={false}
              discount={false}
              limitedStock={false}
              category="Camera"
              title="CamPro HERO10 Black Sleek Design 2023 4K ..."
              rating="1"
              ratingAmount="20"
              price="1,499.99"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              springBorder={true}
            />
          </div>
        </Flex>
        <div className="text-center mt-16">
          <Button
            text="Load More"
            bg="white"
            color="#FF624C"
            border="1px solid #FF624C"
          />
        </div>
      </Container>
    </div>
  );
};

export default NewProduct;
