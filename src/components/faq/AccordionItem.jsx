import { FaAngleRight } from "react-icons/fa";
const AccordionItem = ({ text, content, onToggle, isOpen }) => {
  return (
    <div
      onClick={onToggle}
      className='mb-6 last:mb-0 w-full py-8 px-12 bg-white text-left rounded-[25px] font-["Poppins"] font-semibold text-2xl pl-28 relative'
    >
      <button className="flex items-center gap-x-8 cursor-pointer">
        <div className={`size-[32px] flex items-center justify-center rounded-full text-white text-sm absolute top-8 left-12 ${isOpen ? "bg-transparent !text-[#FF624C] border border-[#FF624C] rotate-[90deg]" : "bg-[#FF624C]"} duration-300`}>
          <FaAngleRight />
        </div>
        {text}
      </button>
      {isOpen && (
        <div className="mt-4 font-['Montserrat'] font-normal text-[20px] leading-[30px] opacity-75 cursor-pointer">
          {content}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
