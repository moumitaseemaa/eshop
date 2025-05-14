import { Link } from "react-router-dom";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import { FaBars } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
const BottomBar = () => {
  return (
    <div className="bg-[#FF624C]">
      <Container>
        <Flex className={"justify-between items-center py-6"}>
          <div>
            <ul className="flex items-center gap-x-20 font-['Montserrat'] font-bold text-base text-[#FFFFFF] leading-6">
              <li>
                <Link to={"#"} className="flex items-center gap-x-4">
                  <FaBars className={"size-[20px] text-[#FFFFFF]"} />
                  All Categories
                </Link>
              </li>
              <li>
                <Link
                  to={"/product-list"}
                  className="flex items-center gap-x-2"
                >
                  Products
                  <FaAngleDown className="size-4 " />
                </Link>
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
