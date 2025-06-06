import { Link } from "react-router-dom";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
const BottomBar = () => {
  const [isDroDownOpen, setIsDroDownOpen] = useState(false);
  const [isCategoriesDroDownOpen, setIsCategoriesDroDownOpen] = useState(false);

  const dropDownRef = useRef(null);
  const CategoriesDropDownRef = useRef(null);

  let handleDropDownClick = () => {
    setIsDroDownOpen(!isDroDownOpen);
  };

  let handleCategoriesDropDownClick = () => {
    setIsCategoriesDroDownOpen(!isCategoriesDroDownOpen);
  };

  // useEffect of ProductsDropDown
  useEffect(() => {
    let handleClickOutSide = (event) => {
      // console.log(dropDownRef.current.contains(event.target));
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDroDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  // useEffect of CategoriesDropDown
  useEffect(() => {
    let handleClickCategoriesOutSide = (event) => {
      if (
        CategoriesDropDownRef.current &&
        !CategoriesDropDownRef.current.contains(event.target)
      ) {
        setIsCategoriesDroDownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickCategoriesOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickCategoriesOutSide);
    };
  }, []);

  return (
    <div className="bg-[#FF624C]">
      <Container>
        <Flex className={"justify-between items-center py-6"}>
          <div>
            <ul className="flex items-center gap-x-20 font-['Montserrat'] font-bold text-base text-[#FFFFFF] leading-6">
              <li className="relative" ref={CategoriesDropDownRef}>
                <button
                  onClick={handleCategoriesDropDownClick}
                  className="flex gap-x-4 cursor-pointer"
                >
                  <FaBars className={"size-[20px] text-[#FFFFFF]"} />
                  All Categories
                  {isCategoriesDroDownOpen && (
                    <div className="w-48 absolute mt-2 top-[20px] left-0 bg-white rounded z-10 shadow-lg ">
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
              </li>
              <li className="relative" ref={dropDownRef}>
                <button
                  onClick={handleDropDownClick}
                  className="flex items-center gap-x-2 cursor-pointer"
                >
                  Products
                  <FaAngleDown className="size-4 " />
                  {isDroDownOpen && (
                    <div className="w-48 absolute mt-2 top-[20px] left-0 bg-white rounded z-10 shadow-lg ">
                      <ul className="font-['Montserrat'] font-normal text-base text-[#000000] leading-6 text-left">
                        <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                          LumiGlow Lamp
                        </li>
                        <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                          EcoBreeze Purifier
                        </li>
                        <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                          SwiftCharge
                        </li>
                        <li className="border-b border-[#CBCBCB] px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                          SmartFit Watch
                        </li>
                        <li className=" px-5 py-3  hover:bg-gray-300 hover:text-[#FF624C] duration-300 cursor-pointer">
                          Pure Blender
                        </li>
                      </ul>
                    </div>
                  )}
                </button>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center gap-x-20 font-['Montserrat'] font-bold text-base text-[#FFFFFF] leading-6">
              <li>
                <Link to={"#"}>LIMITED SALE 👋🏻</Link>
              </li>
              <li>
                <Link to={"#"}>Best Seller</Link>
              </li>
              <li>
                <Link to={"#"}>New Arrival</Link>
              </li>
            </ul>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default BottomBar;
