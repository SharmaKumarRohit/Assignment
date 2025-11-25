import { useState, useEffect } from "react";

function useFetch(url) {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function fetchProducts() {
      setIsPending(true);
      setIsError(null);

      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setIsError(`Error : ${error.message || "Something Went Wrong"}`);
        }
      } finally {
        if (!signal.aborted) {
          setIsPending(false);
        }
      }
    }

    fetchProducts();

    return () => controller.abort();
  }, [url]);

  return { products, isPending, isError };
}

export default useFetch;
