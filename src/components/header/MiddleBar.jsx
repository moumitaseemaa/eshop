import { Link } from "react-router-dom";
import Flex from "../commonLayouts/Flex";
import Container from "../commonLayouts/Container";
import Logo from "../../assets/logo.png";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { showSideBar } from "../../slices/sideBarSlice";

const MiddleBar = () => {
  //  =============== responsive part =============== // 
  let dispatch = useDispatch()
  const [showSearch, setShowSearch] = useState(false);
  const dropDownRef = useRef(null);
  let handleClickShow = () => {
    setShowSearch(!showSearch);
  };

    useEffect(() => {
    let handleClickOutSide = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  let handleShowSideBar = ()=>{
   dispatch(showSideBar())
  }
//  =============== responsive part =============== // 
  return (
    <Container>
      <Flex className={"justify-between sm:items-center py-8 px-3 sm:px-0 "}>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <Flex>
          <div className="relative mr-12">
            <input
              type="text"
              className={`w-[328px] sm:w-[332px] py-[18px] px-6  border border-[#CCCCCC] rounded-[10px] sm:block ${!showSearch && "hidden"}`}
              placeholder="Search Products ..."
            />

            <IoIosSearch className="text-4xl sm:text-2xl text-[#303030] absolute top-1/2 sm:right-[24px] -translate-y-1/2 cursor-pointer hidden sm:block" />

            <IoIosSearch
              onClick={handleClickShow}
              ref={dropDownRef}
              className="text-4xl  text-[#303030] absolute top-1/2 -right-11 sm:right-[24px] -translate-y-1/2 cursor-pointer sm:hidden"
            />
            <FaBars onClick={handleShowSideBar} className="text-3xl  text-[#303030] absolute top-[40%] right-1 sm:right-[24px] -translate-y-1/2 cursor-pointer sm:hidden" />
          </div>
          <div className="relative sm:pl-[50px] sm:mr-[90px] mr-12">
            <div className="absolute -top-1 sm:top-[5px]  left-0 cursor-pointer">
              <CartIcon />
            </div>
            <div className="hidden sm:block">
              <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
                Cart
              </p>
              <span className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
                $ 150,00
              </span>
            </div>
          </div>
          <div className="mr-8 sm:mr-0 sm:pl-[50px] relative sm:after:absolute sm:after:content-[''] sm:after:bg-[#BFBFBF] sm:after:w-[1px] sm:after:h-[32px] sm:after:left-[-45px] sm:after:top-[25%] sm:after:-translate-y-1/2">
            <div className="absolute -top-1 sm:top-[5px] left-0 cursor-pointer">
              <UserIcon />
            </div>
            <div className="hidden sm:block">
              <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
                User
              </p>
              <span className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
                Account
              </span>
            </div>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default MiddleBar;
