import { Link } from "react-router-dom";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import Logo from "../../assets/logo.png";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import FooterLogo from "../../assets/footerLogo.png"

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
                  <MdOutlinePhone className="size-[20px]" />
                </Link>
                +1 (555) 123-4567
              </li>
              <li className="relative pl-8">
                <Link
                  to={"mailto:information@eshop.com"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <MdEmail className=" size-[20px] " />
                </Link>
                information@eshop.com
              </li>
              <li className="relative pl-8">
                <Link
                  to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
                  className="absolute left-2 top-1/2 -translate-1/2 "
                >
                  <LuMapPin className=" size-[20px] " />
                </Link>
                123 Main Street, Anytown USA
              </li>
            </ul>
          </div>
          <div className="mr-24">
              <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">Links</h4>
              <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
                <li><Link to={"#"}>Products List</Link></li>
                <li><Link to={"#"}>Order Tracking</Link></li>
                <li><Link to={"#"}>Products Guide</Link></li>
                <li><Link to={"#"}>Shopping Cart</Link></li>
                <li><Link to={"#"}>Tech Blog</Link></li>
            </ul>
          </div>
          <div className="mr-24">
              <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">Supports</h4>
              <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
                <li><Link to={"#"}>About Us</Link></li>
                <li><Link to={"#"}>Privacy Policy</Link></li>
                <li><Link to={"#"}>Return Policy</Link></li>
                <li><Link to={"#"}>Help Centre</Link></li>
                <li><Link to={"#"}>Store Locations</Link></li>
                <li><Link to={"#"}>Careers</Link></li>
            </ul>
          </div>
          <div className="mr-20">
              <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">Categories</h4>
              <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
                <li><Link to={"#"}>Computers & Tablets</Link></li>
                <li><Link to={"#"}>Mobile Phones & Accessories</Link></li>
                <li><Link to={"#"}>TV & Home Theater</Link></li>
                <li><Link to={"#"}>Audio & Headphones</Link></li>
                <li><Link to={"#"}>Cameras & Camcorders</Link></li>
                <li><Link to={"#"}>Gaming Equipment</Link></li>
                <li><Link to={"#"}>Home Appliances</Link></li>
            </ul>
          </div>
             <div>
              <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">Supports</h4>
              <img src={FooterLogo} alt="FooterLogo" className="mb-[73px] mt-[25px]"/>
              <h4 className="font-['Poppins'] font-semibold text-xl leading-[30px] mb-6">Follow Us</h4>
              <ul className="font-['Montserrat'] font-normal text-base leading-6 flex flex-col gap-3">
                <li><Link to={"#"}>Twitter</Link></li>
                <li><Link to={"#"}>Instagram</Link></li>
                <li><Link to={"#"}>Facebook</Link></li>
                
            </ul>
          </div>
        </Flex>
        {/* copy right part */}
        <Flex className={"justify-between items-center font-['Montserrat'] font-normal text-sm leading-5 text-[#303030] pt-2"}>
        <p>Copyright © 2023 E-Shop. All Rights Reserved.</p>
        <p>
          <Link to={"#"}>Privacy Policy</Link> |
          <Link to={"#"}>Terms & Condition</Link> |
          <Link to={"#"}>Sitemap</Link>
        </p>
        </Flex>
      </Container>
    </div>
  );
};

export default FooterBottomPart;
