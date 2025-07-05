import { useState } from "react";
import ArrowDownIcon from "../../icons/productList/ArrowDownIcon";
import { IoCheckmarkOutline } from "react-icons/io5";
import PriceRange from "./PriceRange";

let Categories = [
  { id: 1, name: "Computers & Tablets" },
  { id: 2, name: "Mobile & Accessories" },
  { id: 3, name: "TV & Home Theater" },
  { id: 4, name: "Audio & Headphones" },
  { id: 5, name: "Cameras & Camcorders" },
  { id: 6, name: "Gaming Equipment" },
  { id: 7, name: "Home Appliances" },
];

let Brands = [
  { id: 1, name: "Apple", limited: "( 565 )" },
  { id: 2, name: "Samsung", limited: "( 428 )" },
  { id: 3, name: "ASUS", limited: "( 323 )" },
  { id: 4, name: "Dell", limited: "( 298 )" },
  { id: 5, name: "Lenovo", limited: "( 180 )" },
  { id: 6, name: "HP", limited: "( 98 )" },
  { id: 7, name: "Panasonic", limited: "( 17 )" },
  { id: 8, name: "Nova", limited: "( 07 )" },
  { id: 9, name: "Kivo", limited: "( 450 )" },
  { id: 10, name: "Verdo", limited: "( 290 )" },
];

const ProductListLeftSide = () => {
  let [isCategoryDropDownOpen, setIsCategoryDropDownOpen] = useState(true);
  let [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(true);
  const [isLessBrandBtn, setIsLessBrandBtn] = useState(false);
  const slicedBrands = isLessBrandBtn ? Brands : Brands.slice(0, 7);

  return (
    <div>
      <div className="w-[355px] bg-[#F4F4F4] p-12 rounded-[25px]">
     <div>
         {/* Categories item part */}
        <div
          onClick={() => setIsCategoryDropDownOpen(!isCategoryDropDownOpen)}
          className="flex justify-between items-center mb-5 cursor-pointer"
        >
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#303030] leading-7.5">
            Categories
          </h3>
          <div
            className={`${isCategoryDropDownOpen ? `rotate-0` : `rotate-180`}`}
          >
            <ArrowDownIcon />
          </div>
        </div>
        {isCategoryDropDownOpen && (
          <div>
            <ul>
              {Categories.map((item, index) => (
                <li key={index} className="flex items-center relative">
                  <input
                    className="appearance-none h-4 w-4.5 checked:bg-[#FF624C] checked:border-none border border-secondary rounded-xs peer cursor-pointer"
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                  />
                  <label
                    htmlFor={item.name}
                    className="hidden peer-checked:block absolute top-1/2 left-2 -translate-1/2 text-[12px] text-white cursor-pointer"
                  >
                    <IoCheckmarkOutline />
                  </label>
                  <label
                    htmlFor={item.name}
                    className="pl-2 peer-checked:font-bold w-full py-1.5 font-['Montserrat'] font-normal text-base leading-6 cursor-pointer duration-300"
                  >
                    {item.name}
                  </label>
                </li>
              ))}
            </ul>
            <hr className="text-[#C3C3C3] w-full my-10" />
          </div>
        )}
        {/* Brands item part */}
        <div
          onClick={() => setIsBrandDropDownOpen(!isBrandDropDownOpen)}
          className="flex justify-between items-center mb-5 cursor-pointer"
        >
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#303030] leading-7.5">
            Brands
          </h3>
          <div className={`${isBrandDropDownOpen ? `rotate-0` : `rotate-180`}`}>
            <ArrowDownIcon />
          </div>
        </div>
        {isBrandDropDownOpen && (
          <div>
            <ul className="font-['Montserrat'] font-normal text-base text-[#303030] leading-6 cursor-pointer">
              {slicedBrands.map((item, index) => (
                <li key={index} className="flex items-center relative">
                  <input
                    className="appearance-none h-4 w-4.5 checked:bg-[#FF624C] checked:border-none border border-[#303030] rounded-xs peer cursor-pointer"
                    type="checkbox"
                    name={item.name}
                    id={item.name}
                  />
                  <label
                    htmlFor={item.name}
                    className="hidden peer-checked:block absolute top-1/2 left-2 -translate-1/2 text-[12px] text-white cursor-pointer"
                  >
                    <IoCheckmarkOutline />
                  </label>
                  <label
                    htmlFor={item.name}
                    className="peer-checked:font-bold w-full flex items-center justify-between py-1.5 pl-2 font-montserrat font-normal text-base leading-6 cursor-pointer duration-300"
                  >
                    {item.name}{" "}
                    <span className="font-normal">{item.limited}</span>
                  </label>
                </li>
              ))}
            </ul>
            {/* More Brands Part  */}
            <div
              onClick={() => setIsLessBrandBtn(!isLessBrandBtn)}
              className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6 underline underline-offset-6 decoration-[#303030] inline-block mt-5"
            >
              {isLessBrandBtn ? "Less Brands" : "More Brands"}
            </div>

            <hr className="text-[#C3C3C3] w-full my-10" />
          </div>
        )}
        {/* Price Part */}
        <PriceRange />
     </div>
      </div>
    </div>
  );
};

export default ProductListLeftSide;
