import PaginationLeftArrow from "../icons/productList/PaginationLeftArrow";
import PaginationRightArrow from "../icons/productList/PaginationRightArrow";

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let maxPagesToShow = 10;
  let pagesToShowBeforeAfter = 3;

  let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
  let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);
  
  if (endPage - startPage + 1 < maxPagesToShow) {
    if (startPage > 1) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  }

  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-between items-center p-4 pb-0">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" cursor-pointer "
      >
        <PaginationLeftArrow />
      </button>
      {pageNumbers.map((number, index) => (
        <button
          key={index}
          onClick={() => onPageChange(number)}
          className={`mx-4 font-['Poppins'] font-semibold text-xl text-[#303030] cursor-pointer
          ${
            currentPage === number
              ? "bg-[#FF624C] text-white px-4.5 py-[9px] rounded-[5px]"
              : " "
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" cursor-pointer "
      >
        <PaginationRightArrow />
      </button>
      {/* <span className="ml-2">
        Showing {currentPage * itemsPerPage} of {totalItems} results.
      </span> */}
    </div>
  );
};

export default Pagination;
