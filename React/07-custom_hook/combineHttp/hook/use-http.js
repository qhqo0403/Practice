import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : 'GET',
          headers: requestConfig.header ? requestConfig.header : {},
          body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
          // 불필요한 더미데이터를 만들지 않기 위해 객체 사전 구성
        }
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyData(data);

    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  // 객체의 키와 값이 같은 이름이라면 줄여서 표시할 수 있음
  return {
    isLoading,
    error,
    sendRequest
  }
}

export default useHttp;