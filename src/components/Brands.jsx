import Container from "./commonLayouts/Container";
import Flex from "./commonLayouts/Flex";
import Samsung from "../icons/brands/Samsung";
import OpenAI from "../icons/brands/OpenAI";
import Amazon from "../icons/brands/Amazon";
import Tencent from "../icons/brands/Tencent";
import Spotify from "../icons/brands/Spotify";

const Brands = () => {
  return (
    <div className="my-25">
      <Container>
        <Flex className={"items-center gap-x-50"}>
          <Samsung />
          <OpenAI />
          <Amazon />
          <Tencent />
          <Spotify />
        </Flex>
      </Container>
    </div>
  );
};

export default Brands;
