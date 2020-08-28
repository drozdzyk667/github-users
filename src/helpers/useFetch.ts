import React from 'react';

const useFetch = (isReady: boolean, url: string) => {
  const [response, setResponse] = React.useState<any>();
  const [error, setError] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    if (!isReady) return;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [isReady, url]);

  return { response, error, isLoading };
};

export default useFetch;
