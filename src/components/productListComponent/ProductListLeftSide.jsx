import { useState } from "react";

const ProductListLeftSide = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1000);

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

  const minPercent = (minValue / 1000) * 100;
  const maxPercent = (maxValue / 1000) * 100;
  return (
    <div className="w-[355px] max-h-[1057px] bg-[#F4F4F4] p-12 rounded-[25px]">
      <hr className="bg-[#C3C3C3] w-full my-10"  />
      <div>
        <h3 className="font-['Montserrat'] font-bold text-xl text-[#303030] leading-7.5">
          Price
        </h3>
        <div className="w-full mt-6">
          <div className="flex justify-between gap-x-[11px] mb-7.5">
            <span className="border border-[#929292] rounded-[10px] h-[74px] w-[124px] flex justify-center items-center font-['Montserrat'] font-medium text-base leading-6">
              Min:${minValue}
            </span>
            <span className="border border-[#929292] rounded-[10px] h-[74px] w-[124px] flex justify-center items-center font-['Montserrat'] font-medium text-base leading-6">
              Max:${maxValue}
            </span>
          </div>
          <div className="relative w-full h-[2px] bg-[#C3C3C3] rounded">
            <div
              className="absolute h-full bg-red-500 rounded"
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
      </div>
    </div>
  );
};

export default ProductListLeftSide;
