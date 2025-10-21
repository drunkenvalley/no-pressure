import React from "react";
import { useEffect, useState } from "react";

interface IdentifiedData {
  id: string;
}

interface Props<T>
  extends Omit<React.HTMLProps<HTMLDivElement>, "id" | "value"> {
  component: (props: T) => React.JSX.Element;
  value: T[];
  per: number;
  page: number;
}

export const Pagination = <T extends IdentifiedData>({
  component: Component,
  value,
  per,
  page: startingPage,
  ...rest
}: Props<T>) => {
  const [page, setPage] = useState(startingPage);
  const [dataSet, setData] = useState(value.slice(page, per));
  const maxPage = Math.ceil(value.length / per);
  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setData(value.slice((page - 1) * per, page * per));
  }, [page]);

  const current = `${page} / ${maxPage}`;
  const btnClass =
    "text-gold hover:text-green disabled:text-blue font-bold py-2 px-4 transition-all duration-300";

  const [firstPage, prevPage, nextPage, lastPage] = [
    { aria: "First", label: <>&laquo;</>, value: 1 },
    { aria: "Previous", label: <>&lsaquo;</>, value: page - 1 || 1 },
    { aria: "Next", label: <>&rsaquo;</>, value: Math.min(page + 1, maxPage) },
    { aria: "Last", label: <>&raquo;</>, value: maxPage },
  ].map(({ aria, label, value }) => (
    <button
      aria-label={`${aria} page of results`}
      className={btnClass}
      disabled={value === page}
      key={aria}
      onClick={() => handlePageChange(value)}
    >
      {label}
    </button>
  ));

  return (
    <div {...rest}>
      {dataSet.map((item) => (
        <Component key={item.id} {...item} />
      ))}

      <div className="flex justify-center items-center">
        {firstPage} {prevPage} {current} {nextPage} {lastPage}
      </div>
    </div>
  );
};

export default Pagination;
