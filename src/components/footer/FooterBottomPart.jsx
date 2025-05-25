import { Link } from "react-router-dom";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import Logo from "../../assets/logo.png";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import FooterLogo from "../../assets/footerLogo.png";

const FooterBottomPart = () => {
  return (
    <div className="mt-25 mb-20">
      <Container>
        <Flex className={"item-center border-b border-[#CBCBCB] pb-20"}>
          <div className="mr-[167px]">
            <Link>
              <img src={Logo} alt="logo" />
            </Link>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 text-[#303030] pt-[158px] flex flex-col gap-3">
              <li className="relative pl-8">
                <Link
                  to={"tel:01912384567"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <MdOutlinePhone className="size-[20px] hover:text-[#FF624C] duration-400" />
                </Link>
                <span className="hover:text-[#FF624C] duration-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"mailto:information@eshop.com"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <MdEmail className=" size-[20px] hover:text-[#FF624C] duration-400 " />
                </Link>
                <span className="hover:text-[#FF624C] duration-400">
                  information@eshop.com
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <LuMapPin className=" size-[20px] hover:text-[#FF624C] duration-400 " />
                </Link>
                <span className="hover:text-[#FF624C] duration-400">
                  123 Main Street, Anytown USA
                </span>
              </li>
            </ul>
          </div>
          <div className="mr-24">
            <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">
              Links
            </h4>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Products List
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Products Guide
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Tech Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-24">
            <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">
              Supports
            </h4>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="mr-20">
            <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">
              Categories
            </h4>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Computers & Tablets
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Mobile Phones & Accessories
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  TV & Home Theater
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Audio & Headphones
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Cameras & Camcorders
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Gaming Equipment
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Home Appliances
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">
              Supports
            </h4>
            <img
              src={FooterLogo}
              alt="FooterLogo"
              className="mb-[73px] mt-[25px]"
            />
            <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">
              Follow Us
            </h4>
            <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-400">
                  Facebook
                </Link>
              </li>
            </ul>
          </div>
        </Flex>
        {/* copy right part */}
        <Flex
          className={
            "justify-between items-center font-['Montserrat'] font-normal text-sm leading-5 text-[#303030] pt-2"
          }
        >
          <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
          <p className="flex  items-center space-x-2">
            <Link to={"#"} className="hover:text-[#FF624C] duration-400">
              Privacy Policy
            </Link>
            <span className="hover:text-[#FF624C] duration-400">|</span>
            <Link to={"#"} className="hover:text-[#FF624C] duration-400">
              Terms & Condition
            </Link>
            <span className="hover:text-[#FF624C] duration-400">|</span>
            <Link to={"#"} className="hover:text-[#FF624C] duration-400">
              Sitemap
            </Link>
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default FooterBottomPart;
