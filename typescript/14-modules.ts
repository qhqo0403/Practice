// typescript module

// typescript는 파일 내에 export 나 await 키워드가 없으면 전역적으로 공유하고 있는 스크립트 파일로 간주함.
// 파일 내에 export 가 들어간 순간 모듈 모드로 전환됨!
// export하고 import 할 때는 파일 확장자를 ts가 아니라 js 로 써야함 -> 결국 js로 변환될 것이기 때문
// 변환된 파일을 확인해보면 export와 import 대신 module.export( export.개체명 ), require 키워드가 사용됨

// typescript 에서 모듈을 사용하려면 tsconfig.json에서 module 을 "ES6" 지정되어있는지 확인!
// 모듈방식으로 작성된 ts를 js로 변환해서 브라우저에서 열려면 script 의 type="module" 속성 추가하고 라이브 서버로 확인해야함

// 기명 내보내기 : export를 사용해서 특정 항목만 내보낼 때. import할 때에는 중괄호 필요
// 기본 내보내기 : export default 로 지정하면 다른 파일에서 import할 때 기본적으로 사용할 수 있음. -> 단일 항목처럼 이름을 똑같이 적어서 사용하지 않고 따로 이름을 지정해도 기본으로 가져와지는 항목임!

// 타입 export, import
// import { type Person } from "./types.js"  -> 타입 이외의 export 하는 다른 항목이 있는 경우 사용
// import type { Person } from "./types.js"