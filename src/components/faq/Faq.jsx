import { useState } from "react";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import AccordionItem from "./AccordionItem";
import Button from "../commonLayouts/Button";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionData = [
    {
      title: "What payment methods do you accept?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history",
    },
    {
      title: "How long does the product shipping take? ",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history",
    },
    {
      title: "Do you offer international shipping?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history",
    },
    {
      title: "Can I track my order?",
      content:
        "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history",
    },
  ];

  return (
    <div className="mb-20 py-16 " style={{ background: "url(images/faqImg.png)" }}>
      <Container>
        <div className={" flex gap-x-28 items-end"}>
          <div className="w-[926px]">
            {accordionData.map((item, index) => (
              <>
                <AccordionItem
                  key={index}
                  text={item.title}
                  content={item.content}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  isOpen={openIndex === index}
                />
              </>
            ))}
          </div>
          <div className="flex flex-col">
            <h2 className="font-['Poppins'] font-semibold text-4xl leading-[46px]">Frequently <br /> Asked Questions</h2>
            <p className="font-['Montserrat'] font-normal text-[20px] leading-[30px] w-[392px] mt-6 mb-16">
              Questions that get asked the most by our clients. Get any burning
              questions?
            </p>
              <div>
                   <Button text={"Ask A Question"} />
              </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Faq;
