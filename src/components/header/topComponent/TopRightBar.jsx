import React, { useEffect, useRef, useState } from "react";
import Flex from "../../commonLayouts/Flex";
import { FaAngleDown } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRightBar = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isPost, setIsPost] = useState(false);
  const countryRef = useRef(null);

  const countries = [
    {
      name: "United State",
      value: "USA",
      flag: "https://flagcdn.com/16x12/us.png",
    },
    { name: "Canada", value: "CA", flag: "https://flagcdn.com/16x12/ca.png" },
    {
      name: "United King",
      value: "UK",
      flag: "https://flagcdn.com/16x12/gb.png",
    },
    {
      name: "Australia",
      value: "AU",
      flag: "https://flagcdn.com/16x12/au.png",
    },
    { name: "Germany", value: "GE", flag: "https://flagcdn.com/16x12/de.png" },
    { name: "France", value: "FR", flag: "https://flagcdn.com/16x12/fr.png" },
  ];

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsPost(false);
  };

  // useEffect of CountryNameDropDown
  useEffect(() => {
    let handleClickCountryOutSide = (event) => {
      console.log(countryRef.current.contains(event.target));
      if (countryRef.current && !countryRef.current.contains(event.target))
        setIsPost(false);
    };
    document.addEventListener("mouseover", handleClickCountryOutSide);
    return () => {
      document.removeEventListener("mouseover", handleClickCountryOutSide);
    };
  }, []);

  return (
    <Flex className={"justify-end items-center gap-x-[50px]"}>
      <div>
        <select name="currency">
          <option value="USD">USD</option>
          <option value="BDT">EUR</option>
          <option value="BDT">BDT</option>
          <option value="BDT">AUD</option>
          <option value="BDT">RUB</option>
          <option value="BDT">CAD</option>
          <option value="BDT">INR</option>
          <option value="BDT">AED</option>
        </select>
      </div>
      <div
        className="relative after:absolute after:content-[''] after:bg-[#BFBFBF] after:w-[1px] after:h-[32px] after:left-[-25px] after:top-[50%] after:-translate-y-1/2 before:absolute before:content-[''] before:bg-[#BFBFBF] before:w-[1px] before:h-[32px] before:right-[-25px] before:top-[50%] before:-translate-y-1/2"
        ref={countryRef}
      >
        <select
          className="w-[150px] hidden "
          name="country"
          value={selectedCountry?.value || ""}
          onChange={(e) => {
            const country = countries.find((c) => c.value === e.target.value);
            setSelectedCountry(country);
          }}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>

        {/* custom dropdown */}
        <div
          className={"w-[175px]  p-2 cursor-pointer flex items-center"}
          onMouseOver={() => setIsPost(!isPost)}
        >
          {selectedCountry ? (
            <>
              <img
                src={selectedCountry?.flag}
                alt={selectedCountry?.name}
                className={"w-5 h-4 mr-2"}
              />
              <span className="mr-6 ">{selectedCountry?.name}</span>
              <FaAngleDown />
            </>
          ) : (
            <span className="gap-3 flex items-center">
              select a country <FaAngleDown />
            </span>
          )}
        </div>

        {/* option list */}
        {isPost && (
          <ul className="absolute shadow-lg w-full border border-gray-300 bg-white z-10">
            {countries.map((country, index) => (
              <li
                key={country.value}
                className="flex items-center gap-2 p-2  hover:border-gray-200 cursor-pointer "
                onClick={() => handleSelectCountry(country)}
              >
                <img
                  src={country?.flag}
                  alt={country?.name}
                  className={"w-5 h-4 mr-2"}
                />
                {country.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Flex className={"items-center gap-4"}>
        <Link to="/">
          <FaFacebookF />
        </Link>
        <Link to="/">
          <FaTwitter />
        </Link>
        <Link to="/">
          <FaInstagram />
        </Link>
      </Flex>
    </Flex>
  );
};

export default TopRightBar;
