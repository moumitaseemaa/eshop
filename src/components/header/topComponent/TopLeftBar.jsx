import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhone } from "react-icons/md";

const TopLeftBar = () => {
  return (
    <div className="flex items-center gap-[50px] relative after:absolute after:content-[''] after:bg-[#BFBFBF] after:w-[1px] after:h-[32px] after:left-[61%] after:top-[50%] after:-translate-y-1/2">
      <Link
        to={"https://maps.app.goo.gl/8z2YEqrA2CYrKGrs5"}
        target="-blank"
        className="flex items-center gap-2 "
      >
        <LuMapPin />
        123 Main Street, Anytown USA
      </Link>
      <Link to={"tel:01912384567"} className="flex items-center gap-2">
        <MdOutlinePhone />
        +1 (555) 123-4567
      </Link>
    </div>
  );
};

export default TopLeftBar;
