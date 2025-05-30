import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import LongLeftArrow from "../icons/LongLeftArrow";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "white",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        color: "#303030",
        marginRight: "-14px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <FaChevronRight className="text-[#303030] text-[13px] opacity-70" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "white",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        border: "1px solid #303030",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        color: "#303030",
        marginLeft: "-14px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <FaChevronLeft className="text-[#303030] text-[13px] opacity-70" />
    </div>
  );
}

const FeaturedProduct = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="mb-20">
      <Container>
        <Flex className="justify-between items-center mb-12">
          <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#303030]">
            Featured Products
          </h2>
          <Flex className="justify-between items-center gap-x-4">
            <p className="font-['Montserrat'] font-bold text-base text-[#FF624C] leading-6 cursor-pointer">
              View All
            </p>
            <LongLeftArrow />
          </Flex>
        </Flex>
        <div className="max-w-[1440px] mx-auto">
          <Slider {...settings} className="feature_product">
            <div className="285px">
              <ProductLayout
                percentTag={true}
                discountPercentTag={false}
                discount="50"
                category="Audio"
                title="WH-1000XM4 Wireless Headphones High Qu..."
                rating="5"
                ratingAmount="120"
                price="59.00"
                border={true}
                bg="transparent"
                stock={false}
                stockAmount="50"
                limitedStock={false}
                springBorder={true}
              />
            </div>

            <div className="285px">
              <ProductLayout
                percentTag={false}
                discountPercentTag={false}
                discount={false}
                category="Laptop"
                title="S21 Laptop Ultra HD LED Screen Feature 2023 ..."
                rating="5"
                ratingAmount="100"
                price="1,199.00"
                border={true}
                bg="transparent"
                stock={false}
                stockAmount="50"
                limitedStock={false}
                springBorder={true}
              />
            </div>
            <div className="285px">
              <ProductLayout
                percentTag={false}
                discountPercentTag={false}
                discount={false}
                category="Camera"
                title="Mini Polaroid Camera for Girls with Flash Li..."
                rating="5"
                ratingAmount="70"
                price="79.00"
                border={true}
                bg="transparent"
                stock={false}
                stockAmount="50"
                limitedStock={false}
                springBorder={true}
              />
            </div>
            <div className="285px">
              <ProductLayout
                percentTag={false}
                discountPercentTag={false}
                discount={false}
                category="television"
                title="AG OLED65CXPUA 4K Smart OLED TV New ..."
                rating="5"
                ratingAmount="20"
                price="2,799.00"
                border={true}
                bg="transparent"
                stock={false}
                stockAmount="50"
                limitedStock={false}
                springBorder={true}
              />
            </div>
            <div className="285px">
              <ProductLayout
                percentTag={false}
                discountPercentTag={false}
                discount={false}
                category="Phone"
                title="JPhone 13 High Quality Value Buy Best Cam..."
                rating="5"
                ratingAmount="50"
                price="999.00"
                border={true}
                bg="transparent"
                stock={false}
                stockAmount="50"
                limitedStock={false}
                springBorder={true}
              />
            </div>
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedProduct;
