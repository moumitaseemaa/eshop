import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container.jsx";
import OrderSummary from "../components/checkout/OrderSummary.jsx";
import CheckoutInformation from "../icons/checkout/CheckoutInformation.jsx";
const CheckoutPage = () => {
  const [active, setActive] = useState("Information");
  return (
    <Container>
      {/* Path Link */}
      <div>
        <div className="flex font-['Montserrat'] font-normal text-base text-[#303030] leading-6 gap-x-7.5 mt-16 mb-12">
          <Link>Home</Link>
          <Link className="relative after:absolute after:content-[''] after:bg-[#303030] after:w-[1px] after:h-[15px] after:left-[-16px] after:top-[50%] after:-translate-y-1/2 before:absolute before:content-[''] before:bg-[#303030] before:w-[1px] before:h-[15px] before:right-[-16px] before:top-[50%] before:-translate-y-1/2">
            Cart
          </Link>
          <Link className="font-bold">Checkout</Link>
        </div>
      </div>
      <div className="mb-20 text-center">
        <h2 className="font-['Poppins'] font-bold text-[56px] leading-17 text-[#303030] mb-11">
          Checkout
        </h2>
        {/* Checkout Option */}
        <div className="font-['Poppins'] font-semibold text-2xl leading-7.5 text-[#CBCBCB] flex items-center justify-center gap-x-16 mb-20 cursor-pointer">
          <div
            className="flex items-center gap-x-4"
            onClick={() => setActive("Information")}
          >
            {active === "Information" && (
              <div className="size-12.5 rounded-full bg-[#FF624C] font-['Montserrat'] font-bold text-base text-[white] leading-6 flex items-center justify-center">
                01
              </div>
            )}
            <p
              className={`${
                active === "Information" &&
                "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
              }`}
            >
              Information
            </p>
          </div>
          <div
            className="flex items-center gap-x-4"
            onClick={() => setActive("Shipping")}
          >
            {active === "Shipping" && (
              <div className="size-12.5 rounded-full bg-[#FF624C] font-['Montserrat'] font-bold text-base text-[white] leading-6 flex items-center justify-center">
                02
              </div>
            )}
            <p
              className={`${
                active === "Shipping" &&
                "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
              }`}
            >
              Shipping
            </p>
          </div>
          <div
            className="flex items-center gap-x-4"
            onClick={() => setActive("Payment")}
          >
            {active === "Payment" && (
              <div className="size-12.5 rounded-full bg-[#FF624C] font-['Montserrat'] font-bold text-base text-[white] leading-6 flex items-center justify-center">
                03
              </div>
            )}
            <p
              className={`${
                active === "Payment" &&
                "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
              }`}
            >
              Payment
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-x-14 mb-20">
        <CheckoutInformation />
        <OrderSummary />
      </div>
    </Container>
  );
};

export default CheckoutPage;
