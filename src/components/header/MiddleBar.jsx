import { Link } from "react-router-dom"
import Flex from "../commonLayouts/Flex";
import Container from "../commonLayouts/Container";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import CartIcon from "../../icons/CartIcon";
import UserIcon from "../../icons/UserIcon";

const MiddleBar = () => {
  return (
    <Container>
      <Flex className={'justify-between items-center py-8'}>
        <Link to="/">
        <img src={Logo} alt="logo" />
        </Link>
        <Flex>
          <div className="relative mr-12">
            <input 
            type="text"
            className="w-[332px] py-[18px] px-6  border border-[#CCCCCC] rounded-[10px]  "
            placeholder="Search Products ..."
            />
            <IoMdSearch className="text-3xl absolute top-1/2  right-[24px] -translate-y-1/2 " />

          </div>
          <div className="relative pl-[50px] mr-[90px]">
            <div className="absolute top-[5px]  left-0">
              <CartIcon/>
            </div>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">Cart</p>
            <span className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">$ 150,00</span>
          </div>
           <div className="pl-[50px] relative after:absolute after:content-[''] after:bg-[#BFBFBF] after:w-[1px] after:h-[32px] after:left-[-45px] after:top-[50%] after:-translate-y-1/2">
            <div className="absolute top-[5px] left-0">
              <UserIcon/>
            </div>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">User</p>
            <span className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">Account</span>
          </div>
        </Flex>
      </Flex>
    </Container>
  )
}

export default MiddleBar