import { Link } from "react-router-dom";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import Logo from "../../assets/logo.png";
import FooterLogo from "../../assets/footerLogo.png";
import Location from "../../icons/footer/Location";
import EnvelopeIcon from "../../icons/footer/EnvelopeIcon";
import PhoneIcon from "../../icons/footer/PhoneIcon";

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
                  <PhoneIcon />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"mailto:information@eshop.com"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <EnvelopeIcon />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
                  information@eshop.com
                </span>
              </li>
              <li className="relative pl-8">
                <Link
                  to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
                  className="absolute left-2 top-1/2 -translate-1/2"
                >
                  <Location />
                </Link>
                <span className="hover:text-[#FF624C] duration-300 cursor-pointer">
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
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Products List
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Products Guide
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
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
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Return Policy
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
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
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Computers & Tablets
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Mobile Phones & Accessories
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  TV & Home Theater
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Audio & Headphones
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Cameras & Camcorders
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Gaming Equipment
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
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
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Twitter
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
                  Instagram
                </Link>
              </li>
              <li>
                <Link to={"#"} className="hover:text-[#FF624C] duration-300">
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
          <p className="hover:text-[#FF624C] duration-300 cursor-pointer">
            Copyright © 2023 E-Shop. All Rights Reserved.
          </p>
          <p className="flex  items-center space-x-2">
            <Link to={"#"} className="hover:text-[#FF624C] duration-300">
              Privacy Policy
            </Link>
            <span className="hover:text-[#FF624C] duration-300">|</span>
            <Link to={"#"} className="hover:text-[#FF624C] duration-300">
              Terms & Condition
            </Link>
            <span className="hover:text-[#FF624C] duration-300">|</span>
            <Link to={"#"} className="hover:text-[#FF624C] duration-300">
              Sitemap
            </Link>
          </p>
        </Flex>
      </Container>
    </div>
  );
};

export default FooterBottomPart;
