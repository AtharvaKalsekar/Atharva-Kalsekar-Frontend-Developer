import { usePaginationContext } from './PaginationContext';

const Footer = () => {
  const { currentPage, totalNumberOfPages } = usePaginationContext();
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <div className="mx-3">{"<"}</div>
      {Array.from<number>({ length: totalNumberOfPages }).map((item, index) => {
        const isActive = currentPage === index + 1;
        return (
          <div className={`mx-3 ${isActive && "bg-blue-700"}`} key={index + 1}>
            {index + 1}
          </div>
        );
      })}
      <div className="mx-3">{">"}</div>
    </div>
  );
};

export default Footer;
