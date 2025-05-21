import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import Button from "../components/commonLayouts/Button";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleDown } from "react-icons/fa";

const NewProduct = () => {
  return (
    <div className="mb-20">
      <Container>
        <Flex className="justify-between items-center mb-12">
          <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#303030]">
            New Products
          </h2>
          <Flex className="justify-between items-center gap-x-4 ">
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Sort by
            </p>
            <Flex className="justify-between items-center gap-x-25 ">
              <p className="font-['Montserrat'] font-bold text-base text-[#FF624C] leading-6">
                All Categories
              </p>

              <FaAngleDown className="text-[#303030] opacity-45" />
            </Flex>
          </Flex>
        </Flex>

        <Flex className={"justify-between items-center gap-x-6"}>
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
