// 타입 단언 (type declaration) : 라이브러리를 사용할 때 타입 정보가 담긴 타입 선언 파일
// .d.ts 의 형태

// tsc --init 으로 생성한 tsconfig.json 파일에서 lib 속성과 관련!
// 기본값은 lib.dom.d.ts 로 설정되어 있고 다른 라이브러리를 추가할 때 dom 도 같이 써줘야함!
// package.json 파일은 npm init -y -> -y는 설정 질문 모두 yes 처리

// Axios 는 기본 타입 선언 파일이 같이 제공됨
// axios에 제너릭 타입을 전달하면 전달된 타입과 같은 데이터가 반환됨! -> boolean을 전달하면 boolean형태의 데이터가 반환

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
/* 
axios
  .get<User>("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log("WOO!!!");
    printUser(res.data);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });

axios
  .get<User[]>("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    console.log("WOO!!!");
    res.data.forEach(printUser);
  })
  .catch((e) => {
    console.log("ERROR!", e);
  });
 */
function printUser(user: User) {
  console.log(user.name);
  console.log(user.email);
  console.log(user.phone);
}


// 기본으로 타입 정의 파일이 없다면 따로 설치해줘야함
// npm install --save-dev @types/패키지이름 -> 거의 다 설치가 되겠지만 DefinitelyTyped 에 있는지 확인하거나 typescript 공식문서에서 검색해보긴 해야함!
// --save-dev 인 이유는 typescript가 프로덕션 단계에서는 거의 필요가 없기 때문