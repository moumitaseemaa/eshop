import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container.jsx";
import Button from "../components/commonLayouts/Button.jsx";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import EnlargeIcon from "../icons/productDetails/EnlargeIcon.jsx";
import { IoMdClose } from "react-icons/io";
import { IoStarSharp } from "react-icons/io5";
import FacilityWithAddToCart from "../components/productDetailsComponent/FacilityWithAddToCart.jsx";
import ProductDescription from "../components/productDetailsComponent/ProductDescription.jsx";
import RelatedProduct from "../components/productDetailsComponent/RelatedProduct.jsx";

const ProductDetailsPage = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let [activeModal, setActiveModal] = useState(false);
  let [image, setImage] = useState("");

  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  var settingAnother = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  let handleClick = (url) => {
    setActiveModal(true);
    setImage(url);
  };

  return (
    <Container>
      {/* Breadcrumb Navigation with Dividers and Active Product Highlight */}
      <div className="flex font-['Montserrat'] font-normal text-base text-[#303030] leading-6 gap-x-7.5 mt-16 mb-12">
        <Link>Home</Link>
        <Link className="relative after:absolute after:content-[''] after:bg-[#303030] after:w-[1px] after:h-[15px] after:left-[-16px] after:top-[50%] after:-translate-y-1/2 before:absolute before:content-[''] before:bg-[#303030] before:w-[1px] before:h-[15px] before:right-[-16px] before:top-[50%] before:-translate-y-1/2">
          Computers & Tablets{" "}
        </Link>
        <Link className="relative before:absolute before:content-[''] before:bg-[#303030] before:w-[1px] before:h-[15px] before:right-[-16px] before:top-[50%] before:-translate-y-1/2">
          Laptop
        </Link>
        <Link className="font-bold">
          NexSUS ROCK Strix Scar 17 Gaming Laptop
        </Link>
      </div>
      {/* Breadcrumb Navigation with Dividers and Active Product Highlight */}
      {/* Slider Part */}
      <div className={"flex gap-x-14 mb-[51px]"}>
        <div className="w-[49%]">
          <Slider
            asNavFor={nav2}
            ref={(slider) => (sliderRef1 = slider)}
            {...settings}
          >
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/cosmeticsImg.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/cosmeticsImg.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/gabbyImg.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/gabbyImg.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/cosmeticsTwo.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/cosmeticsTwo.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/cosmeticsImg.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/cosmeticsImg.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/gabbyImg.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/gabbyImg.jpg"
                alt=""
              />
            </div>
            <div className="relative">
              <EnlargeIcon
                onClick={() => handleClick("/images/cosmeticsTwo.jpg")}
                className={"absolute top-[8px] right-[24px]"}
              />
              <img
                className="w-full object-center"
                src="/images/cosmeticsTwo.jpg"
                alt=""
              />
            </div>
          </Slider>
          <Slider
            asNavFor={nav1}
            ref={(slider) => (sliderRef2 = slider)}
            {...settingAnother}
          >
            <div>
              <img
                className="w-full object-center"
                src="/images/cosmeticsImg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full object-center"
                src="/images/gabbyImg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full object-center"
                src="/images/cosmeticsTwo.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full object-center"
                src="/images/cosmeticsImg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full object-center"
                src="/images/gabbyImg.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full object-center"
                src="/images/cosmeticsTwo.jpg"
                alt=""
              />
            </div>
          </Slider>
        </div>
        <div className="w-[49%]">
          <div className="flex items-center gap-x-2 mb-4">
            <div className="flex items-center gap-x-1 text-[#FED550] text-2xl">
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
              <IoStarSharp />
            </div>
            <span className="font-['Montserrat'] font-normal text-base text-[#303030]">
              ( 142 )
            </span>
          </div>
          <h2 className="font-['Poppins'] font-semibold text-[#303030] text-4xl leading-11.5 border-b border-[#CBCBCB] w-[631px] pb-6">
            NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro
          </h2>
          <div className="flex gap-x-[17px] mt-6 mb-12">
            <span className="font-['Poppins'] font-bold text-[#FF624C] text-[56px] leading-17">
              $2,999.99
            </span>
            <small className="font-['Montserrat'] font-normal text-xl text-[#303030] line-through decoration-[#979797] mt-[26px]">
              $5,499.99
            </small>
          </div>
          <ul className="flex gap-x-[108px] mb-4">
            <li className="w-[84px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
              Brand
            </li>
            <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
              NexSUS Tech Company
            </li>
          </ul>
          <ul className="flex gap-x-[108px] mb-4">
            <li className="w-[84px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
              Size
            </li>
            <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
              15.7 x 11.1 x 1.0 inches (W x D x H)
            </li>
          </ul>
          <ul className="flex gap-x-[108px] mb-4">
            <li className="w-[84px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
              Weight
            </li>
            <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
              6.28 pounds
            </li>
          </ul>
          <ul className="flex gap-x-[108px] mb-4">
            <li className="w-[84px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
              Delivery
            </li>
            <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
              Worldwide
            </li>
          </ul>
          <ul className="flex gap-x-[108px] mb-4">
            <li className="w-[84px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
              Variant
            </li>
            <li className="flex flex-wrap gap-x-1 gap-y-2">
              <Button
                text={"Off White"}
                px="32px"
                bg="transparent"
                color="#303030"
                rounded="5px"
                fontSize="16px"
                border="1px solid #979797"
              />
              <Button
                text={"Space Gray"}
                px="32px"
                bg="transparent"
                color="#FF624C"
                rounded="5px"
                fontSize="16px"
                border="1px solid #FF624C"
              />
              <Button
                text={"Jet Black"}
                px="32px"
                bg="transparent"
                color="#303030"
                rounded="5px"
                fontSize="16px"
                border="1px solid #979797"
              />
              <Button
                text={"Cinnamon Red"}
                px="32px"
                bg="transparent"
                color="#CBCBCB"
                rounded="5px"
                fontSize="16px"
                border="1px solid #CBCBCB"
              />
            </li>
          </ul>
        </div>
      </div>
      {/* Add to Cart Component */}
      <FacilityWithAddToCart />
      {/* ProductDescription Component */}
      <ProductDescription />
      {/* Related Product Component */}
      <RelatedProduct />

      {/* Custom Modal Part */}
      {activeModal && (
        <div className="fixed top-0 left-0 h-screen w-full bg-black/80 flex justify-center items-center z-50">
          <img src={image} alt="" />
          <IoMdClose
            onClick={() => setActiveModal(false)}
            className="text-xl absolute top-[275px] right-[650px]"
          />
        </div>
      )}
    </Container>
  );
};

export default ProductDetailsPage;
