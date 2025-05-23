import { Link } from "react-router-dom";
import Container from "../components/commonLayouts/Container";

const Banner = () => {
  return (
    <div className="mt-[32px] mb-20">
      <Container>
        <Link to={"/"}>
        <img src="images/banner.png" alt="banner" />
        </Link>
      </Container>
    </div>
  );
};

export default Banner;
