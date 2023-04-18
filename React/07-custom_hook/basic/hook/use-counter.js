import { useEffect, useState } from "react";

// 매개변수로 함수를 전달하는 방법도 있음! -> const useCounter = (countUpdateFunc) => { ~~ } 하면 매개변수로 (prevCounter) => prevCounter + 1 전달
const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [forwards]);
  // 어떤 유형의 데이터이던지 반환할 수 있음
  return counter;
}

export default useCounter;