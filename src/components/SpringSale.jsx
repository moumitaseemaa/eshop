import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import Button from "../components/commonLayouts/Button";
import ProductLayout from "./commonLayouts/ProductLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa6";
import { useEffect, useState } from "react";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        background: "#F4F4F4",
        width: "72px",
        height: "72px",
        borderRadius: "50%",
        border: "1px solid #303030",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "16px",
        color: "#303030",
        marginRight: "-5px",
        zIndex: "10",
      }}
      onClick={onClick}
    >
    <FaChevronRight className="text-[#303030] text-[22px]" />
    </div>
  );
}

const SpringSale = () => {
  let [timerLeft, setTimerLeft] = useState(calculateTimeLeft());
  console.log(timerLeft);

  function calculateTimeLeft() {
    let saleEndDate = new Date("May 31 , 2025 10:00 PM +06").getTime();
    console.log(saleEndDate);

    let now = new Date().getTime();
    const difference = saleEndDate - now;

    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
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
    // autoplay: true,
    // autoplaySpeed: 500,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div
      className="mb-20 py-16"
      style={{ background: "url(images/springSaleBg.png)" }}
    >
      <Container>
        <Flex className={"justify-between items-center pr-[42px] "}>
          <div className="max-w-[544px]">
            <h1 className="font-['Poppins'] font-bold text-[56px] text-[#303030] leading-17">
              Spring Sale
            </h1>
            <div className="flex items-center gap-x-6 font-['Poppins'] font-semibold text-4xl leading-[46px] text-[#FF624C] mt-10 mb-2">
              <div>
                {" "}
                {timerLeft.days < 9
                  ? "0" + timerLeft.days
                  : timerLeft.days}{" "}
              </div>
              <span> : </span>
              <div>
                {" "}
                {timerLeft.hours < 9
                  ? "0" + timerLeft.hours
                  : timerLeft.hours}{" "}
              </div>
              <span> : </span>
              <div>
                {" "}
                {timerLeft.minutes < 9
                  ? "0" + timerLeft.minutes
                  : timerLeft.minutes}{" "}
              </div>
              <span> : </span>
              <div>
                {" "}
                {timerLeft.seconds < 9
                  ? "0 " + timerLeft.seconds
                  : timerLeft.seconds}{" "}
              </div>
            </div>
            <div className=" flex items-center gap-x-[62px] font-montserrat text-base text-[#303030] leading-6 font-normal mb-18">
              <div>Days</div>
              <div>Hours</div>
              <div>Minutes</div>
              <div>Seconds</div>
            </div>
            <Button text={"Shop Now"} />
          </div>

          <div className="max-w-[990px] ">
            <Slider {...settings} className="spring_sale">
              <div className="w-[463px]">
                <ProductLayout
                  percentTag={false}
                  discountPercentTag={true}
                  discount="10"
                  category="T E L E V I S I O N"
                  title="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie ..."
                  rating="5"
                  ratingAmount="100"
                  price="4,599.00"
                  border={false}
                  bg="white"
                  stock={true}
                  stockAmount="50"
                  limitedStock={false}
                  springBorder={false}
                  springPadding={true}
                  springCardBg={true}
                />
              </div>

              <div className="w-[463px]">
                <ProductLayout
                  percentTag={false}
                  discountPercentTag={true}
                  discount="50"
                  category="C A M E R A"
                  title="VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha ..."
                  rating="5"
                  ratingAmount="100"
                  price="819.00"
                  border={false}
                  bg="white"
                  stock={false}
                  stockAmount="50"
                  limitedStock={true}
                  springBorder={false}
                  springPadding={true}
                  springCardBg={true}
                />
              </div>
            </Slider>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default SpringSale;
