import PaginationLeftArrow from "../icons/productList/PaginationLeftArrow";
import PaginationRightArrow from "../icons/productList/PaginationRightArrow";

const Pagination = ({totalItems,itemsPerPage,currentPage,onPageChange}) => {

  let totalPages = Math.ceil(totalItems / itemsPerPage);
  let maxPagesToShow = 7;
  // let pagesToShowBeforeAfter = 3;

  let pages = [];
  if (totalPages <= maxPagesToShow) {
    for (let i = 0; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    const startPage = [1, 2];
    const endPage = [totalPages-1,totalPages];
    const middlePages = [ currentPage-1,currentPage, currentPage+1].filter(
      (p) => p > 2 && p < totalPages-1
    );
    const uniquePages = Array.from(new Set([...startPage, ...middlePages, ...endPage])).sort((a, b) => a - b);
    for (let i = 0; i < uniquePages.length; i++) {
      pages.push(uniquePages[i]);
      if (i < uniquePages.length - 1 && uniquePages[i + 1] - uniquePages[i] > 1) {
          pages.push("...");
      }
    }
  }

  // let startPage = Math.max(1, currentPage - pagesToShowBeforeAfter);
  // let endPage = Math.min(totalPages, currentPage + pagesToShowBeforeAfter);

  // if (endPage - startPage + 1 < maxPagesToShow) {
  //   if (startPage > 1) {
  //     startPage = Math.max(1, endPage - maxPagesToShow + 1);
  //   }
  //   endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
  // }

  // const pageNumbers = [];

  // for (let i = startPage; i <= endPage; i++) {
  //   pageNumbers.push(i);
  // }

  return (
    <div className="flex justify-between items-center p-4 pb-0">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className=" cursor-pointer "
      >
        <PaginationLeftArrow />
      </button>
      {pages.map((number, index) => (
        <button
          key={index}
          onClick={() => onPageChange(number)}
          className={`mx-2 size-10 rounded-[5px] font-['Poppins'] font-semibold text-xl text-[#303030] leading-7.5 cursor-pointer
          ${
            currentPage === number
              ? "bg-[#FF624C] text-white"
              : "hover:bg-gray-200"
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
    </div>
  );
};

export default Pagination;
