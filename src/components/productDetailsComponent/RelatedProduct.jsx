import LongLeftArrow from "../../icons/LongLeftArrow";
import Flex from "../commonLayouts/Flex";
import ProductLayout from "../commonLayouts/ProductLayout";

const RelatedProduct = () => {
  return (
    <div className="mb-16">
      <Flex className="justify-between items-center mb-12">
        <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#303030]">
          Related Products
        </h2>
        <Flex className="justify-between items-center gap-x-4">
          <p className="font-['Montserrat'] font-bold text-base text-[#FF624C] leading-6 cursor-pointer">
            View All
          </p>
          <LongLeftArrow />
        </Flex>
      </Flex>

      <Flex className={"gap-x-5 flex-wrap"}>
        <div className="max-w-[285px]">
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

        <div className="max-w-[285px]">
          <ProductLayout
            percentTag={true}
            discountPercentTag={false}
            discount="20"
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
        <div className="max-w-[285px]">
          <ProductLayout
            percentTag={false}
            discountPercentTag={false}
            discount={false}
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
        <div className="max-w-[285px]">
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
        <div className="max-w-[285px]">
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
    </div>
  );
};

export default RelatedProduct;
