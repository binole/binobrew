import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const refetch = useCallback(() => {
    setStatus("pending");
    setData(null);
    setError(null);
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setStatus("success");
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
      });
  }, [url]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { refetch, status, data, error };
};

export default useFetch;
