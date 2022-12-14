import { useEffect, useState } from 'react';

function useFetch(url) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          const newError = await response.json();
          throw newError.message;
        }

        const results = await response.json();

        setData(results);
      } catch (e) {
        setErrors(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, data, errors };
}

export default useFetch;
