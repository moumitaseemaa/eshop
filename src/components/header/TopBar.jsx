import React from "react";
import Container from "../Container";
import Flex from "../commonLayouts/Flex";
import TopLeftBar from "./topComponent/TopLeftBar";
import TopRightBar from "./topComponent/TopRightBar";

const TopBar = () => {
  return (
    <div className=" border-b border-[#BFBFBF] border-solid">
      <Container>
        <Flex className={"justify-between items-center py-[22px] font-['Montserrat'] font-normal text-sm"}>
          <TopLeftBar />
          <TopRightBar />
        </Flex>
      </Container>
    </div>
  );
};

export default TopBar;
