import Container from "../components/commonLayouts/Container";
import Flex from "../components/commonLayouts/Flex";
import HeadPhoneIcon from "../icons/HeadPhoneIcon";
import SecurityIcon from "../icons/SecurityIcon";
import ShippingIcon from "../icons/ShippingIcon";
import TransparentIcon from "../icons/TransparentIcon";
const Facility = () => {
  return (
    <Container>
      <Flex className={"mb-20 justify-between items-center "}>
        <Flex className={"items-center gap-x-6"}>
          <div className="flex items-center">
            <HeadPhoneIcon />
          </div>
          <div>
            <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
              Responsive
            </h6>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Customer service available 24/7
            </p>
          </div>
        </Flex>
        <Flex className={"items-center gap-x-6"}>
          <div className="flex items-center">
            <SecurityIcon />
          </div>
          <div>
            <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
              Secure
            </h6>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Certified marketplace since 2017
            </p>
          </div>
        </Flex>
        <Flex className={"items-center gap-x-6"}>
          <div className="flex items-center">
            <ShippingIcon />
          </div>
          <div>
            <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
              Shipping
            </h6>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Free, fast, and reliable worldwide7
            </p>
          </div>
        </Flex>
        <Flex className={"items-center gap-x-6"}>
          <div className="flex items-center">
            <TransparentIcon />
          </div>
          <div>
            <h6 className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6">
              Transparent
            </h6>
            <p className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6">
              Hassle-free return policy
            </p>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Facility;
