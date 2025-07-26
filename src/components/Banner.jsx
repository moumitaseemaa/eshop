import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container";

const Banner = () => {
  return (
    <div className="sm:mt-[32px] sm:mb-20 mb-12">
      <Container>
        <Link to={"/"}>
        <img className="w-[98%] px-2 sm:px-0 sm:w-full " src="images/banner.png" alt="banner" />
        </Link>
      </Container>
    </div>
  );
};

export default Banner;
