import { useCallback, useEffect, useState } from "react";
// import { delay } from "../utils/slowFetch";

export const useFetching = (
  asyncCallback,
  initialValue,
  isLoadOnMound = true
) => {
  const [data, setData] = useState(initialValue); /*([])*/
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDataLoad = useCallback(async (data) => {
    setIsLoading(true);
    try {
      //   await delay(5000);
      const response = await asyncCallback(data);

      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoadOnMound) {
      handleDataLoad();
    }
  }, [isLoadOnMound]);

  return { data, isLoading, error, handleDataLoad };
};
