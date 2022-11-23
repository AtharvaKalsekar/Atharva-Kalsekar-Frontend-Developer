import { usePaginationContext } from './PaginationContext';

const Footer = () => {
  const {
    currentPage,
    totalNumberOfPages,
    onClickPage,
    onClickNextPage,
    onClickPreviousPage,
  } = usePaginationContext();
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="mx-3" onClick={onClickPreviousPage}>
        {"<"}
      </div>
      {Array.from<number>({ length: totalNumberOfPages }).map((item, index) => {
        const isActive = currentPage === index + 1;
        return (
          <div
            onClick={() => onClickPage(index + 1)}
            className={`mx-3 ${isActive && "bg-blue-700"}`}
            key={index + 1}
          >
            {index + 1}
          </div>
        );
      })}
      <div className="mx-3" onClick={onClickNextPage}>
        {">"}
      </div>
    </div>
  );
};

export default Footer;
