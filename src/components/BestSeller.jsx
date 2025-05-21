import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import Button from "../components/commonLayouts/Button";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleDown } from "react-icons/fa";
import LongLeftArrow from "../icons/LongLeftArrow";

const BestSeller = () => {
  return (
    <div className="mb-20">
      <Container>
        <Flex className="justify-between items-center mb-12 max-w-[902px] ">
          <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#303030]">
            Best Seller
          </h2>
          <Flex className="justify-between items-center gap-x-4">
            <p className="font-['Montserrat'] font-bold text-base text-[#FF624C] leading-6">
              View All
            </p>
            <LongLeftArrow />
          </Flex>
        </Flex>
         <div>
          <img src="images/promoBanner.png" alt="promoBanner.png" />
        </div>

        <Flex className={"justify-between gap-x-6 max-w-[902px]"}>
          <ProductLayout
            percentTag={true}
            category="Watch"
            title="CamPro HERO10 Black Sleek Design 2023 4K ..."
            rating="5"
            ratingAmount="120"
            price="959.99"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={false}
            category="Tablet"
            title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
            rating="4"
            ratingAmount="100"
            price="799.00"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={false}
            category="Audio"
            title="QuietComfort 45 Wireless Headphone ..."
            rating="3"
            ratingAmount="120"
            price="329.99"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={true}
            category="Laptop"
            title="Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."
            rating="5"
            ratingAmount="120"
            price="2,399.99"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="50"
          />
          <ProductLayout
            percentTag={false}
            category="Camera"
            title="CamPro HERO10 Black Sleek Design 2023 4K ..."
            rating="1"
            ratingAmount="20"
            price="1,499.99"
            border={true}
            bg="transparent"
            stock={false}
            stockAmount="50"
          />
        </Flex>
       
      </Container>
    </div>
  );
};

export default BestSeller;
