import { useState } from "react";
import ArrowDownIcon from "../../icons/productList/ArrowDownIcon";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);
  let [isPriceDropDownOpen, setIsPriceDropDownOpen] = useState(true);

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

  return (
    <>
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
    </>
  );
};

export default PriceRange;
