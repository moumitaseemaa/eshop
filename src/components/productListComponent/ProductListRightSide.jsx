import { useState } from "react";
import Flex from "../commonLayouts/Flex";
import ProductLayout from "../commonLayouts/ProductLayout";
import Pagination from "../Pagination";

const ProductListRightSide = () => {
  let [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const products = Array.from({ length: 160 }, (_, index) => ({
    id: index + 1,
    name: `product ${index + 1}`,
    price: (Math.random() * 100).toFixed(2),
  }));
  // console.log(products);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="w-[80%]">
      {/* Product details */}
      <div className="pl-[26px]">
        <h5 className="font-['Poppins'] font-semibold text-4xl text-[#303030] pb-6">
          Products
        </h5>
        <Flex>
          <p className="font-['Montserrat'] font-medium text-[#303030] text-base leading-6 mb-12">
            Showing {startIndex + 1} - {currentPage * itemsPerPage} of{" "}
            {products.length} results.
          </p>
        </Flex>
      </div>
       {/* Product Category part */}
      <Flex className="gap-1 flex-wrap">
        {currentProducts.map((item, index) => (
          <div key={index} className="w-[24%]">
            <ProductLayout
              percentTag={true}
              discountPercentTag={false}
              discount="50"
              category="Audio"
              title={item.name}
              rating="5"
              ratingAmount="120"
              price="59.00"
              border={true}
              bg="transparent"
              stock={false}
              stockAmount="50"
              limitedStock={false}
              springBorder={true}
            />
          </div>
        ))}
        {/* Pagination part */}
      <div className="mx-auto mt-20">
          <Pagination
          totalItems={products.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </div>
      </Flex>
    </div>
  );
};

export default ProductListRightSide;
