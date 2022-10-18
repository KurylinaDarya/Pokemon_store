import { useState, useCallback } from "react";

export const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  return [page, handlePageChange];
};

// import { useCallback } from "react";
// import { useSearchParams } from "react-router-dom";

// export const usePagination = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleChangePage = useCallback(
//     (_, page) => {
//       setSearchParams({ page });
//     },
//     [setSearchParams]
//   );

//   return [Number(searchParams.get("page")), handleChangePage];
// };
