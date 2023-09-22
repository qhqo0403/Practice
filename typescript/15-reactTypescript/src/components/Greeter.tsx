import React from "react";

interface GreeterProps {
  person: string;
}

const Greeter = ({person}: GreeterProps): JSX.Element => { // JSX.Element 를 명시하는 것은 선택사항이긴 하지만 쓰는것도 좋음
  return (
    <h1>Hello! {person}!</h1>
  )
};

export default Greeter;

// props: {person: string} -> 프롭이 한 개 일때, 위의 방식처럼 객체분해로 가져와도 됨!
// props: GreeterProps -> 여러개일 때에는 interface 만들어서 사용
