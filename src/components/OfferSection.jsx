import Container from "./commonLayouts/Container";
import Flex from "./commonLayouts/Flex";

const OfferSection = () => {
  return (
    <div className="mb-20">
      <Container>
        <Flex className={" justify-between items-center"}>
          <div>
            <img src="images/offer1.png" alt="offer1" />
          </div>
          <div>
            <img src="images/offer2.png" alt="offer2" />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default OfferSection;
