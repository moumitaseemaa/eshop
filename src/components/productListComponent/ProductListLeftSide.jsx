import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowDownIcon from "../../icons/productList/ArrowDownIcon";
import { IoCheckmarkOutline } from "react-icons/io5";

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
];

const ProductListLeftSide = () => {
  let [isCategoryDropDownOpen, setIsCategoryDropDownOpen] = useState(true);
  let [isBrandDropDownOpen, setIsBrandDropDownOpen] = useState(true);
  let [isPriceDropDownOpen, setIsPriceDropDownOpen] = useState(true);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

  // Range slider part start here

  let updateSlider = (type, value) => {
    console.log(type);

    if (type == "min") {
      const newMin = Math.min(parseInt(value), maxValue - 10);
      setMinValue(newMin);
    } else {
      const newMax = Math.max(parseInt(value), minValue - 10);
      setMaxValue(newMax);
    }
  };

  let handleNumberInputMin = (value) => {
    value = Number(value);
    if (value <= 0) {
      setMinValue(0);
    } else {
      if (value >= 0 && value <= maxValue) {
        setMinValue(value);
      }
    }
  };

  let handleNumberInputMax = (value) => {
    value = Number(value);
    if (minValue <= value && value <= 1000) {
      setMaxValue(value);
    }
  };

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;
  // Range slider part end here

  return (
    <div>
      <div className="w-[355px] bg-[#F4F4F4] p-12 rounded-[25px]">
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
              {Brands.map((item, index) => (
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
            <Link
              to={"#"}
              className="font-['Montserrat'] font-bold text-base text-[#303030] leading-6 underline underline-offset-6 decoration-[#303030] inline-block mt-5"
            >
              More Brands
            </Link>
            <hr className="text-[#C3C3C3] w-full my-10" />
          </div>
        )}
        {/* Price Part */}
        <div
          onClick={() => setIsPriceDropDownOpen(!isPriceDropDownOpen)}
          className="flex items-center justify-between cursor-pointer"
        >
          <h3 className="font-['Montserrat'] font-bold text-xl text-[#303030] leading-7.5">
            Price
          </h3>
          <div className={`${isPriceDropDownOpen ? `rotate-0` : `rotate-180`}`}>
            <ArrowDownIcon />
          </div>
        </div>
        {isPriceDropDownOpen && (
          <div className="w-full mt-6">
            <div className="flex gap-x-[11px] mb-7.5">
              <input
                type="number"
                min={0}
                max={1000}
                value={minValue}
                onChange={(e) => handleNumberInputMin(e.target.value)}
                className="border border-[#929292] rounded-[10px] h-[74px] w-[124px] text-center font-['Montserrat'] font-medium text-base leading-6"
              />
              <input
                type="number"
                min={0}
                max={1000}
                value={maxValue}
                onChange={(e) => handleNumberInputMax(e.target.value)}
                className="border border-[#929292] rounded-[10px] h-[74px] w-[124px] text-center font-['Montserrat'] font-medium text-base leading-6"
              />
            </div>
            <div className="relative w-full h-[2px] bg-[#C3C3C3] rounded">
              <div
                className="absolute h-full  bg-[#FF624C] rounded"
                style={{
                  left: `${minPercent}%`,
                  width: `${maxPercent - minPercent}%`,
                }}
              ></div>
              <input
                type="range"
                min={0}
                max={1000}
                value={minValue}
                step={10}
                onChange={(e) => updateSlider("min", e.target.value)}
                className="absolute w-full h-full bg-transparent pointer-events-none appearance-none rounded "
                style={{ zIndex: 2 }}
              />
              <input
                type="range"
                min={10}
                max={1000}
                value={maxValue}
                step={10}
                onChange={(e) => updateSlider("max", e.target.value)}
                className="absolute w-full h-full bg-transparent pointer-events-none appearance-none rounded "
                style={{ zIndex: 2 }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListLeftSide;
