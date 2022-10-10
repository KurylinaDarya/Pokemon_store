import { useState, useCallback } from "react";

export const usePagination = (initialPage) => {
  const [page, setPage] = useState(initialPage);

  const handlePageChange = useCallback((_, page) => {
    setPage(page);
  }, []);

  return [page, handlePageChange];
};
