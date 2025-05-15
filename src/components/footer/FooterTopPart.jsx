import Button from "../commonLayouts/Button";
import Container from "../commonLayouts/Container";

const FooterTopPart = () => {
  return (
    <Container>
      <div
        style={{
          background:
            "linear-gradient(90deg, rgba(244,244,244,1) 27%, rgba(217,217,217,1) 43%)",
        }}
        className="rounded-[25px] py-[114px] px-25"
      >
        <h2 className="font-['Poppins'] font-semibold text-[36px] leading-[46px] mb-4">Get Our Updates</h2>
        <p className="font-['Montserrat'] font-normal text-[20px] text-[#303030] leading-[30px] max-w-[475px]">
          Browse our wide selection of electronics and find the perfect promo
          for you from newsletter.
        </p>
        <input 
            type="text"
            className="w-[494px] p-6 border border-[#CCCCCC] rounded-[10px] font-['Montserrat'] font-normal text-base text-[#303030] leading-6 mt-8 mb-4 "
             placeholder="Enter your email address ..."
            />
        <br/>
        <Button text="Subscribe"/>
      </div>
    </Container>
  );
};

export default FooterTopPart;
