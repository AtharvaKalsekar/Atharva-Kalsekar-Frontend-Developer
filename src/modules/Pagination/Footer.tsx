import { usePaginationContext } from './PaginationContext';

const Footer = () => {
  const {
    currentPage,
    totalNumberOfPages,
    onClickPage,
    onClickNextPage,
    onClickPreviousPage,
    isFirstPage,
    isLastPage,
  } = usePaginationContext();
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <button
        className={`mx-3 cursor-pointer rounded-md p-2 font-semibold hover:bg-blue-300 hover:text-white ${
          isFirstPage ? "cursor-not-allowed" : ""
        }`}
        onClick={onClickPreviousPage}
      >
        {"<"}
      </button>
      {Array.from<number>({ length: totalNumberOfPages }).map((item, index) => {
        const isActive = currentPage === index + 1;
        return (
          <div
            onClick={() => onClickPage(index + 1)}
            className={`mx-3 cursor-pointer rounded-md p-2 font-semibold hover:bg-blue-300 hover:text-white ${
              isActive && "bg-blue-700 text-white"
            }`}
            key={index + 1}
          >
            {index + 1}
          </div>
        );
      })}
      <button
        className={`mx-3 cursor-pointer rounded-md p-2 font-semibold hover:bg-blue-300 hover:text-white ${
          isLastPage ? "cursor-not-allowed" : ""
        }`}
        onClick={onClickNextPage}
      >
        {">"}
      </button>
    </div>
  );
};

export default Footer;
