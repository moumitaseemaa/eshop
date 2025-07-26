import React from "react";
import Container from "../commonLayouts/Container";
import Flex from "../commonLayouts/Flex";
import TopLeftBar from "./topComponent/TopLeftBar";
import TopRightBar from "./topComponent/TopRightBar";

const TopBar = () => {
  return (
    <div className=" border-b border-[#CBCBCB] border-solid">
      <Container>
        <div className={"sm:flex sm:justify-between sm:items-center py-[22px] font-['Montserrat'] font-normal text-sm"}>
          <TopLeftBar />
          <TopRightBar />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
