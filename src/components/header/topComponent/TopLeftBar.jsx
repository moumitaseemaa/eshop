import { Link } from "react-router-dom";
import HeaderPhoneIcon from "../../../icons/header/HeaderPhoneIcon";
import HeaderLocationIcon from "../../../icons/header/HeaderLocationIcon";

const TopLeftBar = () => {
  return (
    <div className="flex items-center justify-center gap-x-10 sm:gap-x-[50px] relative after:absolute after:content-[''] after:bg-[#CBCBCB] after:w-[1px] after:h-[16px] sm:after:h-[32px] after:left-[62%] after:top-[50%] after:-translate-y-1/2 mb-3 sm:mb-0">
      <Link
        to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
        target="-blank"
        className="flex items-center gap-2"
      >
        <HeaderLocationIcon color="#303030" className="text-base hidden sm:block" />
        123 Main Street, Anytown USA
      </Link>
      <Link to={"tel:01912384567"} className="flex items-center gap-2">
        <HeaderPhoneIcon color="#303030" className="text-xl hidden sm:block" />
        +1 (555) 123-4567
      </Link>
    </div>
  );
};

export default TopLeftBar;
