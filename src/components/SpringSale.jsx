import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import Button from "../components/commonLayouts/Button";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleRight } from "react-icons/fa";
import { useEffect, useState } from "react";

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
        marginRight: "-25px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
      <FaAngleRight className="text-[#303030] text-base" />
    </div>
  );
}

const SpringSale = () => {
  let [timerLeft, setTimerLeft] = useState(calculateTimeLeft());
  console.log(timerLeft);

  function calculateTimeLeft() {
    let saleEndDate = new Date("May 28 , 2025 10:00 PM +06").getTime();
    console.log(saleEndDate);

    let now = new Date().getTime();
    const difference = saleEndDate - now;

    if (difference < 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimerLeft(calculateTimeLeft());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div
      className="mb-20 py-16"
      style={{ background: "url(images/springSaleBg.png)" }}
    >
      <Container>
        <Flex className={"justify-between items-center"}>
          <div className="max-w-[544px]">
            <h1 className="font-['Poppins'] font-bold text-[56px] text-[#303030] leading-17">
              Spring Sale
            </h1>
            <div className="flex items-center gap-x-[30px] font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#FF624C] mt-10 mb-2">

               <div> {timerLeft.days < 10 ? "0" + timerLeft.days : timerLeft.days} </div>
                <span> : </span>
                <div> {timerLeft.hours < 10 ? "0" + timerLeft.hours : timerLeft.hours} </div>
                <span> : </span>
                <div> {timerLeft.minutes < 10 ? "0" + timerLeft.minutes : timerLeft.minutes} </div>
                <span> : </span>
                <div> {timerLeft.seconds} </div>
              {/* <span>0 {timerLeft.days}</span> : <span>0 {timerLeft.hours}</span>{" "}
              : <span> {timerLeft.minutes} </span> :{" "}
              <span> {timerLeft.seconds} </span> */}
              
            </div>
            <div className=" flex items-center gap-x-[60px] font-montserrat text-base text-[#303030] leading-6 font-normal mb-18">
                <div>Days</div>
                <div>Hours</div>
                <div>Minutes</div>
                <div>Seconds</div>
              </div>
            <Button text={"Shop Now"} />
          </div>

          <div className="max-w-[950px]">
            <Slider {...settings}>
              <ProductLayout
                percentTag={false}
                category="Tablet"
                title="Ultra Tablet Qwerty HD 10765 Series Low Pri..."
                rating="4"
                ratingAmount="100"
                price="799.00"
                border={true}
                bg="transparent"
                stock={true}
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
                stock={true}
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
                stock={true}
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
                stock={true}
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
                stock={true}
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
                stock={true}
                stockAmount="50"
              />
            </Slider>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default SpringSale;
