import { useState } from "react";

const ProductDescription = () => {
  let [descriptionActive, setDescriptionActive] = useState(false);
  let [specificationActive, setSpecificationActive] = useState(true);
  let [reviewActive, setReviewActive] = useState(false);

  let handleDescription = () => {
    setDescriptionActive(true);
    setSpecificationActive(false);
    setReviewActive(false);
  };
  let handleSpecification = () => {
    setDescriptionActive(false);
    setSpecificationActive(true);
    setReviewActive(false);
  };
  let handleReview = () => {
    setDescriptionActive(false);
    setSpecificationActive(false);
    setReviewActive(true);
  };

  return (
    <div className="border-b border-b-[#CBCBCB] mb-16">
      <div className="font-['Poppins'] font-semibold text-2xl leading-7.5 text-[#CBCBCB] flex gap-x-12 mb-[60px]">
        <h3
          onClick={handleDescription}
          className={`${
            descriptionActive &&
            "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
          }`}
        >
          Description
        </h3>
        <h3
          onClick={handleSpecification}
          className={`${
            specificationActive &&
            "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
          }`}
        >
          Specification
        </h3>
        <h3
          onClick={handleReview}
          className={`${
            reviewActive &&
            "inline-block  text-[#303030] border-b-4 border-b-[#FF624C] pb-2"
          }`}
        >
          Reviews
        </h3>
      </div>
      {descriptionActive && (
        <div className="max-w-280 font-['Poppins'] font-normal text-[#646464] text-xl leading-7.5 mb-20">
          <h5 className="font-semibold text-[#303030] mb-4">
            NexSUS Tech High-Performance Gaming Laptop
          </h5>
          <p className="mb-3">
            The NexSUS Tech laptop delivers top-tier performance with a 10th Gen
            Intel Core i9 processor, NVIDIA GeForce RTX 3080 GPU (16GB), and
            32GB DDR4 RAM, perfect for gaming and heavy multitasking. Its
            stunning 17.3" Full HD IPS display offers a 144Hz refresh rate, 3ms
            response time, and 100% sRGB color accuracy.
          </p>
          <p className="mb-3">
            Enjoy ultra-fast load times with a 1TB PCIe NVMe SSD, rich audio
            with dual 4W Smart Amp speakers, and seamless connectivity via Wi-Fi
            6, Bluetooth 5.1, and multiple ports including USB-C with
            DisplayPort and Power Delivery.
          </p>
          <p>
            Work or game longer with an up to 8-hour battery, and customize your
            experience with the RGB backlit keyboard. All of this comes in a
            sleek body weighing 6.28 lbs.
          </p>
        </div>
      )}
      { specificationActive && (
        <div className="flex justify-between items-center mb-20">
          <div>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Brand
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                NexSUS Tech Company
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Display
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5 w-[530px]">
                17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate,
                3ms response time, 100% sRGB color gamut, Adaptive-Sync
                technology, anti-glare
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Processor
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5 w-[560px]">
                10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base
                clock speed, up to 5.3GHz turbo boost)
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Graphics
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                NVIDIA GeForce RTX 3080 (16GB GDDR6 VRAM)
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Memory
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                32GB DDR4-3200 RAM
              </li>
            </ul>
            <ul className="flex gap-x-[87px]">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Storage
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                1TB PCIe NVMe M.2 SSD
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Audio
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                2 x 4W speakers with Smart Amp technology
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Connection
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5 w-[560px]">
                Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b,
                USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3
                x USB 3.2 Gen 1 Type-A, 3.5mm audio
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Keyboard
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5 w-[560px]">
                Backlit Chiclet keyboard, N-key rollover, per-key RGB lighting,
                Aura Sync technology
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Battery
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                4-cell 90Wh lithium battery (up to 8 hours battery life)
              </li>
            </ul>
            <ul className="flex gap-x-[87px] mb-8">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Dimensions
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                15.7 x 11.1 x 1.0 inches (W x D x H)
              </li>
            </ul>
            <ul className="flex gap-x-[87px]">
              <li className="w-[120px] font-['Poppins'] font-semibold text-[#303030] text-xl leading-7.5">
                Weight
              </li>
              <li className="font-['Montserrat'] font-normal text-xl text-[#303030] leading-7.5">
                6.28 pounds
              </li>
            </ul>
          </div>
        </div>
      )}
      {  reviewActive && (
        <div className='text-xl font-["Poppins"] font-normal text-[#646464] mb-20'>
          <p>No Review Available</p>
        </div>
      )}
    </div>
  );
};

export default ProductDescription;
